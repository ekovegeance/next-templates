import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPostBySlug } from "@/services/post.services";
import { CalendarIcon } from "lucide-react";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  return (
    <article>
      <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center text-muted-foreground">
          <CalendarIcon className="mr-1 h-4 w-4" />
          <span>{post?.createdAt.toLocaleDateString("id-ID")}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Avatar className="h-6 w-6 me-2">
            <AvatarImage src={post?.user.image || '' } alt={post?.user.name || ''} />
            <AvatarFallback>{post?.user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span>{post?.user.name}</span>
        </div>
      </div>
      <div className="prose prose-lg max-w-none mb-12">{post?.content} </div>
    </article>
  );
}
