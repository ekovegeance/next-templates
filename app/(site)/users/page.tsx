import UserCardsList from "@/components/users/user-cards-list";
import { getUsers } from "@/actions/user.actions";
import { Suspense } from "react";

export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      <Suspense fallback={<div> Loading...</div>}>
        <UserCardsList users={users} />
      </Suspense>
    </div>
  );
}
