'use client';

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import {createPost} from "@/services/post.services";
import SubmitButton from '../stocks/submit-button';

export default function PostForm() {
  

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create a New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={createPost} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your blog post title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input id="slug" name="slug" placeholder="Enter tags and press Enter" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your blog post content here"
              required
              className="min-h-[200px]"
            />
          </div>
          <div className="pt-4 flex justify-between">
            <SubmitButton submitting={"Submit Post..."} submit={"Submit Post"}/>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
