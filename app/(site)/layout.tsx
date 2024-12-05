import Footer from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import React from "react";
import { cn } from "@/lib/utils"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={cn(
  "min-h-screen bg-background font-sans antialiased",
  "bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800",
)}>
        <div>
          <Navbar />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 px-4 lg:px-8 pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
