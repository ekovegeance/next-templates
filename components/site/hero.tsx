import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Author } from "@/components/site/author";
import { Triangle } from "lucide-react";

export default function Hero() {
  return (
    <section className="container flex flex-col items-center gap-4 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">
          Fullstack Next.js Templates
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          This project is a modern Full Stack solution based on{" "}
          <Link href="https://nextjs.org/docs" className=" text-zinc-900">
            Next.js,
          </Link>
          designed to be open-source and reusable, making it easier for
          developers to build web applications quickly and efficiently. Equipped
          with the latest technologies like{" "}
          <Link
            href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"
            className=" text-indigo-700"
          >
            Prisma ORM - PostgreSQL
          </Link>
          , and <Link href="https://authjs.dev/getting-started" className="text-violet-700">Auth.js</Link>, it also features an aesthetically pleasing and
          responsive interface powered by <Link href="https://ui.shadcn.com/" className="text-zinc-900"> Shadcn/UI.</Link>
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
