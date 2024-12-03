import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SessionProvider>
        {children} 
        <Toaster />
      </SessionProvider>
    </div>
  );
}
