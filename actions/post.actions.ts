/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';



// Get all posts
export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({ include: { user: true }, orderBy: { createdAt: 'desc' } });
    return posts;

  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};


// Get user posts
export const getUserPosts = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  try {
    const posts = await prisma.post.findMany({
      where: { userId: session.user.id },
      include: { user: true },
      orderBy: { createdAt: 'desc' }
    });

    return posts;

  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};


// Get post by slug
export async function getPostBySlug(slug: string) {

  try {
    return await prisma.post.findUnique({
      where: { slug }, include: { user: true }
    });

  } catch (error) {
    throw new Error('Failed to fetch post');
  }
}

// Create post
export async function createPost(fromData: FormData) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  await prisma.post.create({
    data: {
      title: fromData.get('title') as string,
      content: fromData.get('content') as string,
      slug: (fromData.get('slug') as string).replace(/\s/g, '-').toLowerCase(),
      userId: session.user.id

    }
  })
  redirect('/dashboard/posts/');

}


// Update post
export async function updatePost(id: string, fromData: FormData) {

  try {
    await prisma.post.update({
      where: { id },
      data: {
        title: fromData.get('title') as string,
        content: fromData.get('content') as string,
        slug: (fromData.get('slug') as string).replace(/\s/g, '-').toLowerCase(),
      }
    })
  } catch (error) {
    throw new Error('Failed to update post');
  }
  revalidatePath('dashboard/posts');
  redirect('/dashboard/posts/');
}


// Delete post
export async function deletePost(formData: FormData) {
  const id = formData.get("id");

  if (!id) {
    throw new Error("Post ID is required");
  }

  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  const postId = id as string;
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  if (post.userId !== session.user.id) {
    throw new Error("You are not authorized to delete this post");
  }
  await prisma.post.delete({
    where: { id: id as string },
  });
  revalidatePath('dashboard/posts');
  redirect('/dashboard/posts/');
}

