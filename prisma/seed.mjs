// Creates (or updates) the admin account.
//
// Run with:  npm run seed
//
// Reads ADMIN_EMAIL and ADMIN_PASSWORD from .env, verifies the email is in the
// ALLOWED_EMAILS allowlist, hashes the password, and upserts the user. This is
// the only supported way to create a login-capable account — there is no public
// sign-up.

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcrypt'

function isAllowedEmail(email) {
  const allowed = (process.env.ALLOWED_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
  return !!email && allowed.includes(email.trim().toLowerCase())
}

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  const name = process.env.ADMIN_NAME ?? 'Admin'

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env')
  }
  if (!isAllowedEmail(email)) {
    throw new Error(
      `ADMIN_EMAIL (${email}) is not in ALLOWED_EMAILS. Add it there first.`,
    )
  }

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

  const passwordHash = await bcrypt.hash(password, 12)

  const user = await prisma.user.upsert({
    where: { email: email.toLowerCase() },
    update: { password: passwordHash, name },
    create: { email: email.toLowerCase(), name, password: passwordHash },
  })

  console.log(`Admin account ready: ${user.email}`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
