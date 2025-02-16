"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, User, Loader2, Send, AlertCircle } from "lucide-react"
import { useChat } from "@/hooks/use-chat"

interface ChatModalProps {
  open: boolean
  onClose: () => void
}

export function ChatModal({ open, onClose }: ChatModalProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[440px] h-[600px] flex flex-col gap-4 p-0 overflow-hidden bg-zinc-950 text-zinc-50">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
              <Bot className="h-5 w-5 text-zinc-400" />
            </div>
            <DialogTitle className="text-lg font-semibold text-zinc-50">
              Construction Career AI
            </DialogTitle>
          </div>
          <p className="text-sm text-zinc-400 mt-1">
            Ask me about our trade programs and career paths
          </p>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 px-6">
          <div className="space-y-4 pb-4">
            {messages.length === 0 && (
              <div className="text-center text-zinc-500 text-sm py-6">
                No messages yet. Start by asking a question!
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === "assistant" 
                    ? "bg-zinc-900 p-4 rounded-lg border border-zinc-800" 
                    : message.role === "error"
                    ? "bg-red-900/20 p-4 rounded-lg border border-red-900"
                    : ""
                }`}
              >
                <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "assistant" 
                    ? "bg-zinc-800" 
                    : message.role === "error"
                    ? "bg-red-900"
                    : "bg-zinc-800"
                }`}>
                  {message.role === "assistant" ? (
                    <Bot className="h-5 w-5 text-zinc-400" />
                  ) : message.role === "error" ? (
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  ) : (
                    <User className="h-5 w-5 text-zinc-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm leading-relaxed ${
                    message.role === "error" ? "text-red-400" : "text-zinc-300"
                  }`}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-zinc-400" />
                </div>
                <Loader2 className="h-4 w-4 animate-spin mt-2 text-zinc-400" />
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Form */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about our trade programs..."
              className="flex-1 bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={isLoading}
              className="bg-zinc-800 hover:bg-zinc-700"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
} 