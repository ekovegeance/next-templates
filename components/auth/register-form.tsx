'use client'

import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerCredentials } from "@/actions/auth.action";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useFormState } from "react-dom";
import SubmitButton from "../stocks/submit-button";
import { LoginWithGithub, LoginWithGoogle } from "../stocks/button-oauth";

export function RegisterForm() {
  const [state, formAction] = useFormState(registerCredentials, null);

  return (
    <div className="flex items-center justify-center px-8 py-12 md:px-12">
      <div className="mx-auto w-full max-w-sm space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to get started
          </p>
        </div>
        <form action={formAction}>
          <div className="space-y-6">
            {state?.message && (
              <Alert variant="destructive" className="my-3">
                <TriangleAlert />
                <AlertTitle className="font-semibold">Woops!</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                />
                {state?.error?.name && (
                  <Label className="text-red-500">{state.error.name}</Label>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                />
                {state?.error?.email && (
                  <Label className="text-red-500">{state.error.email}</Label>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
                {state?.error?.password && (
                  <Label className="text-red-500">{state.error.password}</Label>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                />
                {state?.error?.confirmPassword && (
                  <Label className="text-red-500">
                    {state.error.confirmPassword}
                  </Label>
                )}
              </div>
              <SubmitButton submitting={"Registering..."} submit={"Register"} />
            </div>
          </div>
        </form>
        <div className="grid gap-2">
          <p className="text-center text-sm text-muted-foreground">Or Login With</p>
          <LoginWithGithub/>
          <LoginWithGoogle/>
        </div>
        <div className="mt-4 text-center text-sm">
          Have an account?{" "}
          <Link href="login" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
