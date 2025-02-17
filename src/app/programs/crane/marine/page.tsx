import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield,
  Cog,
  Wrench,
  CheckCircle,
  HardHat
} from "lucide-react"

const courseContent = [
  {
    title: "Safety & Maritime Regulations",
    items: [
      "Marine safety protocols",
      "Weather considerations",
      "Emergency procedures",
      "Maritime regulations"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Operations",
    items: [
      "Load charts for marine cranes",
      "Ship stability considerations",
      "Equipment inspection",
      "Maintenance requirements"
    ],
    icon: <Cog className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Practical Skills",
    items: [
      "Marine crane operation",
      "Load handling at sea",
      "Maritime communication",
      "Vessel positioning"
    ],
    icon: <Wrench className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "8 hours + assessment",
  schedule: "Flexible scheduling",
  certification: "Marine Crane Operator Certificate",
  validity: "Valid for marine operations",
  class_size: "Maximum 4 students per instructor",
  prerequisites: [
    "18+ years old",
    "Marine experience preferred",
    "Physical capability for marine work",
    "Basic maritime safety training",
    "English language proficiency"
  ],
  materials: "Training manual, Marine PPE requirements",
  practical: "Hands-on training with marine pedestal cranes"
}

export default function MarineCranePage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Marine Pedestal Crane Operation
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Specialized training for maritime crane operations. Master the skills needed for 
          safe and efficient operation of ship-mounted cranes.
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
          Join our marine crane operator program and specialize in maritime operations.
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