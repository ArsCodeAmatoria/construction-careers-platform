import { 
  Building2,
  Brain,
  Settings,
  Cpu,
  Wifi,
  Boxes 
} from 'lucide-react'

export default function DigitalPage() {
  const digitalTechnologies = [
    {
      title: "BIM Integration",
      description: "Implement Building Information Modeling for improved project coordination and visualization.",
      icon: <Building2 className="h-12 w-12 text-red-500 transition-transform duration-300 group-hover:scale-125" />,
      href: "/digital-construction/bim"
    },
    {
      title: "AI in Construction",
      description: "Harness the power of AI and machine learning to optimize construction processes.",
      icon: <Brain className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-125" />,
      href: "/digital-construction/ai"
    },
    {
      title: "Robotics & Automation",
      description: "Lead the automation revolution in construction. Program and operate robotic systems for construction tasks, implement automated quality control, and manage smart machinery. Master the integration of robotics with BIM and IoT systems.",
      icon: <Settings className="h-12 w-12 text-orange-500 transition-transform duration-300 group-hover:scale-125" />,
      href: "/digital-construction/robotics"
    },
    {
      title: "Digital Project Management",
      description: "Master modern tools and techniques for efficient project delivery. Learn to manage construction projects using digital platforms and data-driven approaches for optimal results and team coordination.",
      icon: <Cpu className="h-12 w-12 text-green-500 transition-transform duration-300 group-hover:scale-125" />,
      href: "/digital-construction/project-management"
    },
    {
      title: "IoT & Sensors",
      description: "Deploy smart sensor networks for real-time construction monitoring. Implement IoT solutions for equipment tracking, environmental monitoring, and predictive maintenance. Analyze sensor data for project optimization and safety.",
      icon: <Wifi className="h-12 w-12 text-cyan-500 transition-transform duration-300 group-hover:scale-125" />,
      href: "/digital-construction/iot"
    },
    {
      title: "Virtual Training",
      description: "Revolutionize construction training with immersive VR experiences. Develop safety simulations, equipment operation modules, and interactive learning scenarios. Create realistic virtual environments for hands-on skill development.",
      icon: <Boxes className="h-12 w-12 text-red-500 transition-transform duration-300 group-hover:scale-125" />,
      href: "/digital-construction/vr"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {digitalTechnologies.map((tech) => (
          <div key={tech.title} className="card">
            {tech.icon}
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 