'use server'
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';


export const getPosts = async () => {
    const posts = await prisma.post.findMany({ include: { user: true } })
    return posts
};


export async function getPostBySlug(slug: string) {
    return await prisma.post.findUnique({
        where: { slug }, include: { user: true }
    });
}

export async function createPost(fromData: FormData) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    await prisma.post.create({data: {
        title: fromData.get('title') as string,
        content: fromData.get('content') as string,
        slug: (fromData.get('slug') as string).replace(/\s/g, '-').toLowerCase(),
        userId: session.user.id
    
    }})
    redirect('/posts');
}
