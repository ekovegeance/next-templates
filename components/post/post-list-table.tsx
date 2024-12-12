'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { deletePost } from "@/actions/post.actions";
import Link from "next/link";
import type { Post, User } from "@prisma/client";
import EditPostDialog from "./edit-post-dialog";

export default function PostListTable({
  posts,
}: {
  posts: (Post & { user: User })[];
}) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState< Post | undefined
  >();

  const handleEdit = (post: Post) => {
    setSelectedPost(post);
    setEditDialogOpen(true);
  };

  return (
    <div className="md:container mx-auto py-10">
      <div className="mx-4 border rounded-lg">
        <Table className="p-6">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.slug}</TableCell>
                <TableCell>{post.user.name}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleEdit(post)}>
                        <Button variant="ghost">
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/posts/${post.slug}`}>
                          <Button variant="ghost" className="w-full">
                            <Eye className="mr-2 h-4 w-4" />
                            Show
                          </Button>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <form action={deletePost}>
                          <input type="hidden" name="id" value={post.id} />
                          <Button type="submit" variant="ghost">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </form>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {editDialogOpen && (
        <EditPostDialog
          post={selectedPost}
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
        />
      )}
    </div>
  );
}
