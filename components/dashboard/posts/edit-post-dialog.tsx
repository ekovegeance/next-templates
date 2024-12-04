"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "../../stocks/submit-button";
import { createPost, updatePost } from "@/actions/post.actions";
import { useToast } from "@/hooks/use-toast";

export default function EditPostDialog({
  post,
  open,
  onOpenChange,
}: {
  post?: { id: string; title: string; slug: string; content: string };
  open: boolean;
  onOpenChange: (state: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
  });

  const { toast } = useToast();

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || "",
        slug: post.slug || "",
        content: post.content || "",
      });
    }
  }, [post]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    try {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
  
      if (post?.id) {
        await updatePost(post.id, form);
      } else {
        await createPost(form);
      }
  
      onOpenChange(false);
      toast({ title: "Post updated successfully", description: "success" });
      
    } catch (error) {
      console.error("Failed to create post:", error);
      toast({ title: "Error", description: "You are not authorized to delete this post", variant: "destructive"});
      
    }
   
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{post ? "Edit Post" : "Add New Post"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              className="min-h-[200px]"
              id="content"
              name="content"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <SubmitButton submitting="Saving..." submit="Save" />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
