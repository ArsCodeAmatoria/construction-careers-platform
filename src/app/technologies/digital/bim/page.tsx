import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Building2, 
  Users, 
  Database, 
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle 
} from "lucide-react"

export default function BIMPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Building Information Modeling</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master BIM software and digital construction documentation. 
          Learn to create, manage, and coordinate 3D building models for modern construction projects.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Building2 className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">3D Modeling</h3>
          <p className="text-muted-foreground">
            Create detailed building models with industry-standard BIM software.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Users className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Collaboration</h3>
          <p className="text-muted-foreground">
            Coordinate with project teams using integrated BIM platforms.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Database className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Data Management</h3>
          <p className="text-muted-foreground">
            Manage building information and documentation throughout project lifecycle.
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
                <span>BIM software fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>3D modeling techniques</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Clash detection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Project coordination</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Documentation management</span>
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
                <span>Certification: BIM Professional Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our BIM program and become a specialist in digital construction documentation.
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