import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Warehouse, 
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
      "CSA B167-16 Standards",
      "WorkSafeBC regulations",
      "Fall protection",
      "Emergency procedures"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Operations",
    items: [
      "Bridge & gantry controls",
      "Load capacity charts",
      "Pre-operational checks",
      "Maintenance requirements"
    ],
    icon: <Cog className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Practical Skills",
    items: [
      "Precise load control",
      "Indoor crane operations",
      "Standard hand signals",
      "Equipment inspection"
    ],
    icon: <Wrench className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "2 weeks",
  schedule: "Full-time or flexible options",
  certification: "Fulford Certified Bridge/Overhead Crane Operator",
  validity: "Valid for 3 years",
  class_size: "Maximum 6 students per instructor",
  prerequisites: [
    "18+ years old",
    "Grade 10 math or equivalent",
    "Physical capability for crane operations",
    "CSA-approved safety boots required",
    "English language proficiency"
  ],
  materials: "Training manual, PPE requirements",
  practical: "Extensive hands-on equipment operation"
}

export default function OverheadCranePage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Bridge & Overhead Crane Operation
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Master the operation of bridge and overhead cranes for industrial facilities. 
          Learn essential skills for safe and efficient material handling.
        </p>
      </section>

      {/* Course Content */}
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

      {/* Program Details */}
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
              <ul className="space-y-1">
                {details.prerequisites.map((req) => (
                  <li key={req} className="text-sm text-muted-foreground flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our bridge and overhead crane program and build your career in industrial operations.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <HardHat className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
          </Link>
          <Link href="/programs/crane">
            <Button variant="outline" size="lg">
              View All Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 