import { prisma } from '@/lib/prisma';
import { User } from '@/types/user';




export const getUsers = async (): Promise<User[]> => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            role: true,
        },
    });
    
    return users;
};