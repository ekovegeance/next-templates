"use client";
import { useSession } from "next-auth/react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import Hero from "@/components/site/hero";
import Features from "@/components/site/features";
import CTA from "@/components/site/cta";
import { BackgroundGrid } from "@/components/site/background-grid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkle } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <main>
        <BackgroundGrid />
        <Link href="https://github.com/ekovegeance/Fullstack-Nextjs-Templates/discussions/5">
          <Alert className="mx-auto w-fit mt-4">
            <Sparkle className="h4 w-4" />
            <AlertTitle className="font-semibold text-orange-600">
              Got an idea?
            </AlertTitle>
            <AlertDescription>
              Let us know! Submit your feature requests
            </AlertDescription>
          </Alert>
        </Link>
        <Hero />
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
        <Features />
        <CTA />
      </main>
    </>
  );
}
