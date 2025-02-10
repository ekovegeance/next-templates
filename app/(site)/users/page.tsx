import UserCardsList from "@/components/users/user-cards-list";
import { getUsers } from "@/actions/user.actions";
import { Suspense } from "react";

export default async function Users() {
  const users = await getUsers();
if (!users || users.length === 0) {
    return <div>No users found</div>;
  }
  return (
    <div>
      <Suspense fallback={<div> Loading...</div>}>
        <UserCardsList users={users} />
      </Suspense>
    </div>
  );
}
