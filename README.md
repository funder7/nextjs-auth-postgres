# Next.js + PostgreSQL Auth Starter

This is a [Next.js](https://nextjs.org/) starter kit that uses [NextAuth.js](https://next-auth.js.org/) for simple email + password login, [Prisma](https://www.prisma.io/orm) as the ORM, and a Postgres database to persist the data.

Based on the [Next.js Postgres Auth Starter with Drizzle](https://vercel.com/templates/next.js/prisma-postgres-auth-starter) template.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


In second place, launch docker compose to instantiate the required services:

```bash
docker compose up -d 
```

Finally, initialize the db with: 

```bash
pnpm migrate
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
