import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const JWT_SECRET = process.env.JWT_SECRET!

type JwtPayload = { username: string }

export const signToken = (payload: JwtPayload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" })

export const verifyToken = (token: string) =>
  jwt.verify(token, JWT_SECRET) as JwtPayload

export const hashPassword = (pw: string) => bcrypt.hashSync(pw, 10)
export const comparePassword = (pw: string, hash: string) => bcrypt.compareSync(pw, hash)
