'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
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
  Building2,
  CheckCircle
} from "lucide-react"

const trainingPrograms = [
  {
    title: "Crane Operator Programs",
    description: "Comprehensive certification programs for various crane types including stiff boom, folding boom, and self-erecting tower cranes.",
    icon: <Construction className="h-12 w-12 text-blue-500 float" />,
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
    icon: <Link2 className="h-12 w-12 text-green-500 float" />,
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
    icon: <Building2 className="h-12 w-12 text-purple-500 float" />,
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
    icon: <Truck className="h-12 w-12 text-orange-500 float" />,
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
    icon: <Cpu className="h-12 w-12 text-red-500 float" />,
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
    icon: <Warehouse className="h-12 w-12 text-yellow-500 float" />,
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
    icon: <Award className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Expert Instructors",
    description: "Training by experienced, certified professionals",
    icon: <HardHat className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Safety Focus",
    description: "Comprehensive safety training meeting WorkSafeBC standards",
    icon: <Shield className="h-8 w-8 text-red-500 float" />
  },
  {
    title: "Career Support",
    description: "Job placement assistance and industry connections",
    icon: <Users className="h-8 w-8 text-purple-500 float" />
  }
]

export default function BigfootAcademyPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl shimmer-text">
          Bigfoot Training Academy
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          World-class crane and construction training programs. Master the skills needed for a successful career in the construction industry.
        </p>
      </section>

      <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4" stagger={0.08}>
        {trainingPrograms.map((program, index) => (
          <Link 
            key={program.title} 
            href={program.href}
            className="group"
          >
            <Card delay={index * 0.08} className="h-full">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {program.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </AnimatedContainer>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Why Choose Bigfoot Academy
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-4" stagger={0.08}>
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="flex flex-col items-center space-y-3 p-6">
                {benefit.icon}
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our industry-leading training programs and build a rewarding career in construction.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <HardHat className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
          </Link>
          <Link href="/bigfoot-academy/programs">
            <Button variant="outline" size="lg" className="button-glow">
              View All Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 