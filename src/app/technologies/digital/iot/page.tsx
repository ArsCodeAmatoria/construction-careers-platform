import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Wifi, 
  Activity, 
  BarChart, 
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle,
  Smartphone
} from "lucide-react"

export default function IoTPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">IoT and Sensors</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master smart sensor implementation and IoT solutions for construction monitoring. 
          Learn to deploy and manage connected devices for real-time project insights.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Wifi className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Connected Systems</h3>
          <p className="text-muted-foreground">
            Implement IoT networks for comprehensive site monitoring.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Activity className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Real-time Monitoring</h3>
          <p className="text-muted-foreground">
            Track environmental conditions and equipment performance live.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <BarChart className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Data Analytics</h3>
          <p className="text-muted-foreground">
            Analyze sensor data for predictive maintenance and optimization.
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
                <span>IoT fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Sensor deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Network configuration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Data collection and analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>System maintenance</span>
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
                <span>Schedule: Evening classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Certification: IoT Systems Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our IoT and Sensors program and lead the future of smart construction monitoring.
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