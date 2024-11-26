import { Mail } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"



interface UserCardProps {
  id: string 
  name: string
  email: string 
  role: string 
  image: string 
}

export default function UserCard({
  name,
  email,
  role,
  image,
}: UserCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage alt={name} src={image} />
          <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail size={14} />
          <span>{email}</span>
        </div>
      </CardContent>
    </Card>
  )
}

