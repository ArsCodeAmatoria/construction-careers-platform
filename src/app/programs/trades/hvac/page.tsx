import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Wrench,
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
  ThermometerSun
} from "lucide-react"

const courseContent = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Industry safety standards",
      "Equipment handling",
      "Electrical safety",
      "Gas safety protocols"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "System installation",
      "Refrigeration principles",
      "Electrical systems",
      "Mechanical systems"
    ],
    icon: <Wrench className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Advanced Systems",
    items: [
      "Energy efficiency",
      "Smart HVAC systems",
      "System diagnostics",
      "Environmental controls"
    ],
    icon: <ThermometerSun className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "32 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "HVAC/R Technician Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Math & science fundamentals",
    "Physical capability",
    "Safety orientation completion"
  ]
}

const certifications = [
  "Red Seal Certification",
  "Gas Fitting License",
  "Refrigeration Handling",
  "WHMIS",
  "First Aid Level 1"
]

export default function HVACPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          HVAC/R Technician Program
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Master heating, ventilation, air conditioning, and refrigeration systems
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

      {/* Course Content Section */}
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

      {/* Prerequisites Section */}
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

      {/* Certifications Section */}
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

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your HVAC Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your journey to becoming a certified HVAC/R technician
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