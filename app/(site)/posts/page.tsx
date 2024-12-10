import PostsList from '@/components/post/post-list'
import { getPosts } from '@/actions/post.actions'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div>
      <PostsList posts={posts}/></div>
  )
}
