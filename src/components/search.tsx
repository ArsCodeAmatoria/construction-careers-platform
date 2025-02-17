"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search as SearchIcon, Loader2 } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

export function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Handle clicks outside of search component
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    // Handle escape key
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query) {
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    setIsOpen(true)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data.results)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Close dropdown when query is empty
  useEffect(() => {
    if (!query) {
      setIsOpen(false)
    }
  }, [query])

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search programs..."
          className="w-[300px] pl-10"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Button 
          type="submit"
          variant="ghost" 
          size="icon"
          className="absolute right-0 top-0"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        </Button>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg overflow-hidden z-50">
          <div className="max-h-[300px] overflow-y-auto p-2 space-y-2">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.href}
                className="block p-2 hover:bg-muted rounded-md"
                onClick={() => {
                  setIsOpen(false)
                  setQuery("")
                }}
              >
                <div className="text-sm font-medium">{result.title}</div>
                <div className="text-xs text-muted-foreground">{result.description}</div>
                <div className="text-xs text-muted-foreground mt-1">{result.category}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 