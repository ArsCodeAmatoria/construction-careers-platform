import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sun, Battery, LineChart, Shield, Clock, Calendar, CheckCircle } from "lucide-react"

export default function SolarIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Solar Integration in Construction</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master the installation and integration of solar power systems in modern construction projects. 
          Learn about photovoltaic systems, energy storage, and smart grid integration.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Sun className="h-12 w-12 text-yellow-500" />
          <h3 className="text-xl font-semibold">Solar PV Systems</h3>
          <p className="text-muted-foreground">
            Learn to design and install photovoltaic systems for residential and commercial buildings.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Battery className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Energy Storage</h3>
          <p className="text-muted-foreground">
            Understand battery systems, backup power, and energy management solutions.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <LineChart className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Performance Monitoring</h3>
          <p className="text-muted-foreground">
            Master the tools and techniques for monitoring and optimizing solar system performance.
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
                <span>Solar PV system design principles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Installation techniques and safety</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Energy storage systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Grid integration and smart controls</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>System maintenance and troubleshooting</span>
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
                <span>Certification: Solar PV Installation Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Solar Integration program and become part of the renewable energy revolution in construction.
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