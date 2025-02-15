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
  Building 
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

export default function DigitalConstructionPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Digital Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Transforming construction through advanced digital technologies and automation
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Digital Solutions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {digitalSolutions.map((solution) => (
            <Link 
              key={solution.title}
              href={solution.href}
              className="group"
            >
              <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="transform transition-transform group-hover:scale-110">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                  <ul className="w-full space-y-2 text-sm">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-muted-foreground" />
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Key Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="p-6 border border-border rounded-lg"
            >
              <div className="flex flex-col items-center space-y-3">
                {benefit.icon}
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Digital Transformation
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover how digital technologies can revolutionize your construction projects
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Cpu className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <Building className="mr-2 h-5 w-5" />
            View Case Studies
          </Button>
        </div>
      </section>
    </div>
  )
} 