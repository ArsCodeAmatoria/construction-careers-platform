import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Users, Shield, HardHat, Award } from "lucide-react"

const unionPrograms = [
  {
    title: "Apprenticeship Training",
    description: "Union-sponsored apprenticeship programs with guaranteed work placements",
    features: [
      "Paid on-the-job training",
      "Red Seal certification path",
      "Benefits coverage",
      "Pension contributions"
    ]
  },
  {
    title: "Skills Upgrading",
    description: "Continuous learning opportunities for journey workers",
    features: [
      "Advanced certifications",
      "Safety training",
      "New technology training",
      "Leadership development"
    ]
  },
  {
    title: "Safety Programs",
    description: "Comprehensive safety training and certification",
    features: [
      "WHMIS certification",
      "Fall protection",
      "Confined space training",
      "First aid certification"
    ]
  }
]

export default function UnionTrainingPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Union Training Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Access high-quality training and career development through BC&apos;s largest unions
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {unionPrograms.map((program) => (
            <div 
              key={program.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <HardHat className="h-12 w-12 text-blue-500" />
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Union Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join a union and access comprehensive training, benefits, and career advancement opportunities
        </p>
        <Link href="/careers">
          <Button size="lg">
            <Users className="mr-2 h-5 w-5" />
            View Career Options
          </Button>
        </Link>
      </section>
    </div>
  )
} 