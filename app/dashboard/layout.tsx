import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'sonner';


export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SessionProvider>
        {children} 
        <Toaster richColors={true} closeButton={true} />
      </SessionProvider>
    </div>
  );
}
