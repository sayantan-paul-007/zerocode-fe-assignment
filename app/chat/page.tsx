"use client"

import { useChat } from "@/hooks/useChat"
import { ChatStream } from "@/components/ChatStream"
import { ChatInput } from "@/components/ChatInput"
import { Navbar } from "@/components/Navbar"

export default function ChatPage() {
  const { messages, sendMessage, isLoading } = useChat()

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <ChatStream messages={messages} />
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
      <p className="underline text-primary mb-4 text-[9px] md:text-xs text-center">The Free Tier of Google Gemini uses data updated until April 2023 and may contain some inaccuracies.</p>
    </div>
  )
}