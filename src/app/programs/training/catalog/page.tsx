import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  Users, 
  Briefcase, 
  HardHat, 
  Construction,
  Wrench,
  Truck
} from "lucide-react"

const trainingCatalog = [
  {
    category: "Crane Operation",
    programs: [
      {
        title: "Stiff Boom Crane Operator",
        duration: "3 weeks",
        location: "BC Lower Mainland",
        startDate: "Monthly intake",
        description: "Comprehensive training combining theory and practical experience to prepare for Level A assessment. Includes hands-on crane operation and safety protocols.",
        certification: "Level A Certification",
        icon: <Construction className="h-12 w-12 text-blue-500" />
      },
      {
        title: "Folding Boom Crane Operator",
        duration: "6 days",
        location: "BC Lower Mainland",
        startDate: "Bi-weekly intake",
        description: "Complete training for safe and competent operation of folding boom cranes. Combines classroom learning with practical experience.",
        certification: "Level A Certification",
        icon: <Construction className="h-12 w-12 text-green-500" />
      },
      {
        title: "Self-Erecting Tower Crane",
        duration: "2 weeks",
        location: "BC Lower Mainland",
        startDate: "Monthly intake",
        description: "Specialized training for self-erecting tower crane operations, taught by accomplished instructors with extensive industry experience.",
        certification: "Tower Crane Certification",
        icon: <Construction className="h-12 w-12 text-orange-500" />
      }
    ]
  },
  {
    category: "Rigging Certifications",
    programs: [
      {
        title: "Level 1 Rigger Certification",
        duration: "5 days",
        location: "BC Lower Mainland",
        startDate: "Weekly intake",
        description: "Essential rigging skills including load calculation, center of gravity determination, and crane lift direction.",
        certification: "Level 1 Rigger Certificate",
        icon: <Wrench className="h-12 w-12 text-red-500" />
      },
      {
        title: "Level 2 Advanced Rigging",
        duration: "5 days",
        location: "BC Lower Mainland",
        startDate: "Monthly intake",
        description: "Advanced rigging techniques for experienced riggers and supervisors. Includes complex lift planning and risk assessment.",
        certification: "Level 2 Advanced Rigger Certificate",
        icon: <Wrench className="h-12 w-12 text-purple-500" />
      },
      {
        title: "Load Turning and Drifting",
        duration: "3 days",
        location: "BC Lower Mainland",
        startDate: "Bi-weekly intake",
        description: "Specialized training in mechanical advantage, load rotation, and confined space movement techniques.",
        certification: "Specialized Rigging Certificate",
        icon: <Construction className="h-12 w-12 text-yellow-500" />
      }
    ]
  },
  {
    category: "Equipment Operation",
    programs: [
      {
        title: "Construction Hoist Operator",
        duration: "3 days",
        location: "BC Lower Mainland",
        startDate: "Weekly intake",
        description: "Comprehensive training for construction hoist operations with focus on safety and efficiency.",
        certification: "Hoist Operator Certificate",
        icon: <Truck className="h-12 w-12 text-blue-500" />
      },
      {
        title: "Forklift Operator",
        duration: "2 days",
        location: "On-site available",
        startDate: "Flexible dates",
        description: "IVES certified forklift operation training covering safety standards and operational best practices.",
        certification: "IVES Forklift Certificate",
        icon: <Truck className="h-12 w-12 text-green-500" />
      },
      {
        title: "Mobile Elevated Work Platform",
        duration: "1 day",
        location: "On-site available",
        startDate: "Flexible dates",
        description: "Essential training for safe operation of scissor lifts and boom lifts.",
        certification: "MEWP Operator Certificate",
        icon: <Construction className="h-12 w-12 text-orange-500" />
      }
    ]
  }
]

export default function TrainingCatalogPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Training Catalog
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Industry-leading construction training programs certified by recognized authorities
        </p>
      </section>

      {trainingCatalog.map((category) => (
        <section key={category.category} className="w-full max-w-7xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">{category.category}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.programs.map((program) => (
              <div 
                key={program.title}
                className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  {program.icon}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>
                  <div className="w-full space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{program.location}</span>
                    </div>
                    <div className="text-sm font-medium text-blue-500">
                      {program.certification}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {program.startDate}
                    </div>
                  </div>
                  <Button className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
} 