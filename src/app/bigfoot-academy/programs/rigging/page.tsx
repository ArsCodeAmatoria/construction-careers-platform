import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Link2, HardHat, Shield, Clock, Award, Building2, Construction } from "lucide-react"
import Image from "next/image"

const programs = [
  {
    title: "Level 1 Rigger Certification",
    description: "Essential rigging and hoisting skills certification for entry-level riggers.",
    duration: "1 day",
    certification: "Level 1 Certificate",
    features: [
      "Basic rigging principles",
      "Load weight calculations",
      "Equipment inspection",
      "Safety procedures"
    ],
    icon: <Link2 className="h-12 w-12 text-blue-500" />,
    href: "/bigfoot-academy/programs/rigging/level-1"
  },
  {
    title: "Level 2 Advanced Rigging",
    description: "Advanced rigging techniques and complex lift planning for experienced riggers.",
    duration: "1 day",
    certification: "Level 2 Certificate",
    features: [
      "Complex lift planning",
      "Multiple crane lifts",
      "Load turning procedures",
      "Critical operations"
    ],
    icon: <Link2 className="h-12 w-12 text-green-500" />,
    href: "/bigfoot-academy/programs/rigging/level-2"
  },
  {
    title: "Civil Rigging Training",
    description: "Specialized rigging training for civil construction projects and infrastructure work.",
    duration: "1 day",
    certification: "Specialized Certificate",
    features: [
      "Concrete element rigging",
      "Steel structure handling",
      "Underground components",
      "Project coordination"
    ],
    icon: <Construction className="h-12 w-12 text-orange-500" />,
    href: "/bigfoot-academy/programs/rigging/civil"
  }
]

const certifications = [
  "/BCCraneSafety.png",
  "/csa.png",
  "/fulford.png",
  "/ives.png"
]

export default function RiggerCertificationsPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Rigger Certification Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Comprehensive rigging certification programs from basic to advanced levels
        </p>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <Link 
              key={program.title}
              href={program.href}
              className="group relative rounded-lg border p-6 hover:border-foreground/50 transition-colors"
            >
              <div className="space-y-4">
                {program.icon}
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4" />
                    <span>{program.certification}</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Shield className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Industry Recognized Certifications
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert}
              className="relative w-32 h-16"
            >
              <Image
                src={cert}
                alt="Certification Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 128px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Advance Your Career
        </h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          Get certified with industry-leading rigging training from Bigfoot Academy.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <HardHat className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              <Building2 className="mr-2 h-5 w-5" />
              Schedule Tour
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 