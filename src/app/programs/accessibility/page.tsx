import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Award, HandHeart, Clock, Target, BookOpen, Users, MapPin, Briefcase } from "lucide-react"

const accessibilityPrograms = [
  {
    title: "Workplace Accommodation",
    description: "Customized support and accommodations for construction professionals with disabilities",
    features: [
      "Workplace assessment",
      "Adaptive equipment",
      "Ergonomic solutions",
      "Support services"
    ],
    icon: <HandHeart className="h-12 w-12 text-pink-500" />
  },
  {
    title: "Skills Training",
    description: "Specialized construction training programs with adaptive approaches",
    features: [
      "Modified training methods",
      "Assistive technology",
      "Safety certification",
      "Hands-on practice"
    ],
    icon: <Briefcase className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Career Development",
    description: "Personalized career planning and advancement support",
    features: [
      "Career counseling",
      "Job placement assistance",
      "Ongoing support",
      "Professional networking"
    ],
    icon: <Users className="h-12 w-12 text-green-500" />
  }
]

const benefits = [
  "Customized workplace accommodations",
  "Inclusive training environments",
  "Specialized support services",
  "Employment assistance",
  "Adaptive equipment access",
  "Ongoing career guidance"
]

const partners = [
  "WorkBC Assistive Technology Services",
  "BC Construction Association",
  "Disability Alliance BC",
  "Neil Squire Society",
  "Technology for Living"
]

export default function AccessibilityPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Accessibility Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Creating inclusive opportunities in construction through specialized support and accommodations
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {accessibilityPrograms.map((program) => (
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
              <Target className="h-5 w-5 text-pink-500 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Program Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner) => (
            <div 
              key={partner}
              className="px-4 py-2 bg-muted rounded-full text-sm"
            >
              {partner}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Get Started
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your construction career with our comprehensive support and accommodation programs
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/careers">
            <Button size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Careers
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <MapPin className="mr-2 h-5 w-5" />
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  )
} 