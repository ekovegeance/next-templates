![fullstack](https://github.com/ekovegeance/next-templates/blob/main/next-templates.png)

## Getting Started

First, run the development server:

```bash
git clone https://github.com/ekovegeance/Fullstack-Nextjs-Templates.git
npm install && npm run dev
```
Configure your local environment
```bash
cp .env.example .env
```
Migrate database
```bash
npx prisma migrate dev --name init
npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. And see [Documentation](https://github.com/ekovegeance/Fullstack-Nextjs-Templates/blob/main/DOCS.md)


## Tech Stack

Modern Javascript Stack

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma ORM](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql) - PostgreSQL
- [Auth JS](https://authjs.dev/getting-started) - Credentials Providers
- [Dependencies/ third party library](https://github.com/ekovegeance/Fullstack-Nextjs-Templates/blob/main/package.json)

With shadcn/ui [Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.](https://ui.shadcn.com/) 
Generate UI [v0](https://v0.dev/https://v0.dev/)

## Show more
- [Project](https://github.com/users/ekovegeance/projects/8)
- [Discussions](https://github.com/ekovegeance/Fullstack-Nextjs-Templates/discussions/5)


## Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fekovegeance%2FFullstack-Nextjs-Templates%2F&showOptionalTeamCreation=false&teamSlug=ekovegeances-projects)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
