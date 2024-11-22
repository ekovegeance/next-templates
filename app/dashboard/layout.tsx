import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
