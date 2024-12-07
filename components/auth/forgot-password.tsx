"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { forgotPassword } from "@/actions/auth.actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import SubmitButton from "../stocks/submit-button";


export default function ForgotPassword() {
  const [state, formAction] = useFormState(forgotPassword, null);
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen white">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Enter your email to receive a password reset link.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {state?.error && (
              <div className="flex items-center space-x-2 text-red-500">
                <AlertCircle size={20} />
                <span>
                  {typeof state.error === "string"
                    ? state.error
                    : state.error.email}
                </span>
              </div>
            )}
            {state?.success && (
              <div className="flex items-center space-x-2 text-green-500">
                <CheckCircle2 size={20} />
                <span>Reset link sent! Check your email.</span>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton submitting="Sending" submit="Send Reset Link" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
