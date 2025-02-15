import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Heart, 
  Clock, 
  Calendar,
  CheckCircle,
  Book,
  Users,
  Building,
  Stethoscope
} from "lucide-react"

const courseContent = [
  {
    title: "Emergency Scene Management",
    items: [
      "Scene assessment",
      "Hazard identification",
      "Personal protective equipment",
      "Emergency services coordination"
    ],
    icon: <Building className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Patient Assessment",
    items: [
      "Primary surveys",
      "Secondary surveys",
      "Vital signs monitoring",
      "Documentation requirements"
    ],
    icon: <Stethoscope className="h-12 w-12 text-green-500" />
  },
  {
    title: "Treatment Skills",
    items: [
      "CPR and AED use",
      "Basic wound care",
      "Minor injury management",
      "Medical emergencies"
    ],
    icon: <Heart className="h-12 w-12 text-red-500" />
  }
]

const details = {
  duration: "8 hours (1 day)",
  schedule: "Weekday and weekend courses available",
  certification: "WorkSafeBC Level 1 First Aid Certificate",
  validity: "Valid for 3 years",
  class_size: "Maximum 12 students per instructor",
  materials: "Training materials and certification included"
}

export default function Level1Page() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Occupational First Aid Level 1
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Essential first aid training for construction workers and safety personnel
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>8 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>WorkSafeBC Certified</span>
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
          Register for Level 1 First Aid
        </h2>
        <p className="text-lg text-muted-foreground">
          Start your first aid certification journey with St. John Ambulance
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