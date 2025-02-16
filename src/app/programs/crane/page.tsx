import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Construction, 
  Truck, 
  Container,
  Link2,
  HardHat,
  Award,
  Book,
  Users,
  CheckCircle,
  Building
} from "lucide-react"

const cranePrograms = [
  {
    title: "Tower Crane",
    description: "Comprehensive training for tower crane operations",
    features: [
      "Load charts and calculations",
      "Safety protocols",
      "Equipment inspection",
      "High-rise operations"
    ],
    icon: <Construction className="h-12 w-12 text-blue-500" />,
    href: "/programs/crane/tower-crane"
  },
  {
    title: "Mobile Crane",
    description: "Expert training in mobile crane operations",
    features: [
      "Site setup and planning",
      "Load management",
      "Safety procedures",
      "Equipment maintenance"
    ],
    icon: <Truck className="h-12 w-12 text-orange-500" />,
    href: "/programs/crane/mobile-crane"
  },
  {
    title: "Rigging",
    description: "Essential rigging and hoisting skills",
    features: [
      "Rigging techniques",
      "Load securement",
      "Signal operations",
      "Safety standards"
    ],
    icon: <Link2 className="h-12 w-12 text-green-500" />,
    href: "/programs/crane/rigging-1"
  }
]

const certifications = [
  "WorkSafeBC Certification",
  "IUOE Certification",
  "Red Seal Endorsement",
  "First Aid Level 1",
  "Fall Protection"
]

export default function CraneProgramsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Crane Operation Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Industry-leading crane operator training and certification programs
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {cranePrograms.map((program) => (
            <Link 
              key={program.title}
              href={program.href}
              className="block group"
            >
              <div className="border border-border group-hover:border-foreground/50 rounded-lg p-6 transition-colors h-full">
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
            </Link>
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
          Start Your Crane Operation Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join our comprehensive crane operator training programs
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