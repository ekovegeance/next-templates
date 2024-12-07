
import { object, string } from 'zod';


// zod is a TypeScript-first schema declaration and validation library.
/* example
import { z } from 'zod';
const schema = z.object({
    email: z.string().email('Invalid email address'),
  }) */


// Register
export const registerSchema = object({
    name: string().min(3, "Name must be more then 1 Character"),
    email: string().email("Invalid Email"),
    password: string().min(6, "Password must be more then 6 Character").max(32, "Password must be less then 32 Character"),
    confirmPassword: string().min(6, "Password must be more then 6 Character '").max(32, "Password must be less then 32 Character"),
}).refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });


// Login
export const loginSchema = object({
    email: string().email("Invalid Email ").min(3, "Email must be more then 3 Character"),
    password: string().min(6, "Password must be more then 6 Character").max(32, "Password must be less then 32 Character"),
});


// Forgot Password
export const forgotPasswordSchema = object({
    email: string().email('Invalid email address'),
});