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
  Factory
} from "lucide-react"

const greenTechnologies = [
  {
    title: "Solar Integration",
    description: "Building-integrated photovoltaics and solar thermal systems for BC construction projects.",
    icon: <Sun className="h-12 w-12 text-yellow-500" />,
    features: [
      "Rooftop Solar Arrays",
      "Solar Thermal Systems",
      "Energy Storage Integration",
      "Smart Grid Connection"
    ],
    bcInitiatives: "Clean BC Better Buildings program supports solar adoption in commercial and residential construction."
  },
  {
    title: "Heat Pump Technology",
    description: "Advanced heat pump systems optimized for BC's climate zones.",
    icon: <Wind className="h-12 w-12 text-blue-500" />,
    features: [
      "Air-Source Heat Pumps",
      "Ground-Source Systems",
      "District Energy Integration",
      "Cold Climate Optimization"
    ],
    bcInitiatives: "BC Hydro offers incentives for heat pump installation in new construction."
  },
  {
    title: "Water Management",
    description: "Innovative water conservation and management systems for sustainable buildings.",
    icon: <Droplets className="h-12 w-12 text-cyan-500" />,
    features: [
      "Rainwater Harvesting",
      "Greywater Systems",
      "Smart Irrigation",
      "Water-Efficient Fixtures"
    ],
    bcInitiatives: "Metro Vancouver's Water Conservation Guidelines for new construction."
  },
  {
    title: "Energy Modeling",
    description: "Advanced building performance simulation and optimization tools.",
    icon: <LineChart className="h-12 w-12 text-green-500" />,
    features: [
      "Energy Performance Simulation",
      "Passive Design Analysis",
      "Carbon Footprint Tracking",
      "ROI Calculations"
    ],
    bcInitiatives: "BC Energy Step Code requirements for energy modeling in new buildings."
  },
  {
    title: "Passive House Design",
    description: "Ultra-low energy building design principles adapted for BC's climate.",
    icon: <Building2 className="h-12 w-12 text-purple-500" />,
    features: [
      "Superinsulation",
      "Airtight Construction",
      "Heat Recovery Ventilation",
      "Solar Orientation"
    ],
    bcInitiatives: "Vancouver's Zero Emissions Building Plan promotes Passive House standards."
  },
  {
    title: "Waste Management",
    description: "Construction waste reduction and circular economy solutions.",
    icon: <Recycle className="h-12 w-12 text-orange-500" />,
    features: [
      "Material Recovery",
      "Recycling Programs",
      "Waste Tracking",
      "Circular Economy"
    ],
    bcInitiatives: "Metro Vancouver's Construction Waste Diversion requirements."
  }
]

const bcPrograms = [
  {
    title: "Clean BC Better Buildings",
    description: "Provincial incentives and support for green building technologies.",
    icon: <Factory className="h-8 w-8 text-green-500" />
  },
  {
    title: "BC Energy Step Code",
    description: "Progressive energy efficiency requirements for new construction.",
    icon: <LineChart className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Zero Carbon Building Program",
    description: "Initiatives supporting carbon-neutral construction in BC.",
    icon: <Leaf className="h-8 w-8 text-green-500" />
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
          <div 
            key={tech.title}
            className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {tech.icon}
              <h3 className="mt-4 text-xl font-semibold">{tech.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
              <ul className="mt-4 space-y-2 text-sm w-full">
                {tech.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center">
                    <Leaf className="h-4 w-4 mr-2 text-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border w-full">
                <p className="text-sm text-muted-foreground">{tech.bcInitiatives}</p>
              </div>
            </div>
          </div>
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