import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Warehouse, HardHat, Shield, Clock, Award, Building2, Construction } from "lucide-react"

const programs = [
  {
    title: "Construction Hoist Operation",
    description: "Comprehensive training for safe and efficient operation of construction hoists and elevators.",
    duration: "3 days",
    certification: "Operator Certificate",
    features: [
      "Pre-operational checks",
      "Load handling procedures",
      "Emergency protocols",
      "Safety regulations"
    ],
    icon: <Warehouse className="h-12 w-12 text-blue-500" />,
    href: "/bigfoot-academy/programs/hoist/operation"
  },
  {
    title: "Maintenance & Inspection",
    description: "Specialized training for hoist maintenance and daily inspection procedures.",
    duration: "2 days",
    certification: "Inspection Certificate",
    features: [
      "Equipment inspection",
      "Maintenance procedures",
      "Troubleshooting",
      "Documentation"
    ],
    icon: <Construction className="h-12 w-12 text-green-500" />,
    href: "/bigfoot-academy/programs/hoist/maintenance"
  },
  {
    title: "Advanced Operations",
    description: "Advanced training for complex hoist operations and special circumstances.",
    duration: "2 days",
    certification: "Advanced Certificate",
    features: [
      "Multiple floor operations",
      "Night operations",
      "Weather conditions",
      "Emergency procedures"
    ],
    icon: <Warehouse className="h-12 w-12 text-orange-500" />,
    href: "/bigfoot-academy/programs/hoist/advanced"
  }
]

const certifications = [
  "WorkSafeBC Compliant",
  "Industry Certified",
  "Safety Standards",
  "Operator Qualified",
  "Maintenance Certified"
]

export default function HoistOperatorPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Hoist Operator Training
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Comprehensive construction hoist operator training programs with industry certification
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
          Industry Certifications
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
          Start Your Training
        </h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          Join our comprehensive hoist operator training program and become certified.
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
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 