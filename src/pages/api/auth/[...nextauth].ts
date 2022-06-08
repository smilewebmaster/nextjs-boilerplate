//
// Next Auth API
// ...
//

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import prisma from '@app/utils/prisma'
import providers from '@app/utils/providers'

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.JWT_SIGNING_PRIVATE_KEY as string,
    providers,
    session: {
        strategy: 'database',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        // newUser: '/auth/new-user',
    },
    callbacks: {
        redirect: async (params: { url: string; baseUrl: string }) =>
            Promise.resolve(params.baseUrl),
        session: async ({ session, user }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    role: user.role,
                },
            }
        },
    },
})

declare module 'next-auth' {
    type Role = {
        USER: 'USER'
        ADMIN: 'ADMIN'
        MODERATOR: 'MODERATOR'
    }

    interface Session {
        user: {
            id: string
            name: string
            email: string
            image?: string | null
            role: Role
        }
    }

    interface User {
        role: Role
    }
}

//
// END
//
