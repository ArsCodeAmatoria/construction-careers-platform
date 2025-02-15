import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield, 
  Clock, 
  Calendar,
  CheckCircle,
  Book,
  Users,
  Stethoscope,
  Bone,
  Brain,
  Building
} from "lucide-react"

const courseContent = [
  {
    title: "Advanced Patient Care",
    items: [
      "Advanced wound management",
      "Spinal injury assessment",
      "Head injury protocols",
      "Chest injury management"
    ],
    icon: <Stethoscope className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Medical Emergencies",
    items: [
      "Respiratory emergencies",
      "Cardiac emergencies",
      "Diabetic emergencies",
      "Seizure management"
    ],
    icon: <Brain className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Trauma Management",
    items: [
      "Fracture immobilization",
      "Bleeding control",
      "Burns treatment",
      "Multiple injury management"
    ],
    icon: <Bone className="h-12 w-12 text-red-500" />
  }
]

const details = {
  duration: "40 hours (5 days)",
  schedule: "Full-time weekday courses",
  certification: "WorkSafeBC Level 2 First Aid Certificate",
  validity: "Valid for 3 years",
  class_size: "Maximum 8 students per instructor",
  prerequisites: "Level 1 certification recommended",
  materials: "Training manual, equipment, and certification included",
  practical: "Extensive hands-on training and scenarios"
}

const highlights = [
  {
    title: "Comprehensive Training",
    description: "In-depth coverage of advanced first aid techniques",
    icon: <Shield className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Practical Experience",
    description: "Extensive hands-on practice with medical equipment",
    icon: <Stethoscope className="h-6 w-6 text-green-500" />
  },
  {
    title: "Industry Standard",
    description: "Meets WorkSafeBC requirements for Level 2 attendants",
    icon: <Building className="h-6 w-6 text-purple-500" />
  }
]

export default function Level2Page() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Occupational First Aid Level 2
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Advanced first aid training for construction first aid attendants
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>40 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>WorkSafeBC Certified</span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Advanced Course Content
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
          Course Details
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(details).map(([key, value]) => (
            <div 
              key={key}
              className="flex items-center gap-4 p-4 border border-border rounded-lg"
            >
              <div className="flex-1">
                <h3 className="font-semibold capitalize">{key.replace('_', ' ')}</h3>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Program Highlights
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div 
              key={highlight.title}
              className="p-6 border border-border rounded-lg"
            >
              <div className="flex flex-col items-center space-y-3">
                {highlight.icon}
                <h3 className="font-semibold">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Advance Your First Aid Skills
        </h2>
        <p className="text-lg text-muted-foreground">
          Take the next step in your first aid certification with Level 2 training
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
              <Users className="mr-2 h-5 w-5" />
              Group Booking
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 