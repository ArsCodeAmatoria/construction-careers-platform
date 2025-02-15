import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  Construction as CraneIcon, 
  Search, 
  Menu, 
  Cpu, 
  Truck,
  Building2
} from 'lucide-react'

const navLinks = [
  {
    href: '/careers',
    label: 'Careers',
    subLinks: [
      { href: '/careers?category=trades', label: 'Trades' },
      { href: '/careers?category=crane-operations', label: 'Crane Operations' },
      { href: '/careers?category=heavy-equipment', label: 'Heavy Equipment' },
      { href: '/careers?category=technology', label: 'Tech Careers' },
      { href: '/careers?category=sustainability', label: 'Green Building' },
      { href: '/careers?category=management', label: 'Construction Management' }
    ]
  },
  { href: '/technologies', label: 'Technologies' },
  { href: '/ai-automation', label: 'Digital Construction' },
  { 
    href: '/programs',
    label: 'Programs',
    subLinks: [
      { href: '/programs/women-in-construction', label: 'Women in Construction' },
      { href: '/programs/indigenous', label: 'Indigenous Programs' },
      { href: '/programs/youth', label: 'Youth Programs' },
      { href: '/programs/newcomers', label: 'Newcomers to Canada' },
      { href: '/programs/veterans', label: 'Veterans Programs' },
      { href: '/programs/accessibility', label: 'Accessible Construction' },
      { href: '/programs/union-training', label: 'Union Training' },
      { href: '/programs/leadership', label: 'Leadership Development' }
    ]
  },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold">ConstructTech BC</span>
        </Link>
        
        <nav className="flex flex-1 items-center justify-end space-x-4">
          {/* Desktop Navigation */}
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hidden md:flex"
            >
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link href={link.href} className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        {link.label}
                      </Button>
                    </Link>
                    {link.subLinks && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link 
                            key={subLink.href} 
                            href={subLink.href}
                            className="block"
                          >
                            <Button 
                              variant="ghost" 
                              className="w-full justify-start text-sm"
                            >
                              {subLink.label}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Search Button */}
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  )
} 