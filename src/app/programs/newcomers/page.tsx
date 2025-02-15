import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plane, Award, Globe, Clock, Target, BookOpen, Users, MapPin } from "lucide-react"

const newcomerPrograms = [
  {
    title: "Construction Skills Integration",
    description: "Specialized program helping international construction professionals transition to Canadian standards",
    features: [
      "Canadian construction standards",
      "Safety certification programs",
      "English for construction",
      "Industry networking"
    ],
    icon: <Globe className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Credential Recognition",
    description: "Support for international credential assessment and recognition",
    features: [
      "Skills assessment",
      "Credential evaluation",
      "Gap training programs",
      "Professional certification"
    ],
    icon: <Award className="h-12 w-12 text-green-500" />
  },
  {
    title: "Mentorship Program",
    description: "Connect with experienced construction professionals in BC",
    features: [
      "One-on-one mentoring",
      "Industry introductions",
      "Career guidance",
      "Local work culture"
    ],
    icon: <Users className="h-12 w-12 text-orange-500" />
  }
]

const benefits = [
  "Recognition of international experience",
  "Canadian certification pathways",
  "Language support for construction",
  "Industry networking opportunities",
  "Career counseling services",
  "Job search assistance"
]

export default function NewcomersPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Newcomers to Canada
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Supporting international construction professionals in building their careers in British Columbia
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {newcomerPrograms.map((program) => (
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
          Start Your Journey
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your construction career in British Columbia with our comprehensive support programs
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/careers">
            <Button size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              View Career Options
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <MapPin className="mr-2 h-5 w-5" />
            Find Local Support
          </Button>
        </div>
      </section>
    </div>
  )
} 