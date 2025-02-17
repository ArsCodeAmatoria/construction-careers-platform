import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield, 
  HardHat, 
  Award, 
  Clock, 
  Target 
} from "lucide-react"

const safetyPrograms = [
  {
    title: "Construction Safety Officer",
    description: "Comprehensive safety management training",
    features: [
      "Safety program development",
      "Risk assessment",
      "Regulatory compliance",
      "Incident investigation"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />,
    href: "/programs/safety/cso"
  },
  {
    title: "NCSO Certification",
    description: "National Construction Safety Officer program",
    features: [
      "Advanced safety systems",
      "Leadership training",
      "Project management",
      "Safety auditing"
    ],
    icon: <HardHat className="h-12 w-12 text-blue-500" />,
    href: "/programs/safety/ncso"
  },
  {
    title: "Safety Coordinator",
    description: "Site-level safety coordination training",
    features: [
      "Site safety planning",
      "Team supervision",
      "Emergency response",
      "Safety documentation"
    ],
    icon: <Award className="h-12 w-12 text-green-500" />,
    href: "/programs/safety/coordinator"
  }
]

export default function SafetyProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">
          Construction Safety Programs
        </h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Advance your career with professional safety certifications
        </p>
      </section>

      {/* Programs Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {safetyPrograms.map((program) => (
            <Link 
              key={program.title}
              href={program.href}
              className="group"
            >
              <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
                <div className="flex flex-col items-center text-center space-y-4">
                  {program.icon}
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                  <ul className="w-full space-y-2 text-sm">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Start Your Safety Career</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Choose your path to becoming a certified safety professional
        </p>
        <Link href="/contact">
          <Button size="lg">
            <Clock className="mr-2 h-5 w-5" />
            View Schedule
          </Button>
        </Link>
      </section>
    </div>
  )
} 