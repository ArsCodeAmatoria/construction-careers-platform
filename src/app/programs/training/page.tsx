import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Award, Scroll, Clock, Target, Lightbulb, HardHat, Shield } from "lucide-react"

const trainingPrograms = [
  {
    title: "Safety Certifications",
    description: "Essential safety training and certifications for construction",
    features: [
      "WHMIS certification",
      "Fall protection training",
      "First aid certification",
      "Construction safety training"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Skills Development",
    description: "Upgrade your construction skills and knowledge",
    features: [
      "Equipment operation",
      "Technical skills training",
      "Industry best practices",
      "Hands-on workshops"
    ],
    icon: <Lightbulb className="h-12 w-12 text-yellow-500" />
  },
  {
    title: "Professional Certification",
    description: "Industry-recognized certifications and qualifications",
    features: [
      "Trade certifications",
      "Professional development",
      "Specialized training",
      "Continuing education"
    ],
    icon: <Scroll className="h-12 w-12 text-blue-500" />
  }
]

const benefits = [
  "Industry-recognized credentials",
  "Flexible learning schedules",
  "Hands-on practical training",
  "Career advancement opportunities",
  "Professional networking",
  "Ongoing support and resources"
]

export default function TrainingPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Training Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Enhance your skills and advance your construction career with specialized training
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {trainingPrograms.map((program) => (
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
          Advance Your Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Take your construction skills to the next level with professional training
        </p>
        <Link href="/programs/training/catalog">
          <Button size="lg">
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Programs
          </Button>
        </Link>
      </section>
    </div>
  )
} 