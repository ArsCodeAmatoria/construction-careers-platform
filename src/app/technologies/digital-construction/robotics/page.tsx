import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Cog, 
  Settings,
  Truck, 
  Wrench, 
  Shield, 
  Clock, 
  Target, 
  Zap,
  Building,
  Factory 
} from "lucide-react"

const roboticSolutions = [
  {
    title: "Construction Robots",
    description: "Automated systems for construction tasks",
    features: [
      "Bricklaying robots",
      "3D printing robots",
      "Demolition robots",
      "Welding automation"
    ],
    icon: <Settings className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Autonomous Equipment",
    description: "Self-operating construction machinery",
    features: [
      "Autonomous vehicles",
      "Remote operation",
      "GPS guidance",
      "Safety systems"
    ],
    icon: <Truck className="h-12 w-12 text-green-500" />
  },
  {
    title: "Automated Systems",
    description: "Automated processes for construction efficiency",
    features: [
      "Material handling",
      "Quality control",
      "Site monitoring",
      "Inventory management"
    ],
    icon: <Cog className="h-12 w-12 text-orange-500" />
  }
]

const benefits = [
  {
    title: "Increased Safety",
    description: "Reduce human exposure to hazardous conditions",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "Higher Productivity",
    description: "24/7 operation capability and faster execution",
    icon: <Zap className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "Consistent Quality",
    description: "Precise and repeatable construction processes",
    icon: <Target className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Labor Optimization",
    description: "Focus human workers on skilled tasks",
    icon: <Wrench className="h-6 w-6 text-green-500" />
  }
]

const applications = [
  {
    title: "High-Rise Construction",
    description: "Automated systems for tall building construction",
    icon: <Building className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Infrastructure Projects",
    description: "Robotics for bridge and road construction",
    icon: <Factory className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Prefabrication",
    description: "Automated manufacturing of building components",
    icon: <Cog className="h-12 w-12 text-green-500" />
  }
]

export default function RoboticsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Robotics & Automation
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Advanced robotics and automation solutions revolutionizing the construction industry
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {roboticSolutions.map((solution) => (
            <div 
              key={solution.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {solution.icon}
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Key Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Industry Applications
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {applications.map((app) => (
            <div 
              key={app.title}
              className="p-6 border border-border rounded-lg"
            >
              <div className="flex flex-col items-center space-y-3">
                {app.icon}
                <h3 className="font-semibold">{app.title}</h3>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Explore Solutions
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover how robotics and automation can enhance your construction projects
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Settings className="mr-2 h-5 w-5" />
              Request Demo
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <Cog className="mr-2 h-5 w-5" />
            View Equipment
          </Button>
        </div>
      </section>
    </div>
  )
} 