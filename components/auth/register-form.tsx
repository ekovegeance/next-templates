"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";
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
    <form action={formAction}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
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
              <Input id="name" name="name" type="text" placeholder="John Doe" />
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
              {pending ? "Registering" : "Register"}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <Link href="login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
