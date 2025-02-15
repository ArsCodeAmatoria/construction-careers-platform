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
  Cog,
  Shield,
  Building,
  Wrench,
  Calculator
} from "lucide-react"

const courseContent = [
  {
    title: "Safety & Regulations",
    items: [
      "WorkSafeBC regulations",
      "Site safety requirements",
      "Emergency procedures",
      "Risk assessment"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Operations",
    items: [
      "Load charts and calculations",
      "Crane setup and positioning",
      "Equipment inspection",
      "Maintenance procedures"
    ],
    icon: <Cog className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Practical Skills",
    items: [
      "Operating techniques",
      "Load handling",
      "Communication protocols",
      "Complex lifts"
    ],
    icon: <Wrench className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "300 hours (8-12 weeks)",
  schedule: "Full-time training",
  certification: "BC Crane Safety Mobile Crane Operator Certificate",
  validity: "Red Seal Certification Available",
  class_size: "Maximum 6 students per instructor",
  prerequisites: [
    "18+ years old",
    "Grade 10 math or equivalent",
    "Physical capability to operate equipment",
    "Valid driver's license"
  ],
  materials: "Training manual, PPE requirements",
  practical: "Extensive hands-on equipment operation"
}

const highlights = [
  {
    title: "Red Seal Path",
    description: "Nationally recognized certification program",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "Comprehensive Training",
    description: "Theory and hands-on practical experience",
    icon: <Book className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Industry Ready",
    description: "Direct path to mobile crane operator positions",
    icon: <Truck className="h-6 w-6 text-green-500" />
  }
]

export default function MobileCranePage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Mobile Crane Operator
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          BC Crane Safety certified training for mobile crane operations
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>300 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Red Seal Program</span>
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
            <div className="space-y-2">
              <div className="text-sm font-medium">Schedule</div>
              <div className="text-sm text-muted-foreground">{details.schedule}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Certification</div>
              <div className="text-sm text-muted-foreground">{details.certification}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Class Size</div>
              <div className="text-sm text-muted-foreground">{details.class_size}</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Prerequisites</div>
              <ul className="space-y-2">
                {details.prerequisites.map((prereq) => (
                  <li key={prereq} className="text-sm text-muted-foreground flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {prereq}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Training
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your journey to becoming a certified mobile crane operator
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
              Group Training
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 