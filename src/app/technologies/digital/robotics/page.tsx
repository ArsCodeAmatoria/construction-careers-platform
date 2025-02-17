import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Cog, 
  Settings,
  Cpu,
  Wrench, 
  Shield, 
  Clock, 
  Calendar,
  CheckCircle
} from "lucide-react"

export default function RoboticsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Robotics in Construction</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master the implementation and operation of robotic systems in construction. 
          Learn about automated equipment, remote operation, and smart machinery integration.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Cpu className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Automated Systems</h3>
          <p className="text-muted-foreground">
            Operate and maintain automated construction equipment and systems.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Settings className="h-12 w-12 text-orange-500" />
          <h3 className="text-xl font-semibold">Robotic Integration</h3>
          <p className="text-muted-foreground">
            Implement robotic solutions for construction tasks and processes.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Cog className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Smart Machinery</h3>
          <p className="text-muted-foreground">
            Program and maintain intelligent construction machinery.
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
                <span>Robotic system fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Automated equipment operation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Programming and control systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Safety and maintenance protocols</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Integration with BIM and IoT</span>
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
                <span>Certification: Construction Robotics Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Construction Robotics program and become a leader in automated construction technology.
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