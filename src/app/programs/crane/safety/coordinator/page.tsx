import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield,
  FileCheck,
  Briefcase,
  Users,
  Book,
  HardHat,
  CheckSquare,
  Target,
  FileText
} from "lucide-react"

// Remove NextPage type import and use proper App Router typing
export default function SafetyCoordinatorPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Safety Coordinator
        </h1>
        {/* Rest of your component */}
      </section>
      {/* Other sections */}
    </div>
  )
} 