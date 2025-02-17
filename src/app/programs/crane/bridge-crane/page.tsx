import { 
  Construction,
  Clock,
  Shield
} from "lucide-react"

export default function BridgeCranePage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Bridge & Overhead Crane Operator
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Fulford certified training for indoor crane operations
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>16 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Industry Certified</span>
          </div>
        </div>
      </section>

      {/* Rest of sections following same structure */}
    </div>
  )
} 