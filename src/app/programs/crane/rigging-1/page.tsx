import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Link2, 
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
  Calculator
} from "lucide-react"

const courseContent = [
  {
    title: "Safety & Standards",
    items: [
      "CSA Z150 Safety Code",
      "WorkSafeBC regulations",
      "Fulford safety protocols",
      "Site-specific requirements"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Knowledge",
    items: [
      "Canadian rigging standards",
      "Sling configurations",
      "Load weight calculations",
      "Working load limits (WLL)"
    ],
    icon: <Calculator className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Practical Skills",
    items: [
      "Industry-standard hardware",
      "Sling angle factors",
      "Standard crane signals",
      "Equipment inspection protocols"
    ],
    icon: <Link2 className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "32 hours (4 days)",
  schedule: "Full-time weekday courses",
  certification: "Fulford Harbour Group Level 1 Rigging Certificate",
  validity: "Valid for 3 years in BC",
  class_size: "Maximum 8 students per instructor",
  prerequisites: [
    "18+ years old",
    "Grade 10 math or equivalent",
    "Physical capability for rigging work",
    "CSA-approved steel-toed boots",
    "English language proficiency"
  ],
  materials: "Fulford training manual, PPE requirements, Rigging handbook",
  practical: "Hands-on training with industry-standard equipment"
}

const highlights = [
  {
    title: "Fulford Certified",
    description: "Industry-recognized Canadian certification",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "Career Path",
    description: "Pathway to Advanced Rigging certification",
    icon: <HardHat className="h-6 w-6 text-green-500" />
  },
  {
    title: "Industry Ready",
    description: "Meets BC construction industry standards",
    icon: <Building className="h-6 w-6 text-blue-500" />
  }
]

const advancedTopics = [
  {
    title: "Advanced Rigging",
    description: "40-hour advanced certification available after Level 1",
    features: [
      "Complex lift planning",
      "Multiple crane operations",
      "Critical lift procedures",
      "Advanced load calculations"
    ],
    icon: <Link2 className="h-8 w-8 text-purple-500" />
  }
]

export default function RiggingLevel1Page() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Rigging Level 1
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          BC Crane Safety certified rigging fundamentals
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>24 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Industry Certified</span>
          </div>
        </div>
      </section>

      {/* Course Content section */}
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

      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Advanced Certification Path
        </h2>
        <div className="grid gap-6 md:grid-cols-1">
          {advancedTopics.map((topic) => (
            <div 
              key={topic.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {topic.icon}
                <h3 className="text-xl font-semibold">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.description}</p>
                <ul className="w-full max-w-md space-y-2 text-sm">
                  {topic.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/programs/crane/rigging-advanced">
                  <Button variant="outline">
                    Learn More About Advanced Rigging
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of the sections following the same structure as tower-crane page */}
    </div>
  )
} 