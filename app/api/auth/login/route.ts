// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getUserHash } from "@/lib/userStore"
import { comparePassword, signToken } from "@/lib/auth"

// 1. Force Node runtime so cookies always work
export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()
const hash = getUserHash(username)
  if (!hash || !(await comparePassword(password, hash))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }
  const token = signToken({ username })
  const res = NextResponse.json({ message: "Login successful" })
  res.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return res
}
