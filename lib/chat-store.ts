import { create } from "zustand"

export type Message = { role: "user" | "assistant"; content: string }

interface ChatState {
  messages: Message[]
  addMessage: (msg: Message) => void
  replaceLastMessage: (msg: Message) => void
  clearMessages: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],

  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
  replaceLastMessage: (msg) =>
    set((state) => {
      const updated = [...state.messages]
      if (updated.length) updated[updated.length - 1] = msg
      return { messages: updated }
    }),

  clearMessages: () => set({ messages: [] }),
}))
