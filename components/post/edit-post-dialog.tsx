'use client'

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/stocks/submit-button";
import { createPost, updatePost } from "@/actions/post.action";
import { toast } from 'sonner';

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
      toast.success("Post updated successfully");
    } catch (error) {
      console.error(":", error);
      toast.error("Failed to update post")
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{ "Edit Post" }</DialogTitle>
          <DialogDescription>
          Fill in the details for the post. Click save when done.
          </DialogDescription>
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
