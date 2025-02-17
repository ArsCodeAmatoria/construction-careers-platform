"use client"

import { useState } from "react"
import type { ChatMessage } from "@/types/chat"

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [model, setModel] = useState<"openai" | "llama">("openai")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setError(null) // Clear any existing errors
    
    // Add user message
    const userMessage: ChatMessage = {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage], model })
      })

      if (!response.ok) {
        const error = await response.json()
        if (response.status === 429) {
          setError("AI service is currently unavailable due to high demand or usage limits. Please try again later.")
        } else {
          setError(error.details || "Failed to get a response. Please try again.")
        }
        return
      }

      const data = await response.json()
      const assistantMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.message
      }
      setMessages(prev => [...prev, assistantMessage])

    } catch (err) {
      console.error("Chat error:", err)
      setError("Something went wrong. Please try again later.")
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
    isLoading,
    error,
    model,
    setModel,
    handleSubmit,
    handleInputChange,
  }
} 