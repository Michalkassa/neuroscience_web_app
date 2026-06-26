// Authorized-email allowlist.
//
// Only emails listed in the ALLOWED_EMAILS env var are permitted to log in.
// This is the single source of truth for "who is allowed". There is no public
// sign-up: accounts are created via `npm run seed` (see prisma/seed.mjs), and
// even an account that somehow exists in the database cannot log in unless its
// email is in this list.
//
// Format (comma-separated): ALLOWED_EMAILS="admin@example.com, me@example.com"

export function getAllowedEmails(): string[] {
  return (process.env.ALLOWED_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAllowedEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return getAllowedEmails().includes(email.trim().toLowerCase());
}
