import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Leaf, 
  Sun, 
  Wind, 
  Droplets,
  LineChart,
  Building2,
  Recycle,
  Factory,
  Award
} from "lucide-react"

const greenTechnologies = [
  {
    title: "Solar Integration",
    description: "Learn to integrate solar power systems into construction projects, including PV installation and energy storage solutions.",
    icon: <Sun className="h-12 w-12 text-yellow-500" />,
    href: "/technologies/green/solar"
  },
  {
    title: "Heat Pump Technology",
    description: "Advanced heat pump systems optimized for BC's climate zones, including air-source and ground-source solutions.",
    icon: <Wind className="h-12 w-12 text-blue-500" />,
    href: "/technologies/green/heat-pump"
  },
  {
    title: "Water Management",
    description: "Innovative water conservation and management systems for sustainable buildings, from rainwater harvesting to smart irrigation.",
    icon: <Droplets className="h-12 w-12 text-cyan-500" />,
    href: "/technologies/green/water-management"
  },
  {
    title: "Energy Modeling",
    description: "Master building performance simulation and optimization tools to meet BC Energy Step Code requirements.",
    icon: <LineChart className="h-12 w-12 text-green-500" />,
    href: "/technologies/green/energy-modeling"
  },
  {
    title: "Passive House Design",
    description: "Learn ultra-low energy building design principles adapted for BC's climate, including superinsulation and heat recovery.",
    icon: <Building2 className="h-12 w-12 text-purple-500" />,
    href: "/technologies/green/passive-house"
  },
  {
    title: "Waste Management",
    description: "Learn construction waste reduction strategies, recycling programs, and circular economy solutions for sustainable building practices.",
    icon: <Recycle className="h-12 w-12 text-orange-500" />,
    href: "/technologies/green/waste-management"
  }
]

const bcPrograms = [
  {
    title: "Clean BC Better Buildings",
    description: "Provincial incentives and support for energy-efficient construction.",
    icon: <Building2 className="h-12 w-12 text-green-500" />
  },
  {
    title: "Zero Emissions Buildings",
    description: "Vancouver's initiative for carbon-neutral construction by 2030.",
    icon: <Factory className="h-12 w-12 text-blue-500" />
  },
  {
    title: "BC Energy Step Code",
    description: "Progressive energy efficiency standards for new buildings.",
    icon: <Award className="h-12 w-12 text-yellow-500" />
  }
]

export default function GreenTechnologiesPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Green Building Technologies
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Discover sustainable construction technologies shaping BC's green building future. 
          From renewable energy to waste reduction, explore innovations driving environmental performance.
        </p>
      </section>

      {/* Technologies Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4 place-items-center">
        {greenTechnologies.map((tech) => (
          <Link 
            key={tech.title} 
            href={tech.href}
            className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {tech.icon}
              <h3 className="mt-4 text-xl font-semibold">{tech.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* BC Programs */}
      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          BC Green Building Programs
        </h2>
        <div className="grid gap-6 md:grid-cols-3 place-items-center">
          {bcPrograms.map((program) => (
            <div 
              key={program.title}
              className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors flex flex-col items-center text-center"
            >
              {program.icon}
              <h3 className="mt-4 text-lg font-semibold">{program.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Join BC's Green Building Revolution
        </h2>
        <p className="text-lg text-muted-foreground">
          Explore careers in sustainable construction and help build a cleaner future for British Columbia.
        </p>
        <Link href="/careers?category=sustainability">
          <Button size="lg">
            <Leaf className="mr-2 h-5 w-5" />
            View Green Building Careers
          </Button>
        </Link>
      </section>
    </div>
  )
} 