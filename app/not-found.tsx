import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Ghost } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <Ghost className="w-24 h-24 mb-8 text-muted-foreground animate-bounce" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Oops! It seems like you ventured into uncharted territory. The page your looking for doesnt exist.
      </p>
      <Button asChild>
        <Link href="/">
          Return to Home
        </Link>
      </Button>
    </div>
  )
}
