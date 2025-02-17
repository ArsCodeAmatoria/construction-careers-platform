import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wind, Thermometer, Wrench, Shield, Clock, Calendar, CheckCircle, Building2 } from "lucide-react"

export default function HeatPumpPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Heat Pump Technology</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master the installation and maintenance of advanced heat pump systems optimized for BC's climate zones. 
          Learn about air-source and ground-source solutions for efficient building heating and cooling.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Wind className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Air-Source Systems</h3>
          <p className="text-muted-foreground">
            Design and install air-source heat pumps for residential and commercial applications.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Building2 className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Ground-Source Systems</h3>
          <p className="text-muted-foreground">
            Implement geothermal heat pump solutions for optimal energy efficiency.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Thermometer className="h-12 w-12 text-red-500" />
          <h3 className="text-xl font-semibold">Climate Optimization</h3>
          <p className="text-muted-foreground">
            Optimize heat pump performance for BC's diverse climate zones.
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
                <span>Heat pump system design principles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Installation and commissioning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Performance optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Maintenance and troubleshooting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Integration with building systems</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Program Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Duration: 8 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule: Full-time or part-time available</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Certification: Heat Pump Installation & Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Heat Pump Technology program and become a specialist in sustainable heating and cooling solutions.
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