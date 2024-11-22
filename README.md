![fullstack](https://github.com/ekovegeance/Fullstack-Nextjs-Templates/blob/main/fullstack.png)

## Getting Started

First, run the development server:

```bash
git clone https://github.com/ekovegeance/Fullstack-Nextjs-Templates.git
npm install && npm run dev
```
Configure your local environment
```bash
cp .env.local.example .env.local
```
Migrate database
```bash
npx prisma migrate dev --name init
npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tech Stack

Modern Javascript Stack

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma ORM](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql) - PostgreSQL
- [Auth JS](https://next-auth.js.org/getting-started/introduction) - Credentials Providers

With shadcn/ui [Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.](https://ui.shadcn.com/) 

## Features
- Auth (Credential, Github Sign In)
- Dashboard (On Develop)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
