import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Construction,
  Truck, 
  Anchor,
  Ship,
  Warehouse
} from "lucide-react"

const cranePrograms = [
  {
    title: "Tower Crane",
    description: "Master the operation of tower cranes for high-rise construction. Get Red Seal certified through our comprehensive 16-week program covering safety, operations, and maintenance.",
    duration: "16 weeks",
    certification: "Red Seal",
    features: [
      "Load charts and calculations",
      "Safety protocols",
      "Equipment inspection",
      "High-rise operations"
    ],
    icon: <Construction className="h-12 w-12 text-blue-500" />,
    href: "/programs/crane/tower-crane"
  },
  {
    title: "Mobile Crane",
    description: "Learn to operate mobile cranes with expert instruction. Program includes Class 3 license training and covers load charts, rigging, and safety protocols.",
    duration: "12 weeks",
    certification: "Class 3 License included",
    features: [
      "Site setup and planning",
      "Load management",
      "Safety procedures",
      "Equipment maintenance"
    ],
    icon: <Truck className="h-12 w-12 text-orange-500" />,
    href: "/programs/crane/mobile-crane"
  },
  {
    title: "Boom Truck Operator (Unlimited)",
    description: "Operate truck-mounted folding boom cranes with capacity over 22 tonnes. Learn lifting techniques, site planning, and safety procedures.",
    duration: "7 weeks",
    certification: "BC Crane Safety",
    features: [
      "Lifting techniques",
      "Site planning",
      "Safety procedures",
      "Load capacity management"
    ],
    icon: <Construction className="h-12 w-12 text-green-500" />,
    href: "/programs/crane/boom-truck"
  },
  {
    title: "Marine Pedestal Crane",
    description: "Specialized training for ship-mounted crane operations. Master folding boom, stiff boom, and hydraulic marine crane operations for maritime work.",
    duration: "8 hours + assessment",
    certification: "Marine Crane Operator Certificate",
    features: [
      "Maritime operations",
      "Ship-mounted systems",
      "Hydraulic controls",
      "Maritime safety"
    ],
    icon: <Ship className="h-12 w-12 text-cyan-500" />,
    href: "/programs/crane/marine"
  },
  {
    title: "Dock Crane",
    description: "Learn to operate dock-mounted cranes for small craft harbors. Covers hydraulic cranes, load charts, and pre-operation inspections.",
    duration: "Self-paced",
    certification: "Level 1 & 2 Available",
    features: [
      "Harbor operations",
      "Load charts",
      "Equipment inspection",
      "Safety protocols"
    ],
    icon: <Anchor className="h-12 w-12 text-purple-500" />,
    href: "/programs/crane/dock"
  },
  {
    title: "Bridge/Overhead Crane",
    description: "Comprehensive training in overhead crane operations. Learn safe lifting practices, maintenance checks, and operational procedures.",
    duration: "2 weeks",
    certification: "Fulford Certified",
    features: [
      "Overhead operations",
      "Safety practices",
      "Maintenance procedures",
      "Load management"
    ],
    icon: <Warehouse className="h-12 w-12 text-red-500" />,
    href: "/programs/crane/overhead"
  },
  {
    title: "Rigging Level 1",
    description: "Essential rigging and hoisting skills for construction projects. Learn fundamental techniques for safe and efficient load handling.",
    duration: "1 week",
    certification: "Bigfoot Certified",
    features: [
      "Rigging techniques",
      "Load securement",
      "Signal operations",
      "Safety standards"
    ],
    icon: <Link2 className="h-12 w-12 text-emerald-500" />,
    href: "/programs/crane/rigging-1"
  },
  {
    title: "Advanced Rigging",
    description: "Master complex rigging operations and specialized lifting techniques. Advanced certification for experienced riggers.",
    duration: "2 weeks",
    certification: "Advanced Rigging Certificate",
    features: [
      "Complex lift planning",
      "Advanced calculations",
      "Multiple crane operations",
      "Critical lift management"
    ],
    icon: <Link2 className="h-12 w-12 text-indigo-500" />,
    href: "/programs/crane/rigging-advanced"
  }
]

const certifications = [
  "WorkSafeBC Certification",
  "IUOE Certification",
  "Red Seal Endorsement",
  "First Aid Level 1",
  "Fall Protection"
]

export default function CraneProgramsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Crane Operation Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Industry-leading crane operator training and certification programs
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {cranePrograms.map((program) => (
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
          Start Your Crane Operation Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join our comprehensive crane operator training programs
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