import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Construction, BookOpen, Search, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Construction className="h-6 w-6" />
          <span className="font-bold">ConstructTech Careers</span>
        </Link>
        
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/careers" className="hidden md:flex">
            <Button variant="ghost">Careers</Button>
          </Link>
          <Link href="/technologies" className="hidden md:flex">
            <Button variant="ghost">Technologies</Button>
          </Link>
          <Link href="/ai-automation" className="hidden md:flex">
            <Button variant="ghost">AI & Automation</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  )
} 