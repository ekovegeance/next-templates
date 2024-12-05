
/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from '@/lib/prisma';
import { User} from '@/types/user';





export const getUsers = async (): Promise<User[]> => {
    try {
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
    } catch (error) {
        throw new Error('Failed to fetch users');
        
    }
};

export const getUserById = async (id: string) => {
    try {
        return await prisma.user.findUnique({
            where: { id },
            include: {
                posts: true,
            },
        });
    } catch (error) {
        throw new Error('Failed to fetch user');
    }

}