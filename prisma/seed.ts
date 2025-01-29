import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const defaultPassword = '$2a$10$ZT8aYJsNvaH.gBE8Y0r.c.MPqvCPAODAlbhKvl7MG8EcqeFWcauba' // test123

async function main() {

    const user = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            name: 'User',
            password: defaultPassword
        },
    })
    
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin',
            password: defaultPassword,
            /*
            posts: {
                create: [
                    {
                        title: 'Follow Prisma on Twitter',
                        content: 'https://twitter.com/prisma',
                        published: true,
                    },
                    {
                        title: 'Follow Nexus on Twitter',
                        content: 'https://twitter.com/nexusgql',
                        published: true,
                    },
                ],
            },
            */
        },
    })
    
    console.log({ user, admin })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })