import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Box, 
  Award, 
  Laptop, 
  Clock, 
  Target, 
  BookOpen, 
  Users, 
  MapPin, 
  Code,
  Building 
} from "lucide-react"

const bimPrograms = [
  {
    title: "BIM Fundamentals",
    description: "Introduction to Building Information Modeling concepts and applications",
    features: [
      "3D modeling basics",
      "BIM software platforms",
      "Project collaboration",
      "Industry standards"
    ],
    icon: <Box className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Advanced BIM Coordination",
    description: "Advanced training in BIM coordination and project management",
    features: [
      "Clash detection",
      "Construction sequencing",
      "Resource management",
      "Quality control"
    ],
    icon: <Building className="h-12 w-12 text-green-500" />
  },
  {
    title: "Digital Construction",
    description: "Integration of BIM with modern construction technologies",
    features: [
      "Digital workflows",
      "Cloud collaboration",
      "Mobile applications",
      "Data management"
    ],
    icon: <Code className="h-12 w-12 text-purple-500" />
  }
]

const certifications = [
  {
    name: "Autodesk BIM Certification",
    provider: "Autodesk",
    duration: "6 months",
    level: "Professional"
  },
  {
    name: "Revit Professional",
    provider: "Autodesk",
    duration: "3 months",
    level: "Intermediate"
  },
  {
    name: "BIM Project Management",
    provider: "BuildingSMART",
    duration: "4 months",
    level: "Advanced"
  }
]

const benefits = [
  "Increased project efficiency",
  "Better collaboration",
  "Reduced errors and rework",
  "Enhanced visualization",
  "Improved cost control",
  "Future-ready skillset"
]

export default function BIMIntegrationPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          BIM Integration Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Master the latest Building Information Modeling technologies and practices
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {bimPrograms.map((program) => (
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
          Professional Certifications
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <div 
              key={cert.name}
              className="p-6 border border-border rounded-lg"
            >
              <div className="space-y-4">
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Provider: {cert.provider}</p>
                  <p>Duration: {cert.duration}</p>
                  <p>Level: {cert.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Benefits of BIM
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
          Start Learning
        </h2>
        <p className="text-lg text-muted-foreground">
          Join our BIM integration programs and transform your construction career
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/careers">
            <Button size="lg">
              <Laptop className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <BookOpen className="mr-2 h-5 w-5" />
            View Course Details
          </Button>
        </div>
      </section>
    </div>
  )
} 