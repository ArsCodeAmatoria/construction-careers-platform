import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Recycle, 
  PackageSearch, 
  BarChart3, 
  Factory,
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle 
} from "lucide-react"

export default function WasteManagementPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Construction Waste Management</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master construction waste reduction strategies and circular economy solutions. 
          Learn to implement effective recycling programs and waste tracking systems for sustainable building practices.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Recycle className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Material Recovery</h3>
          <p className="text-muted-foreground">
            Implement effective material sorting and recovery systems on construction sites.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <PackageSearch className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Waste Auditing</h3>
          <p className="text-muted-foreground">
            Learn to conduct waste audits and develop reduction strategies.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Factory className="h-12 w-12 text-orange-500" />
          <h3 className="text-xl font-semibold">Circular Economy</h3>
          <p className="text-muted-foreground">
            Integrate circular economy principles into construction practices.
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
                <span>Waste reduction strategies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Material sorting and recycling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Waste tracking systems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Regulatory compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Circular economy principles</span>
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
                <span>Certification: Waste Management Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Waste Management program and become a leader in sustainable construction practices.
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