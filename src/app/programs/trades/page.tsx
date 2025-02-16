import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Hammer, 
  Wrench, 
  Zap, 
  HardHat,
  Award,
  Book,
  Users,
  CheckCircle,
  Building,
  Droplets,
  Flame,
  Paintbrush,
  Cable,
  Cog,
  Boxes,
  Warehouse,
  Ruler,
  Forklift
} from "lucide-react"

const tradesPrograms = [
  {
    title: "Carpentry",
    description: "Master the fundamentals of construction carpentry",
    features: [
      "Residential and commercial construction",
      "Blueprint reading",
      "Safety certifications",
      "Tool mastery"
    ],
    icon: <Hammer className="h-12 w-12 text-orange-500" />,
    href: "/programs/trades/carpentry"
  },
  {
    title: "Electrical",
    description: "Learn electrical systems installation and maintenance",
    features: [
      "Electrical code standards",
      "Wiring and circuits",
      "Safety protocols",
      "Troubleshooting"
    ],
    icon: <Zap className="h-12 w-12 text-yellow-500" />,
    href: "/programs/trades/electrical"
  },
  {
    title: "Plumbing",
    description: "Develop expertise in plumbing systems",
    features: [
      "Pipe fitting",
      "System installation",
      "Code compliance",
      "Maintenance"
    ],
    icon: <Droplets className="h-12 w-12 text-blue-500" />,
    href: "/programs/trades/plumbing"
  },
  {
    title: "Welding",
    description: "Master welding techniques and metal fabrication",
    features: [
      "Multiple welding processes",
      "Metal fabrication",
      "Blueprint interpretation",
      "Quality control"
    ],
    icon: <Flame className="h-12 w-12 text-red-500" />,
    href: "/programs/trades/welding"
  },
  {
    title: "HVAC",
    description: "Specialize in heating, ventilation, and air conditioning",
    features: [
      "System installation",
      "Preventive maintenance",
      "Troubleshooting",
      "Energy efficiency"
    ],
    icon: <Wrench className="h-12 w-12 text-green-500" />,
    href: "/programs/trades/hvac"
  },
  {
    title: "Finishing Trades",
    description: "Expert training in construction finishing work",
    features: [
      "Drywall installation",
      "Painting techniques",
      "Surface preparation",
      "Quality finishing"
    ],
    icon: <Paintbrush className="h-12 w-12 text-purple-500" />,
    href: "/programs/trades/finishing"
  },
  {
    title: "Lineworker",
    description: "Specialize in electrical power line installation and maintenance",
    features: [
      "High voltage systems",
      "Pole climbing techniques",
      "Underground systems",
      "Emergency response"
    ],
    icon: <Cable className="h-12 w-12 text-cyan-500" />,
    href: "/programs/trades/lineworker"
  },
  {
    title: "Ironworker",
    description: "Master structural steel installation and reinforcing",
    features: [
      "Structural steel erection",
      "Reinforcing steel",
      "Rigging and hoisting",
      "Blueprint reading"
    ],
    icon: <Building className="h-12 w-12 text-slate-500" />,
    href: "/programs/trades/ironworker"
  },
  {
    title: "Millwright",
    description: "Expert in industrial machinery installation and maintenance",
    features: [
      "Mechanical systems",
      "Precision alignment",
      "Preventive maintenance",
      "Troubleshooting"
    ],
    icon: <Cog className="h-12 w-12 text-indigo-500" />,
    href: "/programs/trades/millwright"
  },
  {
    title: "Sheet Metal",
    description: "Specialize in metal fabrication and HVAC systems",
    features: [
      "Metal fabrication",
      "HVAC systems",
      "Blueprint reading",
      "Installation techniques"
    ],
    icon: <Ruler className="h-12 w-12 text-zinc-500" />,
    href: "/programs/trades/sheet-metal"
  },
  {
    title: "Glazier",
    description: "Expert installation of glass and architectural metals",
    features: [
      "Glass installation",
      "Curtain wall systems",
      "Storefront installation",
      "Safety protocols"
    ],
    icon: <Boxes className="h-12 w-12 text-sky-500" />,
    href: "/programs/trades/glazier"
  },
  {
    title: "Heavy Duty Mechanic",
    description: "Maintain and repair heavy construction equipment",
    features: [
      "Diesel systems",
      "Hydraulic systems",
      "Electronic diagnostics",
      "Preventive maintenance"
    ],
    icon: <Wrench className="h-12 w-12 text-amber-500" />,
    href: "/programs/trades/heavy-duty-mechanic"
  },
  {
    title: "Boilermaker",
    description: "Specialize in pressure vessel construction and repair",
    features: [
      "Vessel fabrication",
      "Pressure systems",
      "Quality control",
      "Safety standards"
    ],
    icon: <Flame className="h-12 w-12 text-rose-500" />,
    href: "/programs/trades/boilermaker"
  },
  {
    title: "Crane & Hoisting",
    description: "Master the operation of various lifting equipment",
    features: [
      "Mobile crane operation",
      "Tower crane operation",
      "Rigging techniques",
      "Load calculations"
    ],
    icon: <Warehouse className="h-12 w-12 text-emerald-500" />,
    href: "/programs/crane"
  }
]

const certifications = [
  "Red Seal Certification",
  "Safety Training",
  "First Aid Level 1",
  "Fall Protection",
  "WHMIS"
]

export default function TradesPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Traditional Trades Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Master the foundational skills of construction with Red Seal certification opportunities
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tradesPrograms.map((program) => (
            <Link 
              key={program.title}
              href={program.href}
              className="block group"
            >
              <div className="border border-border group-hover:border-foreground/50 rounded-lg p-6 transition-colors h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  {program.icon}
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                  <ul className="w-full space-y-2 text-sm">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Industry Certifications
        </h2>
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert}
              className="flex items-center space-x-3 p-4 border border-border rounded-lg"
            >
              <Award className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <span className="text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Career in Trades
        </h2>
        <p className="text-lg text-muted-foreground">
          Join our comprehensive trades training programs and build your future in construction
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
              <Book className="mr-2 h-5 w-5" />
              Program Guide
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 