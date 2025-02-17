import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield, 
  HardHat, 
  Target, 
  Book,
  Users,
  FileCheck,
  Briefcase,
  CheckSquare
} from "lucide-react"

const courseContent = [
  {
    title: "Safety Fundamentals",
    items: [
      "Safety regulations",
      "Risk assessment",
      "Hazard identification",
      "Emergency procedures"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Coordination Skills",
    items: [
      "Team leadership",
      "Communication protocols",
      "Documentation management",
      "Training coordination"
    ],
    icon: <Users className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Site Management",
    items: [
      "Site inspections",
      "Safety meetings",
      "Incident reporting",
      "Compliance monitoring"
    ],
    icon: <FileCheck className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "4 weeks",
  schedule: "Full-time or part-time options",
  certification: "Safety Coordinator Certificate",
  validity: "Valid across BC",
  class_size: "Maximum 12 students per instructor",
  prerequisites: [
    "18+ years old",
    "High school diploma or equivalent",
    "Construction experience preferred",
    "English language proficiency"
  ],
  materials: "Training manual and safety documentation templates",
  practical: "On-site training and simulated scenarios"
}

export default function SafetyCoordinatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">
          Safety Coordinator Training
        </h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Develop essential skills for construction site safety coordination
        </p>
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
                      <Shield className="h-4 w-4 mr-2 text-muted-foreground" />
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
              <ul className="space-y-1">
                {details.prerequisites.map((req) => (
                  <li key={req} className="text-sm text-muted-foreground flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Training
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your journey to becoming a certified Safety Coordinator
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Book className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
          </Link>
          <Link href="/programs/safety">
            <Button variant="outline" size="lg">
              <Briefcase className="mr-2 h-5 w-5" />
              View All Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 