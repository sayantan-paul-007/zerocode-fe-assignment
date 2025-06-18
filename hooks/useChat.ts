"use client"

import { useState } from "react"
import { useChatStore, Message } from "@/lib/chat-store"

export function useChat() {
  const { messages, addMessage, replaceLastMessage } = useChatStore()
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (text: string) => {
    const userMsg: Message = { role: "user", content: text }
    const thinkingMsg: Message = { role: "assistant", content: "Thinking…" }

    addMessage(userMsg)
    addMessage(thinkingMsg)
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()

      const botMsg: Message = { role: "assistant", content: data.reply }
      replaceLastMessage(botMsg)
    } catch (e) {
      replaceLastMessage({
        role: "assistant",
        content: "⚠️ Sorry, something went wrong.",
      })
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, sendMessage, isLoading }
}
