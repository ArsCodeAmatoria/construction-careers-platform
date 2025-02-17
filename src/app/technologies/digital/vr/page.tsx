import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Boxes, 
  Headphones, 
  Users, 
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle 
} from "lucide-react"

export default function VirtualRealityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Virtual Reality Training</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master virtual reality technology for construction safety and training. 
          Learn to create and implement immersive VR experiences for effective skill development.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Headphones className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Immersive Learning</h3>
          <p className="text-muted-foreground">
            Create realistic VR training scenarios for hands-on learning.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Users className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Safety Training</h3>
          <p className="text-muted-foreground">
            Develop VR simulations for safety protocols and hazard recognition.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Boxes className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Equipment Operation</h3>
          <p className="text-muted-foreground">
            Virtual training for heavy equipment and machinery operation.
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
                <span>VR development fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Safety simulation design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Interactive scenario creation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Equipment training modules</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Performance tracking systems</span>
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
                <span>Certification: VR Training Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Virtual Reality Training program and revolutionize construction safety education.
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