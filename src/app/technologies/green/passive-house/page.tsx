import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Building2, 
  Sun, 
  Wind, 
  Thermometer,
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle 
} from "lucide-react"

export default function PassiveHousePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Passive House Design</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master ultra-low energy building design principles adapted for BC's climate. 
          Learn advanced techniques in superinsulation, airtightness, and heat recovery systems.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Building2 className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Building Envelope</h3>
          <p className="text-muted-foreground">
            Design and implement high-performance building envelopes with superinsulation.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Wind className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Ventilation Systems</h3>
          <p className="text-muted-foreground">
            Master heat recovery ventilation and air quality management systems.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Sun className="h-12 w-12 text-yellow-500" />
          <h3 className="text-xl font-semibold">Solar Optimization</h3>
          <p className="text-muted-foreground">
            Optimize building orientation and glazing for passive solar gains.
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
                <span>Passive House principles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Thermal bridge-free design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Airtightness strategies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Mechanical systems integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>PHPP energy modeling</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Program Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Duration: 12 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule: Full-time or part-time available</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Certification: Passive House Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Passive House Design program and become a specialist in ultra-low energy buildings.
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