"use client"

import { useState, useRef, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Loader2 } from "lucide-react"

// Local fallback type declarations

type Props = {
  onSend: (message: string) => void
  isLoading: boolean
}

export function ChatInput({ onSend, isLoading }: Props) {
  const [text, setText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const recognitionRef = useRef<any>(null)

 useEffect(() => {
  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

  if (!SpeechRecognition) {
    console.warn("SpeechRecognition not supported")
    return
  }

  const recognition = new SpeechRecognition() as any
  recognition.lang = "en-US"
  recognition.interimResults = true
  recognition.continuous = false

  recognition.onresult = (e: any) => {
    const res = e.results[e.resultIndex]
    const transcript = res[0].transcript

    if (res.isFinal) {
      onSend(transcript.trim())
      setText("")
    } else {
      setText(transcript)
    }
  }

  recognition.onstart = () => setIsRecording(true)
  recognition.onend = () => setIsRecording(false)

  recognitionRef.current = recognition
}, [onSend])


  const toggleRecording = () => {
    const rec = recognitionRef.current
    if (!rec) return
    if (isRecording) rec.stop()
    else rec.start()
  }

  const handleSubmit = () => {
    if (!text.trim()) return
    onSend(text.trim())
    setText("")
  }

  return (
    <div className="flex items-end gap-2 p-4 border-t bg-background">
      <Textarea
        placeholder="Type or use the mic…"
        value={text}
        rows={2}
        disabled={isLoading || isRecording}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
          }
        }}
        className="resize-none"
      />

      <Button
        type="button"
        size="icon"
        onClick={toggleRecording}
        disabled={isLoading}
        className={isRecording ? "bg-destructive text-destructive-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary-hover"}
      >
        {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      </Button>

      <Button onClick={handleSubmit} disabled={isLoading || isRecording}>
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
           
          </>
        ) : (
          "Send"
        )}
      </Button>
    </div>
  )
}
