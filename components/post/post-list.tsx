"use server";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { getPosts } from "@/services/post.services";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function PostsList() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Post ({posts.length})</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-nowrap truncate">{post.content.slice(0, 30)}</p>
            </CardContent>
            <CardFooter className="flex-grow flex flex-col justify-end">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span>{post.createdAt.toLocaleDateString("id-ID")}</span>
                </div>
                <div className="flex items-center">
                  <Avatar className="w-6 h-6 me-2">
                    <AvatarImage src={post.user.image || ''} />
                    <AvatarFallback>{post.user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span>{post.user.name}</span>
                </div>
              </div>
              <Link href={`/posts/${post.slug}`}>
                <Button variant="secondary" className="w-full">
                  Read more <ArrowRightIcon />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
