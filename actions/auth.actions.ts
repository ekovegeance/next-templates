
/* eslint-disable @typescript-eslint/no-unused-vars */

'use server'

import { registerSchema, loginSchema, forgotPasswordSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { z } from 'zod'


// Register
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

// Login
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

// SignOut
export async function SignOut() {
    await signOut({redirectTo: "/login"});
  }


// Forgot Password
  export async function forgotPassword(prevState: unknown, formData: FormData) {
    const validatedFields = forgotPasswordSchema.safeParse({
      email: formData.get('email'),
    })
  
    if (!validatedFields.success) {
      return { error: validatedFields.error.flatten().fieldErrors }
    }
  
    const { email } = validatedFields.data
  
    try {
      // Here you would typically call your authentication service
      // to send a password reset email
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      console.log('Password reset email sent to:', email)
      return { success: true }
    } catch (error) {
      return { error: 'Failed to send reset email. Please try again.' }
    }
  }
  