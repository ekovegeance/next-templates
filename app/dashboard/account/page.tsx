import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Account from "@/components/dashboard/account";
import { Alert, AlertDescription, } from "@/components/ui/alert";

export default async function DashboardAccountPage() {
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
        <div className="p-4">
          <Alert variant="destructive" className="min-w-fit">
            <AlertDescription>Under Contructions</AlertDescription>
          </Alert>
          <Account />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}