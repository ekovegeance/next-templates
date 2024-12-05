import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileUser,
  Heart,
  MessageCircle,
} from "lucide-react";
import { User, Post } from "@prisma/client";
import Link from "next/link";

type UserWithPosts = User & { posts: Post[] };

export default function ProfilePage({ user }: { user: UserWithPosts }) {
  return (
    <div className="min-h-screen rounded-lg">
      <div className="relative h-64 bg-gray-300">
        <Image
          src="/images/placeholder.svg"
          alt="Cover photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24 sm:-mt-32 sm:flex sm:items-end sm:space-x-5">
          <div className="relative">
            <Avatar className="h-32 w-32 sm:h-40 sm:w-40 rounded-full ring-4 ring-white">
              <AvatarImage src={user.image ?? ""} alt={user?.name ?? ""} />
              <AvatarFallback>
                {user.name?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {user?.name}
              </h1>
              <p className="text-sm text-gray-500">{user?.id}</p>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button>
                <FileUser className="mr-2 h-4 w-4" />
                CV
              </Button>
              <Button variant="outline">Message</Button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">
            John Doe
          </h1>
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{user?.email}</p>
                <p className="text-sm text-gray-500">{user?.role}</p>
                <div className="mt-4 flex space-x-4 text-sm text-gray-500">
                  <div>
                    <strong className="text-gray-900">0</strong> Followers
                  </div>
                  <div>
                    <strong className="text-gray-900">0</strong> Following
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                {/* <Input placeholder="What's on your mind?" />
                <div className="mt-4 flex justify-end">
                  <Button>Post</Button>
                </div> */}
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="posts">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="posts">Posts</TabsTrigger>
                    <TabsTrigger value="media">Projects</TabsTrigger>
                  </TabsList>
                  <TabsContent value="posts" className="space-y-4">
                    {user.posts.map((post) => (
                      <Card key={post.id} className="hover:bg-zinc-50">
                        <Link key={post.id} href={`/posts/${post.slug}`}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarImage
                                  src={user.image ?? ""}
                                  alt={user?.name ?? ""}
                                />
                                <AvatarFallback>
                                  {user.name?.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  {user?.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {new Date(post.createdAt).toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm truncate">{post.content}</p>
                          <div className="mt-4 flex space-x-4">
                            <Button variant="ghost" size="sm">
                              <Heart className="mr-2 h-4 w-4" />
                              Like
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Comment
                            </Button>
                          </div>
                        </CardContent>
                        </Link>
                      </Card>
                    ))}
                  </TabsContent>
                  <TabsContent value="media">
                    <div className="grid grid-cols-3 gap-4">
                      <p>Soon</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
