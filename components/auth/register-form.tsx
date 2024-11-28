"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerCredentials } from "@/lib/actions";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useFormState, useFormStatus } from "react-dom";

export function RegisterForm() {
  const [state, formAction] = useFormState(registerCredentials, null);
  const { pending } = useFormStatus();

  console.log("State:", state); // Debugging
  console.log("Form Action:", formAction); // Debugging

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
              <Button disabled={pending} type="submit" className="w-full">
                {pending ? "Registering..." : "Create Account"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Have an account?{" "}
              <Link href="login" className="underline">
                Login
              </Link>
            </div>
          </div>
          </form>
        </div>
      </div>
    
  );
}
