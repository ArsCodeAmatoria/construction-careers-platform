import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Heart, 
  Clock, 
  Calendar,
  Shield,
  Building,
  Container,
  Car,
  Truck,
  Link2
} from "lucide-react"

const trainingPrograms = [
  {
    title: "First Aid Training",
    provider: "St. John Ambulance",
    courses: [
      {
        name: "Occupational First Aid Level 1",
        duration: "8 hours",
        href: "/programs/first-aid/level-1",
        icon: <Heart className="h-6 w-6 text-red-500" />
      },
      {
        name: "Occupational First Aid Level 2",
        duration: "40 hours",
        href: "/programs/first-aid/level-2",
        icon: <Heart className="h-6 w-6 text-blue-500" />
      },
      {
        name: "Advanced First Aid",
        duration: "80 hours",
        href: "/programs/first-aid/advanced",
        icon: <Heart className="h-6 w-6 text-purple-500" />
      }
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Crane & Rigging Operations",
    provider: "Multiple Providers",
    courses: [
      {
        name: "Hoist Operator Certification",
        duration: "40 hours",
        provider: "Bigfoot Crane Company",
        href: "/programs/crane/hoist-operator",
        icon: <Container className="h-6 w-6 text-blue-500" />
      },
      {
        name: "Mobile Crane Operator",
        duration: "300 hours",
        provider: "BC Crane Safety",
        href: "/programs/crane/mobile-crane",
        icon: <Truck className="h-6 w-6 text-green-500" />
      },
      {
        name: "Tower Crane Operator",
        duration: "400 hours",
        provider: "Fulford Certification",
        href: "/programs/crane/tower-crane",
        icon: <Container className="h-6 w-6 text-orange-500" />
      },
      {
        name: "Rigging Level 1",
        duration: "24 hours",
        provider: "BC Crane Safety",
        href: "/programs/crane/rigging-1",
        icon: <Link2 className="h-6 w-6 text-purple-500" />
      },
      {
        name: "Bridge Crane Operator",
        duration: "16 hours",
        provider: "Fulford Certification",
        href: "/programs/crane/bridge-crane",
        icon: <Container className="h-6 w-6 text-red-500" />
      }
    ],
    icon: <Container className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Traffic Control",
    provider: "BCCSA",
    courses: [
      {
        name: "Traffic Control Person (TCP)",
        duration: "16 hours",
        href: "/programs/traffic-control",
        icon: <Car className="h-6 w-6 text-orange-500" />
      }
    ],
    icon: <Car className="h-12 w-12 text-orange-500" />
  }
]

export default function CareerProgramsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Training Certifications
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Industry-certified training programs for construction professionals
        </p>
        <Link href="/programs" className="text-sm text-muted-foreground hover:text-foreground">
          View career development programs →
        </Link>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-12">
        {trainingPrograms.map((program) => (
          <div 
            key={program.title}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              {program.icon}
              <div>
                <h2 className="text-2xl font-bold">{program.title}</h2>
                <p className="text-muted-foreground">Provider: {program.provider}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {program.courses.map((course) => (
                <Link 
                  key={course.name}
                  href={course.href}
                  className="group"
                >
                  <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {course.icon}
                      <h3 className="text-xl font-semibold">{course.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Training
        </h2>
        <p className="text-lg text-muted-foreground">
          Get certified and advance your construction career
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
              <Building className="mr-2 h-5 w-5" />
              Group Training
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 