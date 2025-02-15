import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Car, 
  Clock, 
  Calendar,
  CheckCircle,
  Book,
  Users,
  HardHat,
  Shield,
  Building,
  Navigation,
  Map
} from "lucide-react"

const courseContent = [
  {
    title: "Safety Fundamentals",
    items: [
      "Personal protective equipment",
      "Risk assessment",
      "Emergency procedures",
      "Site safety protocols"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Traffic Control",
    items: [
      "Hand signaling techniques",
      "Traffic control devices",
      "Communication methods",
      "Traffic pattern management"
    ],
    icon: <Navigation className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Work Zone Safety",
    items: [
      "Work zone setup",
      "Sign placement",
      "Temporary traffic control",
      "Night operations"
    ],
    icon: <Map className="h-12 w-12 text-orange-500" />
  }
]

const details = {
  duration: "16 hours (2 days)",
  schedule: "Weekday and weekend courses",
  certification: "BCCSA Traffic Control Person Certificate",
  validity: "Valid for 3 years",
  class_size: "Maximum 20 students per instructor",
  prerequisites: "Must be at least 16 years old",
  materials: "Training manual, safety vest, stop/slow paddle",
  practical: "Includes practical exercises and assessment"
}

const highlights = [
  {
    title: "BCCSA Certified",
    description: "Recognized certification across British Columbia",
    icon: <Building className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Practical Training",
    description: "Hands-on experience with traffic control equipment",
    icon: <HardHat className="h-6 w-6 text-orange-500" />
  },
  {
    title: "Industry Ready",
    description: "Immediate job opportunities after certification",
    icon: <Car className="h-6 w-6 text-green-500" />
  }
]

export default function TCPPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Traffic Control Person (TCP) Certification
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          BCCSA-certified training for construction traffic control personnel
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>16 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            <span>BCCSA Certified</span>
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
          Program Details
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
          Start Your TCP Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Get certified and join the construction industry as a qualified traffic control person
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