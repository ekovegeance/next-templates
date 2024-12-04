import UserCardsList from "@/components/users/user-cards-list"
import { getUsers } from "@/actions/user.actions";

export default async function Users() {
    const users = await getUsers(); // Ensure getUsers returns users with 'id'
  return (
    <div>
      <UserCardsList users={users} />
    </div>
  )
}
