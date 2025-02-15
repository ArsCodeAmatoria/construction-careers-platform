import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Leaf, 
  Clock, 
  Calendar,
  CheckCircle,
  Book,
  Users,
  HardHat,
  Cog,
  Shield,
  Building,
  Wrench,
  Calculator,
  Sun,
  Wind,
  Droplets
} from "lucide-react"

const courseContent = [
  {
    title: "Sustainable Building",
    items: [
      "LEED certification principles",
      "Energy efficiency standards",
      "Green building materials",
      "Waste reduction strategies"
    ],
    icon: <Building className="h-12 w-12 text-green-500" />
  },
  {
    title: "Renewable Energy",
    items: [
      "Solar PV installation",
      "Wind energy systems",
      "Energy storage solutions",
      "Grid integration"
    ],
    icon: <Sun className="h-12 w-12 text-yellow-500" />
  },
  {
    title: "Resource Management",
    items: [
      "Water conservation",
      "Sustainable materials",
      "Waste management",
      "Environmental monitoring"
    ],
    icon: <Droplets className="h-12 w-12 text-blue-500" />
  }
]

const details = {
  duration: "160 hours (8 weeks)",
  schedule: "Full-time or part-time options",
  certification: "Green Building Technology Certificate",
  validity: "Recognized across Canada",
  class_size: "Maximum 16 students per instructor",
  prerequisites: [
    "High school diploma or equivalent",
    "Basic construction knowledge",
    "English language proficiency",
    "Computer literacy"
  ],
  materials: "Digital course materials, Green building handbook, Software licenses",
  practical: "Hands-on training with sustainable technologies"
}

const highlights = [
  {
    title: "Industry Demand",
    description: "Growing need for green building specialists",
    icon: <Leaf className="h-6 w-6 text-green-500" />
  },
  {
    title: "Future Ready",
    description: "Latest sustainable construction technologies",
    icon: <Sun className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "Certification Path",
    description: "Pathway to LEED and other certifications",
    icon: <Shield className="h-6 w-6 text-blue-500" />
  }
]

export default function GreenTechnologiesPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Green Building Technologies
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Leading the future of sustainable construction
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>160 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            <span>Sustainable Focus</span>
          </div>
        </div>
      </section>

      {/* Course Content section */}
      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Program Content
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

      {/* Program Details section */}
      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Program Details
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Duration</div>
              <div className="text-sm text-muted-foreground">{details.duration}</div>
            </div>
            {/* Add other details similar to crane pages */}
          </div>
        </div>
      </section>

      {/* Program Highlights section */}
      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Program Highlights
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div 
              key={highlight.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {highlight.icon}
                <h3 className="text-lg font-semibold">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Green Building Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join the sustainable construction revolution
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
              <Building className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 