import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Brain, 
  Cpu, 
  Database, 
  LineChart, 
  Cog, 
  Cloud,
  ArrowRight,
  Building,
  Boxes,
  Plane,
  Wifi,
  Settings,
  Building2
} from "lucide-react"

const digitalSolutions = [
  {
    title: "Artificial Intelligence",
    description: "AI-powered solutions for construction optimization",
    features: [
      "Predictive analytics",
      "Machine learning",
      "Computer vision",
      "Process automation"
    ],
    icon: <Brain className="h-12 w-12 text-purple-500" />,
    href: "/technologies/digital-construction/ai"
  },
  {
    title: "Robotics & Automation",
    description: "Advanced robotics and automated construction processes",
    features: [
      "Construction robots",
      "Autonomous equipment",
      "Automated systems",
      "Safety automation"
    ],
    icon: <Cog className="h-12 w-12 text-orange-500" />,
    href: "/technologies/digital-construction/robotics"
  },
  {
    title: "BIM Integration",
    description: "Advanced 3D modeling and project coordination",
    features: [
      "3D modeling",
      "Clash detection",
      "Project coordination",
      "Asset management"
    ],
    icon: <Database className="h-12 w-12 text-blue-500" />,
    href: "/technologies/digital-construction/bim"
  },
  {
    title: "Digital Project Management",
    description: "Modern tools for efficient project delivery",
    features: [
      "Project planning",
      "Resource management",
      "Progress tracking",
      "Team collaboration"
    ],
    icon: <LineChart className="h-12 w-12 text-green-500" />,
    href: "/technologies/digital-construction/project-management"
  }
]

const benefits = [
  {
    title: "Enhanced Efficiency",
    description: "Streamline processes and reduce manual work through digital automation",
    icon: <Cpu className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Better Collaboration",
    description: "Improve team coordination with real-time digital tools",
    icon: <Cloud className="h-12 w-12 text-green-500" />
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed choices based on comprehensive analytics",
    icon: <LineChart className="h-12 w-12 text-purple-500" />
  }
]

const bcProjects = [
  {
    title: "Vancouver Smart City Initiative",
    description: "Digital infrastructure integration in urban development.",
    icon: <Building2 className="h-8 w-8 text-blue-500" />
  },
  {
    title: "BC Construction Innovation Hub",
    description: "Advancing digital construction technologies across BC.",
    icon: <Brain className="h-8 w-8 text-purple-500" />
  },
  {
    title: "Digital Twin Projects",
    description: "Creating virtual replicas of BC infrastructure.",
    icon: <Database className="h-8 w-8 text-green-500" />
  }
]

export default function DigitalConstructionPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Digital Construction
        </h1>
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">
          Transform construction with advanced digital solutions. From AI to BIM, 
          discover how technology is revolutionizing the building industry in BC.
        </p>
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Digital Solutions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {digitalSolutions.map((solution) => (
            <Link 
              key={solution.title}
              href={solution.href}
              className="group w-full"
            >
              <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
                <div className="flex flex-col items-center text-center space-y-4">
                  {solution.icon}
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {solution.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-center text-muted-foreground"
                      >
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Key Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="border border-border rounded-lg p-6 text-center space-y-4"
            >
              <div className="flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          BC Innovation Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {bcProjects.map((project) => (
            <div 
              key={project.title}
              className="border border-border rounded-lg p-6 text-center space-y-4"
            >
              <div className="flex justify-center">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Start Your Digital Transformation
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-[900px] mx-auto">
          Discover how digital technologies can revolutionize your construction projects
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Cpu className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" size="lg">
              <Building className="mr-2 h-5 w-5" />
              View Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 