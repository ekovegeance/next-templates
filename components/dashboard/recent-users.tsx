import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUsers } from "@/services/user.services"

export async function RecentUsers() {
    const users =  await getUsers();
    return (
      <div className="space-y-8">
        {users.map((user, i) => (
          <div key={i} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.image || ''} alt={user.name || ''} />
              <AvatarFallback>{user.name?.slice(0, 2).toLocaleUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-sm text-muted-foreground">
                {user.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
}

