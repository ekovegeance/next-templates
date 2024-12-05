
/* eslint-disable @typescript-eslint/no-unused-vars */

'use server'

import { registerSchema, loginSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export const registerCredentials = async (prevState: unknown, formData: FormData) => {

    const validatedFields = registerSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = hashSync(password, 10);

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        })
    } catch (error) {
        return {message: "An error occurred while creating the user."}
    }
    
    redirect("/login");
}

export const loginCredentials = async (prevState: unknown, formData: FormData) => {

    const validatedFields = loginSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {email, password, redirectTo: "/dashboard"});
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {message: "Invalid credentials"};
                default:
                    return {message: "An error occurred while signing in."};
            }
        }
        throw error;
    }
}

export async function SignOut() {
    await signOut({redirectTo: "/login"});
  }
