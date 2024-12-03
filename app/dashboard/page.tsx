import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { auth } from "@/auth";
import { StatsCard } from '../../components/dashboard/stats-card';
import { getUsers } from "@/services/user.services";
import { getPosts } from "@/services/post.services";
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { RecentUsers } from "@/components/dashboard/recent-users";
import { Suspense } from "react";

export default async function Page() {
  const session = await auth();
  const users = await getUsers();
  const posts = await getPosts();

  console.log("Log from server",session);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div> */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Suspense fallback={<div>Loading....</div>}>
              <StatsCard
                title="Requests Features"
                value="?"
                description="requests for new features"
              />
              <StatsCard
                title="Total Posts"
                value={posts.length.toString()}
                description="+180.1% from last month"
              />
              <StatsCard
                title="Total Users"
                value={users.length.toString()}
                description="+5% from last month"
              />
              </Suspense>
            </div>
            <div className="mt-8 grid auto-rows-min gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <RecentUsers />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your overview content here</p>
                </CardContent>
              </Card>
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
