import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Truck, HardHat, Shield, Clock, Award, Building2, Forklift, Cog } from "lucide-react"

const programs = [
  {
    title: "Forklift Training",
    description: "IVES certified forklift operator training with comprehensive safety and operational instruction.",
    duration: "1-2 days",
    certification: "IVES Certification",
    features: [
      "Pre-operation inspection",
      "Load handling techniques",
      "Safety procedures",
      "Workplace hazards"
    ],
    icon: <Forklift className="h-12 w-12 text-blue-500" />,
    href: "/bigfoot-academy/programs/equipment/forklift"
  },
  {
    title: "Telehandler Operation",
    description: "Specialized training for telehandler and variable reach equipment operation.",
    duration: "2 days",
    certification: "IVES Certification",
    features: [
      "Load charts and capacity",
      "Attachment operations",
      "Terrain assessment",
      "Safe lifting procedures"
    ],
    icon: <Truck className="h-12 w-12 text-green-500" />,
    href: "/bigfoot-academy/programs/equipment/telehandler"
  },
  {
    title: "Aerial Work Platforms",
    description: "Comprehensive training for scissor lifts and boom-supported platforms.",
    duration: "1 day",
    certification: "IVES Certification",
    features: [
      "Fall protection",
      "Platform safety",
      "Emergency procedures",
      "Setup and stabilization"
    ],
    icon: <Cog className="h-12 w-12 text-orange-500" />,
    href: "/bigfoot-academy/programs/equipment/aerial"
  }
]

const certifications = [
  "IVES Certified",
  "WorkSafeBC Compliant",
  "CSA Standards",
  "Industry Recognized",
  "Manufacturer Approved"
]

export default function EquipmentTrainingPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Equipment Training Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          IVES certified training for construction equipment, delivered at your location by experienced instructors
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
          Get Certified Today
        </h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          Join Bigfoot Academy's equipment training programs and become a certified operator.
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
              Schedule Training
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 