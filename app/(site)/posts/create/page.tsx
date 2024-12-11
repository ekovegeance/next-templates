import PostForm from "@/components/post/post-form";
import React from "react";
import { auth } from "@/auth";

export default async function PostCreate() {
  const session = await auth();

  if (!session) {
    return (
      <div>
        <h1 className=" text-red-600 font-semibold">Access Denied</h1>
        <p>You must be logged in to create a post.</p>
      </div>
    );
  }

  return (
    <div>
      <PostForm />
    </div>
  );
}
