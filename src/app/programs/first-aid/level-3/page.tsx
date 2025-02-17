import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Heart, 
  Shield, 
  Clock, 
  Calendar,
  Users,
  Building,
  Stethoscope 
} from "lucide-react"

const courseContent = [
  {
    title: "Advanced Medical Care",
    items: [
      "Critical patient assessment",
      "Advanced airway management",
      "Oxygen therapy administration",
      "Complex trauma care"
    ],
    icon: <Stethoscope className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Emergency Management",
    items: [
      "Multiple casualty triage",
      "Advanced life support",
      "Critical incident response",
      "Emergency evacuation"
    ],
    icon: <Heart className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Site Safety Leadership",
    items: [
      "First aid room management",
      "Team coordination",
      "Documentation systems",
      "Risk assessment"
    ],
    icon: <Building className="h-12 w-12 text-green-500" />
  }
]

const details = {
  duration: "70 hours (2 weeks)",
  schedule: "Full-time training",
  certification: "WorkSafeBC Level 3 First Aid Certificate",
  validity: "Valid for 3 years",
  class_size: "Maximum 6 students per instructor",
  prerequisites: "Level 2 certification required",
  materials: "Advanced medical equipment training included",
  practical: "Extensive clinical and scenario-based training"
}

export default function FirstAidLevel3Page() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">
          Level 3 First Aid Training
        </h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Professional first aid certification for construction sites
        </p>
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Advanced Training
        </h2>
        <p className="text-lg text-muted-foreground">
          Become a certified Level 3 first aid attendant
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
              Group Training
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 