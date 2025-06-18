import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  if (token) {
    try {
      verifyToken(token)
      return redirect("/chat")
    } catch {}
  }

  return redirect("/login")
}
