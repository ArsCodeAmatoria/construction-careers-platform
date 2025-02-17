import Link from "next/link"
import {
  Brain,
  Settings,
  Wifi
} from "lucide-react"

const digitalTechnologies = [
  {
    title: "Artificial Intelligence",
    description: "Harness the power of AI and machine learning to optimize construction processes. Learn predictive analytics for project planning, risk assessment, and resource optimization. Master computer vision for site monitoring and safety compliance.",
    icon: <Brain className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-125" />,
    href: "/technologies/digital/ai"
  },
  {
    title: "Building Information Modeling",
    description: "Transform construction documentation with advanced BIM technology. Create detailed 3D models, perform clash detection, and manage project coordination. Learn industry-standard software and digital twin creation for modern construction.",
    icon: <Building2 className="h-12 w-12 text-blue-500 transition-transform duration-300 group-hover:scale-125" />,
    href: "/technologies/digital/bim"
  },
  {
    title: "Virtual Reality Training",
    description: "Revolutionize construction training with immersive VR experiences. Develop safety simulations, equipment operation modules, and interactive learning scenarios. Create realistic virtual environments for hands-on skill development.",
    icon: <Boxes className="h-12 w-12 text-green-500 transition-transform duration-300 group-hover:scale-125" />,
    href: "/technologies/digital/vr"
  },
  {
    title: "Drone Technology",
    description: "Master aerial surveying and site inspection techniques. Learn drone piloting, photogrammetry, and 3D mapping for construction projects. Implement automated site monitoring and progress tracking using UAV technology.",
    icon: <Plane className="h-12 w-12 text-orange-500 transition-transform duration-300 group-hover:scale-125" />,
    href: "/technologies/digital/drone"
  },
  {
    title: "IoT and Sensors",
    description: "Deploy smart sensor networks for real-time construction monitoring. Implement IoT solutions for equipment tracking, environmental monitoring, and predictive maintenance. Analyze sensor data for project optimization and safety.",
    icon: <Wifi className="h-12 w-12 text-cyan-500 transition-transform duration-300 group-hover:scale-125" />,
    href: "/technologies/digital/iot"
  },
  {
    title: "Robotics and Automation",
    description: "Lead the automation revolution in construction. Program and operate robotic systems for construction tasks, implement automated quality control, and manage smart machinery. Master the integration of robotics with BIM and IoT systems.",
    icon: <Settings className="h-12 w-12 text-red-500 transition-transform duration-300 group-hover:scale-125" />,
    href: "/technologies/digital/robotics"
  }
]

export default function DigitalTechnologiesPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Digital Construction Technologies
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Explore cutting-edge digital technologies transforming the construction industry. 
          From AI to robotics, master the tools shaping the future of building in British Columbia.
        </p>
      </section>

      {/* Technologies Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4 place-items-center">
        {digitalTechnologies.map((tech) => (
          <Link 
            key={tech.title} 
            href={tech.href}
            className="group w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {tech.icon}
              <h3 className="mt-4 text-xl font-semibold">{tech.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
} 