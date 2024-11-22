/* eslint-disable @typescript-eslint/no-unused-vars */
import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";


declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"];
    }

    interface User {
        role: string;
        avatar: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string;
        role: string;
        avatar: string;

    }

}