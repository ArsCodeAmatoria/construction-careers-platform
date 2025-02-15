import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Users,
  Shield,
  Heart,
  Container,
  Car
} from "lucide-react"

const programsMenu = [
  {
    title: "Career Programs",
    description: "Specialized construction programs",
    href: "/programs",
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    title: "Training Certifications",
    description: "Industry-certified training courses",
    href: "/career-programs",
    icon: <BookOpen className="h-5 w-5" />
  }
]

const certifications = [
  {
    title: "Women in Construction",
    description: "Programs supporting women in trades",
    href: "/programs/women-in-construction",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Indigenous Programs",
    description: "First Nations construction initiatives",
    href: "/programs/indigenous",
    icon: <Building2 className="h-5 w-5" />
  },
  {
    title: "Training Certifications",
    description: "First Aid, Crane, and TCP courses",
    href: "/career-programs",
    icon: <Shield className="h-5 w-5" />
  }
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="space-y-4">
                <h4 className="text-sm font-medium leading-none">Program Types</h4>
                {programsMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <div className="text-sm font-medium leading-none">{item.title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium leading-none">Certifications</h4>
                <div className="grid gap-2">
                  {certifications.map((cert) => (
                    <Link
                      key={cert.href}
                      href={cert.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2">
                        {cert.icon}
                        <div className="text-sm font-medium leading-none">{cert.title}</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {cert.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* Other navigation items */}
        <NavigationMenuItem>
          <Link href="/careers" legacyBehavior passHref>
            <NavigationMenuLink>Careers</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink>Contact</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
} 