"use client";
import { useSession } from "next-auth/react";
import { Author } from "@/components/site/author";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold text-zinc-900">Fullstack Next</h1>
        <p className="text-lg text-zinc-500">CRUD Nextjs Apps Templates</p>
        <p className=" text-zinc-500">
          Powered by <Author />
        </p>
        <Card>
          <CardHeader>
            <CardTitle>
              Authentication for the Web.{" "}
              <Link
                className="underline text-violet-700"
                href="https://authjs.dev/"
              >
                Auth.js
              </Link>
            </CardTitle>
            <CardDescription>
              In this example, only some fields in the user object is passed to
              the page to avoid exposing sensitive information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className=" text-zinc-800 truncate">{JSON.stringify(session)}</p>
            <p className=" text-green-500">{JSON.stringify(status)}</p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
