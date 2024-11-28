"use client";

import * as React from "react";
import Link from "next/link";
import { Command, Menu, X } from "lucide-react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { NavUser } from "./nav-user";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Users", href: "/users" },
  { name: "CRUD", href: "/crud" },
  { name: "contact", href: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session, status } = useSession();

  const pathname = usePathname();

  return (
    <nav className="bg-white/65 backdrop-blur border-b border-border/40 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium text-zinc-500",
                    pathname === link.href
                      ? " text-zinc-900"
                      : " text-zinc-500 hover:text-zinc-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {status === "authenticated" && session?.user ? (
              <NavUser
                user={
                  session.user as { name: string; email: string; image: string }
                }
              />
            ) : (
              <div className="flex items-center px-4 gap-2">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="mr-2 w-full justify-center"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full justify-center">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 px-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "block pl-3 pr-4 py-2 text-base font-medium",
                  pathname === link.href
                    ? " text-zinc-900"
                    : " text-zinc-500 hover:text-zinc-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            {/* <Link
              href="/"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/users"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Users
            </Link>
            <Link
              href="/crud"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              CRUD
            </Link>
            <Link
              href="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link> */}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Suspense fallback={<p>Loading...</p>}>
              <div className="flex items-center px-4 gap-2">
                {status === "authenticated" && session?.user ? (
                  <div>
                    <NavUser
                      user={
                        session.user as {
                          name: string;
                          email: string;
                          image: string;
                        }
                      }
                    />
                  </div>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="mr-2 w-full justify-center"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full justify-center">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </Suspense>
          </div>
        </div>
      )}
    </nav>
  );
}
