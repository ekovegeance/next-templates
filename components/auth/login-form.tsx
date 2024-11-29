"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { loginCredentials } from "@/lib/actions";
import { useFormState } from "react-dom";
import { signIn } from "next-auth/react";
import { Github } from "lucide-react";
import SubmitButton from "./submit-button";

export function LoginForm() {
  const searchParams = useSearchParams(); // Hook untuk mendapatkan query string
  const error = searchParams?.get("error"); // Mendapatkan nilai dari query parameter `error`

  const [state, formAction] = useFormState(loginCredentials, null);


  return (
    <div>
      <form action={formAction}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error === "OAuthAccountNotLinked" ? (
              <Alert variant="destructive" className="my-3">
                <TriangleAlert />
                <AlertTitle className="font-semibold">{error}</AlertTitle>
                <AlertDescription>
                  Account already use by other provider
                </AlertDescription>
              </Alert>
            ) : null}
            {state?.message && (
              <Alert variant="destructive" className="my-3">
                <TriangleAlert />
                <AlertTitle className="font-semibold">Woops!</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                />
                {state?.error?.email && (
                  <Label className="text-red-500">{state.error.email}</Label>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" name="password" />
                {state?.error?.password && (
                  <Label className="text-red-500">{state.error.password}</Label>
                )}
              </div>
              <SubmitButton
                submitting="Login..."
                submit="Login"
              />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("github")}
              >
                Login with GitHub
                <Github />
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="#" className="underline">
                User Agreement
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
