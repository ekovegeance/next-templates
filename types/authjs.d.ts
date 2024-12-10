/* eslint-disable @typescript-eslint/no-unused-vars */
import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";


declare module "next-auth" {
    interface User {
        id: string;
        username: string;
        role: string; 
        image: string;
    }

    interface Session {
        user: User & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string;
        username: string;
        role: string; 
        image: string;
    }
}
