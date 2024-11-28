import { Navbar } from "@/components/site/navbar";
import React from "react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar/>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 px-4 lg:px-8 pt-20">{children}</main>
    </div>
  );
}
