import fs from "fs"
import path from "path"

const usersFile = path.resolve("users.json")

function loadUsers() {
  if (!fs.existsSync(usersFile)) return {}
  return JSON.parse(fs.readFileSync(usersFile, "utf-8"))
}

function saveUsers(users: Record<string, string>) {
  fs.writeFileSync(usersFile, JSON.stringify(users), "utf-8")
}

export const getUserHash = (username: string) => {
  const users = loadUsers()
  return users[username]
}

export const addUser = (username: string, hash: string) => {
  const users = loadUsers()
  users[username] = hash
  saveUsers(users)
}
