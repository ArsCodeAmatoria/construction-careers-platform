import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Award, BookOpen, Users, Clock, Target } from "lucide-react"

const entryPrograms = [
  {
    title: "Construction Craft Worker",
    description: "Start your construction career with fundamental skills training",
    features: [
      "No experience required",
      "8-12 week program",
      "Safety certifications included",
      "Job placement assistance"
    ],
    icon: <GraduationCap className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Pre-Apprenticeship Training",
    description: "Prepare for apprenticeship programs with essential skills",
    features: [
      "Basic tool training",
      "Math and safety fundamentals",
      "Industry exposure",
      "Career counseling"
    ],
    icon: <BookOpen className="h-12 w-12 text-green-500" />
  },
  {
    title: "Construction Assistant",
    description: "Learn to support various construction trades",
    features: [
      "Hands-on training",
      "Multiple trade exposure",
      "Work experience placement",
      "Industry networking"
    ],
    icon: <Users className="h-12 w-12 text-orange-500" />
  }
]

const benefits = [
  "No prior experience needed",
  "Financial support available",
  "Industry recognized certification",
  "Direct path to apprenticeships",
  "Flexible learning options",
  "Career counseling support"
]

export default function EntryLevelPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Entry Level Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Start your construction career with comprehensive training designed for beginners
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {entryPrograms.map((program) => (
            <div 
              key={program.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {program.icon}
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Program Benefits
        </h2>
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit}
              className="flex items-center space-x-3 p-4 border border-border rounded-lg"
            >
              <Target className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Begin Your Journey
        </h2>
        <p className="text-lg text-muted-foreground">
          Take the first step towards a rewarding career in construction
        </p>
        <Link href="/careers?category=entry-level">
          <Button size="lg">
            <Clock className="mr-2 h-5 w-5" />
            Start Now
          </Button>
        </Link>
      </section>
    </div>
  )
} 