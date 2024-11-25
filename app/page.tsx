"use client";
import { Navbar } from "@/components/home/navbar";
import { useSession } from "next-auth/react";
import { Author } from "@/components/home/author";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default  function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 px-4 lg:px-8 pt-20">
        <h1 className="text-3xl font-bold text-zinc-900">Fullstack Next</h1>
        <p className="text-lg text-zinc-500">CRUD Nextjs Apps Templates</p>
        <p className=" text-zinc-500">
          Powered by <Author />
        </p>
        <Card>
          <CardHeader>Session</CardHeader>
          <CardContent>
            <p className=" text-zinc-800 truncate">{JSON.stringify(session)}</p>
            <p className=" text-green-500">{JSON.stringify(status)}</p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
