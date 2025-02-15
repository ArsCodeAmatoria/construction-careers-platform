import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Container, 
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
      "Confined space awareness"
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
      "Emergency procedures"
    ],
    icon: <Wrench className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "16 hours (2 days)",
  schedule: "Weekday courses available",
  certification: "Fulford Harbour Group Bridge/Overhead Crane Certificate",
  validity: "Valid for 3 years in BC",
  class_size: "Maximum 6 students per instructor",
  prerequisites: [
    "18+ years old",
    "Grade 10 math or equivalent",
    "Physical capability for crane operations",
    "CSA-approved safety boots",
    "English language proficiency"
  ],
  materials: "Training manual, PPE requirements, Practical assessment forms",
  practical: "Hands-on training with bridge/overhead crane systems"
}

const highlights = [
  {
    title: "Fulford Certified",
    description: "Industry-recognized certification for indoor crane operations",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "Manufacturing Focus",
    description: "Specialized training for industrial facilities",
    icon: <Building className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Rapid Certification",
    description: "Complete certification in two days",
    icon: <Clock className="h-6 w-6 text-green-500" />
  }
]

const additionalCourses = [
  {
    title: "Advanced Bridge Crane",
    description: "24-hour advanced certification for complex operations",
    features: [
      "Tandem lifts",
      "Advanced load control",
      "Maintenance inspection",
      "Supervisor training"
    ],
    icon: <Container className="h-8 w-8 text-purple-500" />
  }
]

export default function BridgeCranePage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Bridge & Overhead Crane Operator
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Fulford certified training for indoor crane operations
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>16 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Industry Certified</span>
          </div>
        </div>
      </section>

      {/* Rest of sections following same structure */}
    </div>
  )
} 