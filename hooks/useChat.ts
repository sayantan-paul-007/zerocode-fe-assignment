import { useState } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (text: string) => {
    const userMessage: Message = { role: "user", content: text }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()

      const botMessage: Message = { role: "assistant", content: data.reply }
      setMessages((prev) => [...prev, botMessage])
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, sendMessage, isLoading }
}