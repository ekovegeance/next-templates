import { LoginForm } from "@/components/auth/login-form"
import { Suspense } from "react"


export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
      </Suspense>
    </div>
  )
}
