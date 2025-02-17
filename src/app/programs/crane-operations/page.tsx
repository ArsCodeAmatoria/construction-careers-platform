import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Construction,
  Truck, 
  Anchor,
  Ship,
  Warehouse,
  Clock,
  Award,
  HardHat,
  Book
} from "lucide-react"

const cranePrograms = [
  {
    title: "Tower Crane Operator",
    description: "Master the operation of tower cranes for high-rise construction. Get Red Seal certified through our comprehensive 16-week program covering safety, operations, and maintenance.",
    duration: "16 weeks",
    certification: "Red Seal",
    icon: <Construction className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Mobile Crane Operator",
    description: "Learn to operate mobile cranes with expert instruction. Program includes Class 3 license training and covers load charts, rigging, and safety protocols.",
    duration: "12 weeks",
    certification: "Class 3 License included",
    icon: <Truck className="h-12 w-12 text-green-500" />
  },
  {
    title: "Boom Truck Operator (Unlimited)",
    description: "Operate truck-mounted folding boom cranes with capacity over 22 tonnes. Learn lifting techniques, site planning, and safety procedures.",
    duration: "7 weeks",
    certification: "BC Crane Safety",
    icon: <Construction className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Marine Pedestal Crane",
    description: "Specialized training for ship-mounted crane operations. Master folding boom, stiff boom, and hydraulic marine crane operations for maritime work.",
    duration: "8 hours + assessment",
    certification: "Marine Crane Operator Certificate",
    icon: <Ship className="h-12 w-12 text-cyan-500" />
  },
  {
    title: "Dock Crane Operator",
    description: "Learn to operate dock-mounted cranes for small craft harbors. Covers hydraulic cranes, load charts, and pre-operation inspections.",
    duration: "Self-paced",
    certification: "Level 1 & 2 Available",
    icon: <Anchor className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Bridge/Overhead Crane",
    description: "Comprehensive training in overhead crane operations. Learn safe lifting practices, maintenance checks, and operational procedures.",
    duration: "2 weeks",
    certification: "Fulford Certified",
    icon: <Warehouse className="h-12 w-12 text-red-500" />
  }
]

export default function CraneOperationsPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Crane Operation Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Master the skills needed to operate various types of cranes safely and efficiently. 
          All programs meet WorkSafeBC requirements and industry standards.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4">
        {cranePrograms.map((program) => (
          <div 
            key={program.title}
            className="group border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {program.icon}
              <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {program.description}
              </p>
              <div className="mt-4 space-y-2 w-full">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>{program.certification}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our industry-leading crane operation programs and build a rewarding career in construction.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <HardHat className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
          </Link>
          <Link href="/programs">
            <Button variant="outline" size="lg">
              View All Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 