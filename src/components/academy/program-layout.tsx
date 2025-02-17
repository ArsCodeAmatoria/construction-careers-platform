import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Building, CheckCircle, Award, Calendar, Book, HardHat } from "lucide-react"

interface ProgramLayoutProps {
  title: string
  description: string
  duration: string
  certification: string
  features: string[]
  modules: {
    title: string
    description: string
    topics: string[]
  }[]
}

export function ProgramLayout({
  title,
  description,
  duration,
  certification,
  features,
  modules
}: ProgramLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          {description}
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <span>{certification}</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto">
        <div className="grid gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Program Modules */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tighter text-center mb-8">
          Program Modules
        </h2>
        <div className="grid gap-8">
          {modules.map((module, index) => (
            <div key={index} className="border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <p className="text-muted-foreground">{module.description}</p>
              <ul className="grid gap-2">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Training Today
        </h2>
        <p className="text-lg text-muted-foreground">
          Join Bigfoot Academy and get certified in your chosen specialization.
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
              <HardHat className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 