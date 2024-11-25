import UserCard from "./user-card"

interface User {
  id: string
  name: string
  email: string
  role: string
  image: string
  
}

interface UserCardsListProps {
  users: User[]
}

export default function UserCardsList({ users }: UserCardsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

