import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useChatStore } from "@/lib/chat-store"
import Themetoggle from "./theme-toggle"
import Logo from "./Logo"
import { LogoutButton } from "./logout"

export function Navbar() {
  const messages = useChatStore((state) => state.messages)

  const handleExport = () => {
    const content = messages
      .map((msg) => `${msg.role === "user" ? "You" : "Bot"}: ${msg.content}`)
      .join("\n\n")

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "chat-history.txt"
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <section className="flex justify-between items-center p-4 border-b border-border bg-background">
      <div className="flex items-center gap-2">
        <Logo width={44} height={44} />
        <h1 className="text-2xl font-bold font-mono">ChatterBot</h1>
      </div>
      
      <div className="flex gap-2 items-center">
         <Themetoggle />
        <Button    onClick={handleExport}>
          <Download className="w-5 h-5 mr-1 md:hidden" />
        <p className="hidden md:block md:text-sm ">Export Chat</p>
          
        </Button>
       
        <LogoutButton />
      </div>
    </section>
  )
}
