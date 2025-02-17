import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  LineChart, 
  Calendar, 
  FileText, 
  Users, 
  Shield, 
  Clock,
  CheckCircle,
  BarChart 
} from "lucide-react"

export default function DigitalProjectManagementPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Digital Project Management</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master modern tools and techniques for efficient project delivery. 
          Learn to manage construction projects using digital platforms and data-driven approaches.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Calendar className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Project Planning</h3>
          <p className="text-muted-foreground">
            Master digital tools for scheduling, resource allocation, and timeline management.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <FileText className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Document Control</h3>
          <p className="text-muted-foreground">
            Implement digital systems for document management and version control.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <BarChart className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Performance Analytics</h3>
          <p className="text-muted-foreground">
            Track and analyze project performance using data-driven insights.
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
                <span>Digital project planning tools</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Resource management systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Document control platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Performance tracking tools</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Team collaboration software</span>
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
                <span>Schedule: Part-time evening classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Certification: Digital Construction Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Digital Project Management program and lead the future of construction project delivery.
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