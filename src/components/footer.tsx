import Link from "next/link"
import { Github, Linkedin, Twitter, PawPrint, Flame } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Programs Column */}
          <div>
            <h3 className="text-base font-semibold">Programs</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/programs/carpentry" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Carpentry</Link></li>
              <li><Link href="/programs/electrical" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Electrical</Link></li>
              <li><Link href="/programs/plumbing" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Plumbing</Link></li>
              <li><Link href="/programs/welding" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Welding</Link></li>
              <li><Link href="/programs/hvac" className="text-muted-foreground hover:text-foreground transition-colors duration-200">HVAC</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors duration-200">View All Programs</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-base font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/admissions" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Admissions</Link></li>
              <li><Link href="/financial-aid" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Financial Aid</Link></li>
              <li><Link href="/career-services" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Career Services</Link></li>
              <li><Link href="/student-resources" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Student Resources</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Careers</Link></li>
              <li><Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Industry Partners</Link></li>
              <li><Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors duration-200">News & Events</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-base font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="https://github.com/constructtech" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/company/constructtech" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/constructtech" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <Link 
                  href="https://embersstaffing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                >
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span>© {new Date().getFullYear()} Embers Staffing</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <span>Built by</span>
                <Link 
                  href="https://bigfootcrane.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                >
                  <PawPrint className="h-4 w-4 text-green-500" />
                  <span>Bigfoot Crane Academy</span>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Privacy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Terms</Link>
              <Link href="/accessibility" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 