"use client"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { useUser } from "@/context/userContext"
import Logo from "./Logo"

type ChatMessageProps = {
  role: "user" | "assistant"
  content: string
}

export function ChatMessage({ role, content}: ChatMessageProps) {
  const { username } = useUser()
  const initials = username.slice(0, 2).toUpperCase()
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
    <article className={cn(" flex items-start gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && <Logo width={28} height={28}></Logo>}
     
      <div
        className={cn(
          "max-w-[70%] rounded-lg px-4 py-2 text-sm whitespace-normal leading-relaxed",
          isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        )}
      >
        <ReactMarkdown>
          {displayedText}
          
        </ReactMarkdown>
       </div>
      {isUser && <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>}
    </article>
  )
}