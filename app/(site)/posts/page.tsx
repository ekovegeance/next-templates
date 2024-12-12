import PostsList from '@/components/post/post-list'
import { getPosts } from '@/actions/post.actions'
import { Suspense } from 'react'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <PostsList posts={posts}/>
      </Suspense>
      </div>
      
  )
}
