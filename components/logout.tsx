"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    })

    if (res.ok) {
      toast.success("Logged out successfully")
     router.replace("/login")   
    router.refresh()            
    } else {
      toast.error("Failed to logout")
    }
  }

  return (
    <Button onClick={handleLogout} variant="destructive">
     <LogOut className="w-5 h-5 mr-1 md:hidden" />
        <p className="hidden md:block md:text-sm">Logout</p>
    </Button>
  )
}
