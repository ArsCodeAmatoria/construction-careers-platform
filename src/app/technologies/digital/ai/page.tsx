import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Brain, 
  Cpu,
  LineChart, 
  Search,
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle 
} from "lucide-react"

export default function ArtificialIntelligencePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Artificial Intelligence in Construction</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master the implementation of AI technologies in construction projects. 
          Learn how machine learning and predictive analytics are transforming project planning, safety, and efficiency.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Brain className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Machine Learning</h3>
          <p className="text-muted-foreground">
            Apply ML algorithms for project optimization and risk assessment.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Cpu className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Automation</h3>
          <p className="text-muted-foreground">
            Implement AI-driven automation for construction processes and scheduling.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <LineChart className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Predictive Analytics</h3>
          <p className="text-muted-foreground">
            Use data-driven insights for project planning and resource allocation.
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
                <span>AI fundamentals for construction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Machine learning applications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Predictive maintenance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Safety monitoring systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Project optimization tools</span>
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
                <span>Certification: AI in Construction Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our AI in Construction program and lead the digital transformation of the industry.
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