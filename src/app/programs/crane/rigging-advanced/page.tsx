import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield,
  Clock,
  CheckCircle,
  Container,
  Calculator
} from "lucide-react"

const courseContent = [
  {
    title: "Advanced Safety",
    items: [
      "Critical lift planning",
      "Multi-crane operations",
      "High-risk environments",
      "Emergency procedures"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Complex Operations",
    items: [
      "Advanced load calculations",
      "Multi-point lifting",
      "Engineered lifts",
      "Specialized equipment"
    ],
    icon: <Container className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Technical Mastery",
    items: [
      "Advanced rigging techniques",
      "Lift plan development",
      "Load testing procedures",
      "Documentation requirements"
    ],
    icon: <Calculator className="h-12 w-12 text-green-500" />
  }
]

export default function RiggingAdvancedPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Advanced Rigging
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Fulford certified advanced rigging and lift planning
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>40 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Expert Level</span>
          </div>
        </div>
      </section>

      {/* Course Content section */}
      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Advanced Course Content
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {courseContent.map((module) => (
            <div 
              key={module.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {module.icon}
                <h3 className="text-xl font-semibold">{module.title}</h3>
                <ul className="w-full space-y-2 text-sm">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Details section */}
      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Program Details
        </h2>
        {/* Rest of the sections following the same structure as rigging-1 page */}
      </section>

      {/* Program Highlights section */}
      {/* Call to Action section */}
    </div>
  )
} 