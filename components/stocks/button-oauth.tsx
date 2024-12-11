// Dependencies: pnpm install @remixicon/react

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {  RiGithubFill, RiGoogleFill } from "@remixicon/react";


/**
 * UI component for login with
 * @see https://originui.com/buttons
 * @returns
 */

// Login with Github
export function LoginWithGithub() {
    return (
        <Button className="bg-[#333333] text-white after:flex-1 hover:bg-[#333333]/90" onClick={(() => signIn("github"))}>
            <span className="pointer-events-none me-2 flex-1">
                <RiGithubFill className="opacity-60" size={16} aria-hidden="true" />
            </span>
            Login with GitHub
        </Button>
    )
}

// Login with Google
export function LoginWithGoogle() {
    return (
        <Button className="bg-[#DB4437] text-white after:flex-1 hover:bg-[#DB4437]/90" onClick={(() => signIn("google"))}>
            <span className="pointer-events-none me-2 flex-1">
                <RiGoogleFill className="opacity-60" size={16} aria-hidden="true" />
            </span>
            Login with Google
        </Button>
    )
}
