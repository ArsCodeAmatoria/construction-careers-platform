import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Plane, 
  Camera, 
  Map, 
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle,
  Scan
} from "lucide-react"

export default function DroneTechnologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Drone Technology</h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Master drone operations for construction site surveys and inspections. 
          Learn advanced aerial imaging, mapping, and data collection techniques.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg space-y-3">
          <Plane className="h-12 w-12 text-blue-500" />
          <h3 className="text-xl font-semibold">Flight Operations</h3>
          <p className="text-muted-foreground">
            Master drone piloting and safety protocols for construction sites.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Camera className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-semibold">Aerial Imaging</h3>
          <p className="text-muted-foreground">
            Capture high-quality aerial photos and videos for site documentation.
          </p>
        </div>
        <div className="p-6 border rounded-lg space-y-3">
          <Map className="h-12 w-12 text-purple-500" />
          <h3 className="text-xl font-semibold">Site Mapping</h3>
          <p className="text-muted-foreground">
            Create detailed topographic maps and 3D site models using drone data.
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
                <span>Drone flight fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Aerial photography techniques</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Mapping and surveying</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Data processing and analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Safety and regulations</span>
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
                <span>Schedule: Weekend classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Certification: Construction Drone Operator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Join our Drone Technology program and master aerial solutions for construction.
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