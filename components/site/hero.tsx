import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Author } from "@/components/site/author";
import { Triangle } from "lucide-react";

export default function Hero() {
  return (
    <section className="container flex flex-col items-center gap-4 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-extrabold md:text-5xl lg:text-6xl lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">
          Fullstack Next.js Templates
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          This modern Full Stack{" "}
          <Link href="https://nextjs.org/docs" className=" text-zinc-900">
            Next.js
          </Link>{" "}
          solution is open-source and reusable, enabling developers to build web
          applications quickly and efficiently with{" "}
          <Link
            href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"
            className=" text-indigo-700"
          >
            Prisma ORM - PostgreSQL
          </Link>
          ,{" "}
          <Link
            href="https://authjs.dev/getting-started"
            className="text-violet-700"
          >
            Auth.js
          </Link>
          , and a responsive{" "}
          <Link href="https://ui.shadcn.com/" className="text-zinc-900">
            Shadcn/UI 
          </Link>
          interface.
        </p>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Powered by <Author />
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="https://github.com/ekovegeance/Fullstack-Nextjs-Templates">
            Get Started
          </Link>
        </Button>
        <Button size="lg" variant="secondary">
          <Triangle />
          <Link href="https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fekovegeance%2FFullstack-Nextjs-Templates">
            Deploy with Vercel
          </Link>
        </Button>
      </div>
    </section>
  );
}
