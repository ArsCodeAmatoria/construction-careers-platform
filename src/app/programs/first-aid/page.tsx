import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Heart, 
  Shield, 
  Award, 
  Clock, 
  Calendar,
  Users,
  CheckCircle,
  Building
} from "lucide-react"

const firstAidCourses = [
  {
    title: "Occupational First Aid Level 1",
    duration: "8 hours",
    certification: "Valid for 3 years",
    topics: [
      "Primary and secondary assessments",
      "CPR and AED training",
      "Basic wound care",
      "Minor injury management"
    ],
    requirements: [
      "Must be at least 16 years old",
      "No prerequisites required",
      "Government-issued photo ID"
    ],
    icon: <Heart className="h-12 w-12 text-red-500" />,
    href: "/programs/first-aid/level-1"
  },
  {
    title: "Occupational First Aid Level 2",
    duration: "40 hours",
    certification: "Valid for 3 years",
    topics: [
      "Advanced wound management",
      "Spinal injury assessment",
      "Fracture management",
      "Environmental emergencies"
    ],
    requirements: [
      "Must be at least 16 years old",
      "Level 1 certification recommended",
      "Government-issued photo ID"
    ],
    icon: <Shield className="h-12 w-12 text-blue-500" />,
    href: "/programs/first-aid/level-2"
  },
  {
    title: "Advanced First Aid",
    duration: "80 hours",
    certification: "Valid for 3 years",
    topics: [
      "Complex injury management",
      "Medical emergency response",
      "Advanced life support",
      "Multiple casualty management"
    ],
    requirements: [
      "Must be at least 18 years old",
      "Level 2 certification required",
      "Government-issued photo ID"
    ],
    icon: <Award className="h-12 w-12 text-purple-500" />,
    href: "/programs/first-aid/advanced"
  }
]

const benefits = [
  {
    title: "Industry Recognition",
    description: "St. John Ambulance certification is recognized across Canada",
    icon: <CheckCircle className="h-6 w-6 text-green-500" />
  },
  {
    title: "Flexible Scheduling",
    description: "Multiple course dates and locations available",
    icon: <Calendar className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Expert Instruction",
    description: "Learn from experienced medical professionals",
    icon: <Users className="h-6 w-6 text-purple-500" />
  }
]

export default function FirstAidProgramsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          First Aid Training Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          St. John Ambulance certified first aid training for construction professionals
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Available Courses
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {firstAidCourses.map((course) => (
            <Link 
              key={course.title}
              href={course.href}
              className="group"
            >
              <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
                <div className="flex flex-col items-center text-center space-y-4">
                  {course.icon}
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.certification}</p>
                  <div className="w-full space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Topics Covered</h4>
                      <ul className="space-y-1 text-sm">
                        {course.topics.map((topic) => (
                          <li key={topic} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements</h4>
                      <ul className="space-y-1 text-sm">
                        {course.requirements.map((req) => (
                          <li key={req} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Program Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="p-6 border border-border rounded-lg"
            >
              <div className="flex flex-col items-center space-y-3">
                {benefit.icon}
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Get Certified Today
        </h2>
        <p className="text-lg text-muted-foreground">
          Register for a first aid course and enhance your workplace safety skills
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
              Group Bookings
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 