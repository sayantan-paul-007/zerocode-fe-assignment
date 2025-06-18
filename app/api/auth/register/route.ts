import { NextResponse } from "next/server"
import { addUser, getUserHash } from "@/lib/userStore"
import { hashPassword, signToken } from "@/lib/auth"

export async function POST(req: Request) {
  const { username, password } = await req.json()

  if (getUserHash(username))
    return NextResponse.json({ error: "User exists" }, { status: 400 })

  const hash = hashPassword(password)
  addUser(username, hash)

  const jwt = signToken({ username })
  const res = NextResponse.json({ ok: true })
  res.cookies.set("token", jwt, {
  httpOnly: true,
  path: "/",
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 7,
})
  return res
}
