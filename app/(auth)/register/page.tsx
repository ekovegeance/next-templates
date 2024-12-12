import { RegisterForm } from "@/components/auth/register-form";
import { Command } from "lucide-react";



export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <RegisterForm />
      <div className="hidden lg:block">
        <div className="flex h-full flex-col justify-between bg-zinc-900 p-8">
          <div className="space-y-6">
            <Command className=" text-white" />
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Join thousands of users
            </h2>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              consectetur? Dicta repellendus et soluta sequi? Culpa et deleniti,
              commodi reprehenderit, consequatur necessitatibus nemo eius
              quibusdam quaerat doloribus maiores dicta dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
