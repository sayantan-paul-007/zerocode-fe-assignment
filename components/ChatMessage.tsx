"use client"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

type ChatMessageProps = {
  role: "user" | "assistant"
  content: string
}

export function ChatMessage({ role, content}: ChatMessageProps) {
  const isUser = role === "user"
  const [displayedText, setDisplayedText] = useState(isUser ? content : "")
  
  useEffect(() => {
    if (!isUser) {
       let i = 0
      const type = () => {
        setDisplayedText(content.slice(0, i + 1))
        i++
        if (i < content.length) {
          setTimeout(type, 10)
        }
      }
      type()
    }
  }, [content, isUser])

  return (
    <div className={cn(" flex items-start gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && <Avatar className="bg-muted">🤖</Avatar>}
     
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-normal leading-relaxed",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        )}
      >
        <ReactMarkdown>
          {displayedText}
          
        </ReactMarkdown>
       </div>
      {isUser && <Avatar className="bg-primary text-primary-foreground">🧑</Avatar>}
    </div>
  )
}