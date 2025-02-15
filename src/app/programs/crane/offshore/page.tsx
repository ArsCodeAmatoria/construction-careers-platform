import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Anchor, 
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
  Waves
} from "lucide-react"

const courseContent = [
  {
    title: "Maritime Safety",
    items: [
      "CAPP/C-NLOPB Standards",
      "Transport Canada regulations",
      "Atlantic Canada offshore protocols",
      "Emergency response systems"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Offshore Operations",
    items: [
      "Platform crane operations",
      "Supply vessel coordination",
      "Canadian offshore regulations",
      "Environmental monitoring"
    ],
    icon: <Waves className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "East Coast lifting operations",
      "Arctic considerations",
      "Radio communications",
      "Maintenance protocols"
    ],
    icon: <Anchor className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "80 hours (10 days)",
  schedule: "Full-time intensive training",
  certification: "Fulford Canadian Offshore Crane Operator Certificate",
  validity: "Valid for 2 years (CAPP recognized)",
  class_size: "Maximum 4 students per instructor",
  prerequisites: [
    "Valid BCACS/Fulford Level 1 Crane Certification",
    "Minimum 2000 hours crane experience",
    "Transport Canada Marine Medical",
    "Basic Survival Training (BST)",
    "Marine Emergency Duties (MED A1)",
    "H2S Alive certification",
    "Valid offshore medical (physician's approval)"
  ],
  materials: [
    "Canadian offshore operations manual",
    "Simulator training modules",
    "Technical documentation",
    "Atlantic Canada procedures guide"
  ],
  practical: "Simulator training and live equipment when available at Canadian facilities"
}

const highlights = [
  {
    title: "Canadian Standards",
    description: "Meets CAPP and C-NLOPB requirements",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "East Coast Focus",
    description: "Specialized for Atlantic Canada operations",
    icon: <Anchor className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Industry Ready",
    description: "Direct pathway to offshore positions",
    icon: <HardHat className="h-6 w-6 text-green-500" />
  }
]

const regionalInfo = [
  {
    title: "Atlantic Canada Operations",
    description: "Focused on East Coast offshore requirements",
    features: [
      "Newfoundland & Labrador protocols",
      "Nova Scotia offshore standards",
      "Supply vessel coordination",
      "Weather condition management"
    ],
    icon: <Waves className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Arctic Operations",
    description: "Additional certification for northern operations",
    features: [
      "Cold weather procedures",
      "Ice management",
      "Extended daylight operations",
      "Special environmental considerations"
    ],
    icon: <Waves className="h-8 w-8 text-purple-500" />
  }
]

export default function OffshoreCranePage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Offshore Crane Operator
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Specialized certification for offshore operations
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>80 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Offshore Certified</span>
          </div>
        </div>
      </section>

      {/* Course Content section */}
      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Offshore Course Content
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

      {/* Regional Operations section */}
      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Regional Operations
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {regionalInfo.map((region) => (
            <div 
              key={region.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {region.icon}
                <h3 className="text-xl font-semibold">{region.title}</h3>
                <p className="text-muted-foreground">{region.description}</p>
                <ul className="w-full max-w-md space-y-2 text-sm">
                  {region.features.map((feature) => (
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

      {/* Rest of the sections following the same structure */}
    </div>
  )
} 