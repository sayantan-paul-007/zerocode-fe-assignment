"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type UserCtx = {
  username: string
  setUsername: (u: string) => void
}

const UserContext = createContext<UserCtx | null>(null)

export const useUser = () => {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error("useUser must be used within <UserProvider />")
  return ctx
}

export function UserProvider({ children, initialUsername }: { children: ReactNode; initialUsername: string }) {
  const [username, setUsername] = useState(initialUsername)
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  )
}
