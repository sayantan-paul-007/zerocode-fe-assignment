import { NextResponse } from "next/server"

export async function POST() {
  const res = NextResponse.json({ message: "Logout successful" })
  res.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0), // delete cookie
  })
  return res
}
