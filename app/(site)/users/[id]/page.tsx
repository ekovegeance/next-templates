import { getUserById } from '@/actions/user.actions';
import ProfilePage from '@/components/users/profile'
import React from 'react'

export default async function UserPage({params}: {params: {id: string}}) {

    const user = await getUserById(params.id);
  return (
    <div>
    {user && <ProfilePage user={user} />}
    </div>
  )
}
