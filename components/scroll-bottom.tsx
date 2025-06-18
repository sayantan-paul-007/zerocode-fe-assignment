import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
type Props = {
  scrollRef: React.RefObject<HTMLDivElement | null>
}

export function ScrollToBottomButton({ scrollRef }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 200
      setShow(!nearBottom)
    }

    el.addEventListener("scroll", onScroll)
    return () => el.removeEventListener("scroll", onScroll)
  }, [scrollRef])

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }

  if (!show) return null

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-24 right-6 z-50 p-2 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition"
    >
      <ChevronDown className="w-5 h-5" />
    </button>
  )
}
