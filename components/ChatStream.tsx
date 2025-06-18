"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatMessage } from "@/components/ChatMessage"
import { useRef, useEffect } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function ChatStream({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <ScrollArea className="h-screen p-4">
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )
}