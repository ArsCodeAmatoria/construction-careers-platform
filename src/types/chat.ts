export interface ChatMessage {
  id: string
  role: "user" | "assistant" | "system" | "error"
  content: string
} 