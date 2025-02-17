import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Construction, HardHat, Shield, Clock, Award, Building2 } from "lucide-react"

const programs = [
  {
    title: "Stiff Boom Crane Operator",
    description: "Master the operation of stiff boom cranes with comprehensive training leading to Level A certification.",
    duration: "3 weeks",
    certification: "Level A Certification",
    features: [
      "Load chart calculations",
      "Lift planning and execution",
      "Safety protocols",
      "Equipment inspection"
    ],
    icon: <Construction className="h-12 w-12 text-blue-500" />,
    href: "/bigfoot-academy/programs/crane-operator/stiff-boom"
  },
  {
    title: "Folding Boom Crane Operator",
    description: "Specialized training for folding boom crane operations with hands-on experience.",
    duration: "6 days",
    certification: "Level A Certification",
    features: [
      "Boom configuration",
      "Load handling techniques",
      "Site assessment",
      "Safety procedures"
    ],
    icon: <Construction className="h-12 w-12 text-green-500" />,
    href: "/bigfoot-academy/programs/crane-operator/folding-boom"
  },
  {
    title: "Self-Erecting Tower Crane",
    description: "Comprehensive training for self-erecting tower crane operations.",
    duration: "2 weeks",
    certification: "Tower Crane Certification",
    features: [
      "Setup procedures",
      "Operational techniques",
      "Emergency protocols",
      "Maintenance requirements"
    ],
    icon: <Construction className="h-12 w-12 text-orange-500" />,
    href: "/bigfoot-academy/programs/crane-operator/self-erecting"
  }
]

const certifications = [
  "WorkSafeBC Compliant",
  "Red Seal Path Available",
  "Industry Recognized",
  "BC Crane Safety",
  "Fulford Certified"
]

export default function CraneOperatorPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Crane Operator Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Industry-leading crane operator training and certification programs from Bigfoot Academy
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
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <div 
              key={cert}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
            >
              <Award className="h-4 w-4" />
              <span className="text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Career Today
        </h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          Join Bigfoot Academy and get certified in crane operations with industry-leading training programs.
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