import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Users, 
  Target, 
  Award,
  CheckCircle,
  Book,
  Brain,
  Briefcase,
  Building,
  LineChart,
  Presentation,
  LucideIcon
} from "lucide-react"

const programContent = [
  {
    title: "Construction Management",
    items: [
      "Project planning and scheduling",
      "Resource allocation",
      "Budget management",
      "Quality control systems"
    ],
    icon: <Building className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Team Leadership",
    items: [
      "Crew supervision",
      "Communication strategies",
      "Conflict resolution",
      "Performance management"
    ],
    icon: <Users className="h-12 w-12 text-green-500" />
  },
  {
    title: "Business Development",
    items: [
      "Strategic planning",
      "Industry networking",
      "Client relations",
      "Contract management"
    ],
    icon: <LineChart className="h-12 w-12 text-orange-500" />
  }
]

const certifications = [
  "Gold Seal Certification",
  "Project Management Professional (PMP)",
  "Leadership in Construction Certificate",
  "Construction Supervisor Training"
]

export default function LeadershipPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Leadership Development Program
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Develop the skills needed to lead successful construction projects and teams
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

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Professional Certifications
        </h2>
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert}
              className="flex items-center space-x-3 p-4 border border-border rounded-lg"
            >
              <Award className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <span className="text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Advance Your Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Take the next step in your construction career with our leadership program
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Presentation className="mr-2 h-5 w-5" />
              Program Details
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 