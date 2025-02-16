import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Truck,
  Clock, 
  Calendar,
  CheckCircle,
  Book,
  Users,
  HardHat,
  Shield,
  Building,
  Target,
  Award,
  Map
} from "lucide-react"

const courseContent = [
  {
    title: "Safety & Regulations",
    items: [
      "Transportation regulations",
      "Load securement standards",
      "Route planning",
      "Emergency procedures"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Equipment Operation",
    items: [
      "Heavy hauling techniques",
      "Vehicle inspections",
      "Load distribution",
      "Equipment maintenance"
    ],
    icon: <Truck className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Transport Planning",
    items: [
      "Route assessment",
      "Permit requirements",
      "Load planning",
      "Schedule coordination"
    ],
    icon: <Map className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "4 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Heavy Equipment Transport Certificate",
  prerequisites: [
    "Valid Class 1 license",
    "Air brake endorsement",
    "Clean driving record",
    "Physical fitness requirement"
  ]
}

const certifications = [
  "Heavy Equipment Transport Certificate",
  "Load Securement Certificate",
  "WHMIS",
  "First Aid Level 1",
  "Transportation of Dangerous Goods"
]

export default function HaulingPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Heavy Equipment Transport Training
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Master the skills of heavy equipment transportation and hauling
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{details.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            <span>{details.location}</span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Course Content
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {courseContent.map((module) => (
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
          Prerequisites
        </h2>
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
          {details.prerequisites.map((prereq) => (
            <div 
              key={prereq}
              className="flex items-center space-x-3 p-4 border border-border rounded-lg"
            >
              <Target className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <span className="text-sm">{prereq}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Certifications Included
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
          Start Your Training
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your career in heavy equipment transportation
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              View Schedule
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