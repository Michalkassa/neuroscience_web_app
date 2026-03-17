import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import prisma from "@/app/api/prisma"
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials): Promise<User | null> => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email as string
            }
          })
          if (!user || !user.password) {
            return null
          }
          const isPasswordValid = credentials.password === user.password // TODO use bcrypt here
          if (!isPasswordValid) {
            return null
          }
          return {
            id: user.id as string,
            email: user.email as string,
            name: user.name as string,
          }
        } catch (error) {
          console.error('Error during authentication:', error)
          return null
        }
      }
    })
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    },
  },
})