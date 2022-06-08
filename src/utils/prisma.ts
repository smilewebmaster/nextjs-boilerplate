//
// Prisma Client
// ...
//

import { PrismaClient } from '@prisma/client'

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
    prisma: PrismaClient
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal

// For rejectOnNotFound
// https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#rejectonnotfound
const prisma =
    global.prisma ||
    new PrismaClient({
        log: [
            { emit: 'stdout', level: 'query' },
            { emit: 'stdout', level: 'error' },
            { emit: 'stdout', level: 'info' },
            { emit: 'stdout', level: 'warn' },
        ],
        rejectOnNotFound: {
            findFirst: {},
            findUnique: {},
        },
    })

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma

//
// END
//
