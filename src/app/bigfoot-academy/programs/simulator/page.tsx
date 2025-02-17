import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Shield, Clock, Award, Building2, Construction, Truck } from "lucide-react"
import Image from "next/image"

const programs = [
  {
    title: "Crane Simulation",
    description: "Advanced simulator training for various crane types using state-of-the-art virtual reality technology.",
    duration: "Flexible",
    certification: "Competency Assessment",
    features: [
      "Tower crane operations",
      "Mobile crane scenarios",
      "Load control practice",
      "Risk-free learning"
    ],
    icon: <Construction className="h-12 w-12 text-blue-500" />,
    href: "/bigfoot-academy/programs/simulator/crane"
  },
  {
    title: "Heavy Equipment",
    description: "Virtual training programs for heavy construction equipment operation.",
    duration: "Flexible",
    certification: "Skills Verification",
    features: [
      "Excavator simulation",
      "Wheel loader training",
      "Dozer operations",
      "Performance tracking"
    ],
    icon: <Truck className="h-12 w-12 text-green-500" />,
    href: "/bigfoot-academy/programs/simulator/heavy-equipment"
  },
  {
    title: "Operator Assessment",
    description: "Comprehensive evaluation and skills verification using simulator technology.",
    duration: "1-2 days",
    certification: "Performance Report",
    features: [
      "Skills verification",
      "Progress tracking",
      "Injury recovery",
      "Custom scenarios"
    ],
    icon: <Cpu className="h-12 w-12 text-orange-500" />,
    href: "/bigfoot-academy/programs/simulator/assessment"
  }
]

const certifications = [
  "/BCCraneSafety.png",
  "/csa.png",
  "/fulford.png",
  "/ives.png"
]

export default function SimulatorTrainingPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Simulator Training Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          State-of-the-art simulator training for crane and heavy equipment operators, perfect for skill development and assessments
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
          Experience Virtual Training
        </h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          Train safely and effectively with our advanced simulator technology.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Cpu className="mr-2 h-5 w-5" />
              Book Session
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              <Building2 className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 