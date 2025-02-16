import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Hammer, 
  Wrench, 
  Zap, 
  HardHat,
  Award,
  Book,
  Users,
  CheckCircle,
  Building,
  Droplets
} from "lucide-react"

const tradesPrograms = [
  {
    title: "Carpentry",
    description: "Master the fundamentals of construction carpentry",
    features: [
      "Residential and commercial construction",
      "Blueprint reading",
      "Safety certifications",
      "Tool mastery"
    ],
    icon: <Hammer className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Electrical",
    description: "Learn electrical systems installation and maintenance",
    features: [
      "Electrical code standards",
      "Wiring and circuits",
      "Safety protocols",
      "Troubleshooting"
    ],
    icon: <Zap className="h-12 w-12 text-yellow-500" />
  },
  {
    title: "Plumbing",
    description: "Develop expertise in plumbing systems",
    features: [
      "Pipe fitting",
      "System installation",
      "Code compliance",
      "Maintenance"
    ],
    icon: <Droplets className="h-12 w-12 text-blue-500" />
  }
]

const certifications = [
  "Red Seal Certification",
  "Safety Training",
  "First Aid Level 1",
  "Fall Protection",
  "WHMIS"
]

export default function TradesPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Traditional Trades Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Master the essential skills of construction with our comprehensive trades training programs
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {tradesPrograms.map((program) => (
            <div 
              key={program.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {program.icon}
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{feature}</span>
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
          Industry Certifications
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
          Start Your Career in Trades
        </h2>
        <p className="text-lg text-muted-foreground">
          Join our comprehensive trades training programs and build your future in construction
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <HardHat className="mr-2 h-5 w-5" />
              Apply Now
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