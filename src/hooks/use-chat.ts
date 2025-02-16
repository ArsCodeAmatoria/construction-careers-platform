"use client"

import { useState } from "react"

interface Message {
  id: string
  role: "user" | "assistant" | "error"
  content: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.filter(m => m.role !== "error").concat(userMessage)
        }),
      })

      if (!response.ok) {
        throw new Error(
          `Failed to fetch response: ${response.status} ${response.statusText}`
        )
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      // Add assistant message
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.content
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      // Add error message to chat
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "error",
        content: "Sorry, I'm having trouble responding right now. Please try again."
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return {
    messages,
    input,
    handleSubmit,
    handleInputChange,
    isLoading
  }
} 