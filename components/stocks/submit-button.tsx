"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import Loading from "../ui/loading";

export default function SubmitButton({
  submitting,
  submit,
}: {
  submitting: React.ReactNode;
  submit: React.ReactNode;
}) {
  const { pending = false } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? (
        <div className="flex justify-center items-center gap-2">
          <Loading />
          {submitting}
        </div>
      ) : (
        submit
      )}
    </Button>
  );
}
