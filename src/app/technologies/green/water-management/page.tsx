import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Droplets, 
  Waves, 
  Sprout, 
  Gauge, 
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle 
} from "lucide-react"

export default function WaterManagementPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Water Management Systems</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Learn to design and implement innovative water conservation systems for sustainable buildings. 
          From rainwater harvesting to smart irrigation, master the technologies driving water efficiency in construction.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Waves className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Rainwater Harvesting</h3>
          <p className="text-muted-foreground">
            Design and install systems to capture, filter, and reuse rainwater for building operations.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Sprout className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Smart Irrigation</h3>
          <p className="text-muted-foreground">
            Implement intelligent irrigation systems with weather-based controls and soil moisture monitoring.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Gauge className="h-12 w-12 text-cyan-500" />
          <h3 className="text-xl font-semibold">Water Efficiency</h3>
          <p className="text-muted-foreground">
            Optimize building water systems with high-efficiency fixtures and leak detection technology.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Program Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Course Content</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Water conservation principles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Rainwater collection system design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Greywater treatment and reuse</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Smart irrigation controls</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Water quality monitoring</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Program Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Duration: 6 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule: Flexible learning options</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Certification: Water Management Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Water Management program and become an expert in sustainable water solutions for construction.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
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