import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Box, 
  Database, 
  Users, 
  Layers, 
  Clock, 
  Target, 
  Zap,
  Building,
  LineChart,
  Cloud
} from "lucide-react"

const bimFeatures = [
  {
    title: "3D Modeling & Visualization",
    description: "Advanced BIM modeling and visualization tools",
    features: [
      "Detailed 3D models",
      "Virtual walkthroughs",
      "Clash detection",
      "Design validation"
    ],
    icon: <Box className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Collaboration & Coordination",
    description: "Real-time collaboration and project coordination",
    features: [
      "Multi-user access",
      "Version control",
      "Change management",
      "Team coordination"
    ],
    icon: <Users className="h-12 w-12 text-green-500" />
  },
  {
    title: "Data Management",
    description: "Comprehensive construction data management",
    features: [
      "Asset information",
      "Project documentation",
      "Material tracking",
      "Cost analysis"
    ],
    icon: <Database className="h-12 w-12 text-purple-500" />
  }
]

const workflows = [
  {
    title: "Design Phase",
    description: "Conceptual design and detailed modeling",
    features: [
      "Architectural modeling",
      "MEP systems",
      "Structural design",
      "Site planning"
    ],
    icon: <Layers className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Construction Phase",
    description: "Construction planning and execution",
    features: [
      "4D scheduling",
      "Resource planning",
      "Progress tracking",
      "Quality control"
    ],
    icon: <Building className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Operations Phase",
    description: "Facility management and maintenance",
    features: [
      "Asset management",
      "Maintenance scheduling",
      "Space planning",
      "Energy analysis"
    ],
    icon: <Cloud className="h-12 w-12 text-green-500" />
  }
]

const benefits = [
  {
    title: "Improved Coordination",
    description: "Better team collaboration and reduced conflicts",
    icon: <Users className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Cost Savings",
    description: "Reduced errors and improved cost control",
    icon: <LineChart className="h-6 w-6 text-green-500" />
  },
  {
    title: "Time Efficiency",
    description: "Faster project delivery and decision making",
    icon: <Clock className="h-6 w-6 text-orange-500" />
  },
  {
    title: "Better Quality",
    description: "Enhanced accuracy and design quality",
    icon: <Target className="h-6 w-6 text-purple-500" />
  }
]

export default function BIMPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          BIM Integration
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Advanced Building Information Modeling for modern construction projects
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Core Features
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {bimFeatures.map((feature) => (
            <div 
              key={feature.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Project Lifecycle Integration
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {workflows.map((workflow) => (
            <div 
              key={workflow.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {workflow.icon}
                <h3 className="text-xl font-semibold">{workflow.title}</h3>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {workflow.features.map((item) => (
                    <li key={item} className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Get Started with BIM
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your construction projects with advanced BIM integration
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Box className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <Cloud className="mr-2 h-5 w-5" />
            View Solutions
          </Button>
        </div>
      </section>
    </div>
  )
} 