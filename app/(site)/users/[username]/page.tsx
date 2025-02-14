import { getUserByUsername } from '@/actions/user.action';
import ProfilePage from '@/components/users/profile'
import React from 'react'

export default async function UserPage({params}: {params: {username: string}}) {


  const user = await getUserByUsername(params.username)
  return (
    <div>
    {user && <ProfilePage user={user} />}
    </div>
  )
}
