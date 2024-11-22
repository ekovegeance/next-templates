import React from 'react'
import { auth } from '@/auth';

export default async function ProductPage() {
    const session = await auth();
  return (
    <div>ProductPage
        <p>{JSON.stringify(session)}</p>
    </div>
  )
}
