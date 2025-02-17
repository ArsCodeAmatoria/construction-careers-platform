import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Truck, 
  Construction,
  HardHat,
  Award,
  Book,
  CheckCircle,
  Shovel
} from "lucide-react"

const equipmentPrograms = [
  {
    title: "Excavator Operation",
    description: "Master excavator operations and earthmoving techniques",
    features: [
      "Machine controls and safety",
      "Trenching and grading",
      "Site preparation",
      "Load management"
    ],
    icon: <Shovel className="h-12 w-12 text-yellow-500" />,
    href: "/programs/heavy-equipment/excavator"
  },
  {
    title: "Bulldozer Operation",
    description: "Expert training in bulldozer operations",
    features: [
      "Ground leveling",
      "Material pushing",
      "Slope work",
      "Grade control"
    ],
    icon: <Construction className="h-12 w-12 text-orange-500" />,
    href: "/programs/heavy-equipment/bulldozer"
  },
  {
    title: "Heavy Hauling",
    description: "Professional training for heavy equipment transport",
    features: [
      "Load securing",
      "Route planning",
      "Safety protocols",
      "Equipment loading"
    ],
    icon: <Truck className="h-12 w-12 text-blue-500" />,
    href: "/programs/heavy-equipment/hauling"
  }
]

const certifications = [
  "Class 1 Driver&apos;s License",
  "Air Brake Endorsement",
  "Heavy Equipment Certification",
  "WHMIS",
  "First Aid Level 1"
]

export default function HeavyEquipmentPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Heavy Equipment Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Professional training for heavy equipment operation and transportation
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {equipmentPrograms.map((program) => (
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
          Required Certifications
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
          Start Your Heavy Equipment Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join our comprehensive heavy equipment operator training programs
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