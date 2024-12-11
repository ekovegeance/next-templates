import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import PostListTable from "@/components/post/post-list-table";
import { AddPostDialog } from "@/components/post/add-post-dialog";
import { getUserPosts } from "@/actions/post.actions";


export default async function DashboardPostsPage() {
  const posts = await getUserPosts();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex justify-between mx-4">
          <h1 className="text-xl font-semibold">Posts</h1>
          <AddPostDialog />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <PostListTable posts={posts} />
        </Suspense>
      </SidebarInset>
    </SidebarProvider>
  );
}
