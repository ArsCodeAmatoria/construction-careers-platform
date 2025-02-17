import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  LineChart, 
  BarChart, 
  Building2, 
  Cpu,
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle 
} from "lucide-react"

export default function EnergyModelingPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Energy Modeling</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master building performance simulation and optimization tools to meet BC Energy Step Code requirements. 
          Learn to analyze and improve building energy efficiency using advanced modeling software.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Building2 className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Building Performance</h3>
          <p className="text-muted-foreground">
            Simulate and analyze building energy performance using industry-standard software.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <BarChart className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Energy Analysis</h3>
          <p className="text-muted-foreground">
            Conduct detailed energy consumption analysis and identify optimization opportunities.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Cpu className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Simulation Tools</h3>
          <p className="text-muted-foreground">
            Master industry-leading energy modeling software and simulation techniques.
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
                <span>Energy modeling fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>BC Energy Step Code compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Building envelope analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>HVAC system optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Performance verification methods</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Program Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Duration: 10 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule: Part-time evening classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Certification: Energy Modeling Professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Energy Modeling program and become an expert in building performance simulation and optimization.
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