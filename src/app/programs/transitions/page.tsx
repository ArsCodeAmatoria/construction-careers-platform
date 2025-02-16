import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRightCircle, 
  Clock, 
  Calendar,
  CheckCircle,
  Book,
  Users,
  HardHat,
  Briefcase,
  Shield,
  Building,
  GraduationCap,
  LineChart
} from "lucide-react"

const programContent = [
  {
    title: "Career Assessment",
    items: [
      "Skills evaluation",
      "Experience mapping",
      "Industry compatibility",
      "Career path planning"
    ],
    icon: <LineChart className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Industry Training",
    items: [
      "Construction basics",
      "Safety certifications",
      "Technical skills",
      "Workplace protocols"
    ],
    icon: <GraduationCap className="h-12 w-12 text-green-500" />
  },
  {
    title: "Job Placement",
    items: [
      "Resume building",
      "Interview preparation",
      "Industry networking",
      "Employment support"
    ],
    icon: <Briefcase className="h-12 w-12 text-orange-500" />
  }
]

const details = {
  duration: "4-12 weeks",
  schedule: "Flexible scheduling",
  certification: "Industry-recognized certifications",
  support: "One-on-one career counseling",
  eligibility: [
    "Open to career changers",
    "No prior construction experience required",
    "Must be legally eligible to work in Canada",
    "English language proficiency"
  ]
}

export default function CareerTransitionsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Career Transitions Program
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Your pathway to a rewarding career in construction
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Program Components
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {programContent.map((module) => (
            <div 
              key={module.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {module.icon}
                <h3 className="text-xl font-semibold">{module.title}</h3>
                <ul className="w-full space-y-2 text-sm">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Construction Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Take the first step towards your new career path
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-5 w-5" />
              Program Guide
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 