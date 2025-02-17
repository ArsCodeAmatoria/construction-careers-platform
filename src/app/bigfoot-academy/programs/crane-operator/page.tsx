import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Construction, HardHat, Shield, Clock, Award, Building2 } from "lucide-react"
import Image from "next/image"

const programs = [
  {
    title: "Stiff Boom Crane Operator",
    description: "Master the operation of stiff boom cranes with comprehensive training leading to Level A certification.",
    duration: "2 weeks",
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
    description: "Complete training program for folding boom crane operations and certification.",
    duration: "1-5 days",
    certification: "Level B Certification",
    features: [
      "Boom assembly and setup",
      "Load control techniques",
      "Site assessment",
      "Safety procedures"
    ],
    icon: <Construction className="h-12 w-12 text-green-500" />,
    href: "/bigfoot-academy/programs/crane-operator/folding-boom"
  },
  {
    title: "Self Erecting Tower Crane Operator",
    description: "Specialized training for self-erecting tower crane operations.",
    duration: "1-2 weeks",
    certification: "Operator Certificate",
    features: [
      "Setup and dismantling",
      "Load handling",
      "Weather considerations",
      "Emergency procedures"
    ],
    icon: <Construction className="h-12 w-12 text-orange-500" />,
    href: "/bigfoot-academy/programs/crane-operator/self-erecting"
  }
]

const certifications = [
  "/BCCraneSafety.png",
  "/csa.png",
  "/fulford.png",
  "/ives.png"
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