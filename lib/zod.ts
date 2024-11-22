
import { object, string } from 'zod';

export const registerSchema = object({
    name: string().min(3, "Name must be more then 1 Character"),
    email: string().email("Invalid Email"),
    password: string().min(6, "Password must be more then 6 Character").max(32, "Password must be less then 32 Character"),
    confirmPassword: string().min(6, "Password must be more then 6 Character '").max(32, "Password must be less then 32 Character"),
}).refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });


export const loginSchema = object({
    email: string().email("Invalid Email ").min(3, "Email must be more then 3 Character"),
    password: string().min(6, "Password must be more then 6 Character").max(32, "Password must be less then 32 Character"),
});
