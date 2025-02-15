import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, HardHat, Clock, Target, Wrench, Briefcase, Shield } from "lucide-react"

const apprenticeshipPrograms = [
  {
    title: "Red Seal Trades",
    description: "Nationally recognized certification programs in various trades",
    features: [
      "4-year apprenticeship program",
      "Paid on-the-job training",
      "Technical classroom instruction",
      "Industry certification"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Construction Trades",
    description: "Specialized training in high-demand construction trades",
    features: [
      "Hands-on experience",
      "Mentorship program",
      "Safety certifications",
      "Career advancement paths"
    ],
    icon: <Wrench className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Union Apprenticeships",
    description: "Union-sponsored apprenticeship opportunities",
    features: [
      "Guaranteed work placements",
      "Competitive wages",
      "Benefits package",
      "Pension contributions"
    ],
    icon: <Users className="h-12 w-12 text-green-500" />
  }
]

const benefits = [
  "Earn while you learn",
  "Industry recognized credentials",
  "Structured career progression",
  "Mentorship opportunities",
  "Job security",
  "Higher earning potential"
]

export default function ApprenticeshipPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Apprenticeship Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Build your career through hands-on training and expert mentorship
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {apprenticeshipPrograms.map((program) => (
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
          Apprenticeship Benefits
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
          Start Your Apprenticeship
        </h2>
        <p className="text-lg text-muted-foreground">
          Take the first step towards becoming a certified tradesperson
        </p>
        <Link href="/careers?category=apprenticeship">
          <Button size="lg">
            <Clock className="mr-2 h-5 w-5" />
            Apply Now
          </Button>
        </Link>
      </section>
    </div>
  )
} 