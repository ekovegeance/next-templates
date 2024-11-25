
import { PrismaClient } from "@prisma/client"



const prisma = new PrismaClient();

export const getUsers = async () => {
    const users = await prisma.user.findMany({ select: { name: true, email: true, image: true, role: true } });
    return users;
}