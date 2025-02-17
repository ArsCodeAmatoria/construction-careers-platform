import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Construction, 
  HardHat,
  Truck,
  Link2,
  Warehouse,
  Cpu,
  Award,
  Shield,
  Users,
  Building2
} from "lucide-react"

const trainingPrograms = [
  {
    title: "Crane Operator Programs",
    description: "Comprehensive certification programs for various crane types including stiff boom, folding boom, and self-erecting tower cranes.",
    icon: <Construction className="h-12 w-12 text-blue-500" />,
    href: "/bigfoot-academy/programs/crane-operator",
    features: [
      "Stiff Boom Crane Operator Certification",
      "Folding Boom Crane Operator Course",
      "Self-Erecting Tower Crane Course",
      "Red Seal Certification Path"
    ]
  },
  {
    title: "Rigger Certifications",
    description: "Essential rigging and hoisting skills certification programs from basic to advanced levels.",
    icon: <Link2 className="h-12 w-12 text-green-500" />,
    href: "/bigfoot-academy/programs/rigging",
    features: [
      "Level 1 Rigger Certification",
      "Level 2 Advanced Rigging",
      "Civil Rigging Training",
      "Load Turning and Drifting"
    ]
  },
  {
    title: "On-Site Training",
    description: "Customized training programs delivered at your location, including crane operations, rigging, and safety courses.",
    icon: <Building2 className="h-12 w-12 text-purple-500" />,
    href: "/bigfoot-academy/programs/onsite",
    features: [
      "Supervisor Crane & Rigging Awareness",
      "Overhead Crane & Rigging",
      "Construction Hoist Operation",
      "Assessment Preparation Courses"
    ]
  },
  {
    title: "Equipment Training",
    description: "IVES certified training for various construction equipment, delivered at your location.",
    icon: <Truck className="h-12 w-12 text-orange-500" />,
    href: "/bigfoot-academy/programs/equipment",
    features: [
      "Forklift Training",
      "Telehandler Operation",
      "Scissor Lift Training",
      "Mobile Elevated Work Platform"
    ]
  },
  {
    title: "Simulator Training",
    description: "State-of-the-art simulator training for crane and heavy equipment operators, perfect for skill development and assessments.",
    icon: <Cpu className="h-12 w-12 text-red-500" />,
    href: "/bigfoot-academy/programs/simulator",
    features: [
      "Crane Operation Simulation",
      "Heavy Equipment Training",
      "Operator Assessments",
      "Injury Recovery Training"
    ]
  },
  {
    title: "Hoist Operator Training",
    description: "Comprehensive 3-day construction hoist operator training program with industry certification.",
    icon: <Warehouse className="h-12 w-12 text-yellow-500" />,
    href: "/bigfoot-academy/programs/hoist",
    features: [
      "3-Day Comprehensive Program",
      "Hands-on Training",
      "Safety Protocols",
      "Industry Certification"
    ]
  }
]

const benefits = [
  {
    title: "Industry Recognition",
    description: "Certifications recognized across British Columbia and Canada",
    icon: <Award className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Expert Instructors",
    description: "Training by experienced, certified professionals",
    icon: <HardHat className="h-8 w-8 text-green-500" />
  },
  {
    title: "Safety Focus",
    description: "Comprehensive safety training meeting WorkSafeBC standards",
    icon: <Shield className="h-8 w-8 text-red-500" />
  },
  {
    title: "Career Support",
    description: "Job placement assistance and industry connections",
    icon: <Users className="h-8 w-8 text-purple-500" />
  }
]

export default function BigfootAcademyPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Bigfoot Training Academy
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          World-class crane and construction training programs. Master the skills needed for a successful career in the construction industry.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4">
        {trainingPrograms.map((program) => (
          <Link 
            key={program.title} 
            href={program.href}
            className="group border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {program.icon}
              <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
              <ul className="mt-4 space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Why Choose Bigfoot Academy
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="flex flex-col items-center text-center space-y-3"
            >
              {benefit.icon}
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our industry-leading training programs and build a rewarding career in construction.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <HardHat className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
          </Link>
          <Link href="/bigfoot-academy/programs">
            <Button variant="outline" size="lg">
              View All Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 