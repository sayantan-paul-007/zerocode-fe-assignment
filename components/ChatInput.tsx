"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type Props = {
  onSend: (message: string) => void
  isLoading: boolean
}

export function ChatInput({ onSend, isLoading }: Props) {
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    if (!message.trim()) return
    onSend(message)
    setMessage("")
  }

  return (
    <div className="flex items-end gap-2 p-4 border-t bg-background">
      <Textarea
        placeholder="Ask me anything..."
        value={message}
        rows={2}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
          }
        }}
        disabled={isLoading}
      />
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Thinking..." : "Send"}
      </Button>
    </div>
  )
}