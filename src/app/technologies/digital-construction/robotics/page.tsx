'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
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
  Factory,
  Bot,
  Cpu,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Brain,
  Layers
} from "lucide-react"

const roboticSolutions = [
  {
    title: "Construction Robots",
    description: "Automated systems for precision construction tasks",
    details: [
      "Bricklaying robots with 99% accuracy",
      "3D concrete printing systems",
      "Autonomous demolition robots",
      "Robotic welding automation",
      "Tile installation robots"
    ],
    icon: <Bot className="h-12 w-12 text-blue-500 float" />,
    href: "/technologies/digital-construction/robotics/construction-robots"
  },
  {
    title: "Autonomous Equipment",
    description: "Self-operating construction machinery and vehicles",
    details: [
      "GPS-guided excavators",
      "Autonomous dump trucks",
      "Remote-operated bulldozers",
      "Self-driving concrete mixers",
      "Automated crane systems"
    ],
    icon: <Truck className="h-12 w-12 text-green-500 float" />,
    href: "/technologies/digital-construction/robotics/autonomous-equipment"
  },
  {
    title: "Automated Systems",
    description: "Intelligent processes for construction efficiency",
    details: [
      "Robotic material handling",
      "Automated quality inspection",
      "Smart site monitoring",
      "Inventory management systems",
      "Prefabrication automation"
    ],
    icon: <Cog className="h-12 w-12 text-orange-500 float" />,
    href: "/technologies/digital-construction/robotics/automated-systems"
  },
  {
    title: "AI-Powered Robotics",
    description: "Machine learning enhanced robotic systems",
    details: [
      "Adaptive construction algorithms",
      "Real-time decision making",
      "Predictive maintenance",
      "Environmental adaptation",
      "Human-robot collaboration"
    ],
    icon: <Brain className="h-12 w-12 text-purple-500 float" />,
    href: "/technologies/digital-construction/robotics/ai-powered-robotics"
  }
]

const benefits = [
  {
    title: "Enhanced Safety",
    description: "Eliminate human exposure to dangerous construction environments",
    metrics: "85% reduction in workplace injuries",
    icon: <Shield className="h-8 w-8 text-red-500 float" />
  },
  {
    title: "Increased Productivity",
    description: "24/7 operation capability with consistent performance",
    metrics: "300% faster task completion",
    icon: <Zap className="h-8 w-8 text-yellow-500 float" />
  },
  {
    title: "Precision Quality",
    description: "Sub-millimeter accuracy in construction tasks",
    metrics: "99.9% precision accuracy",
    icon: <Target className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Cost Efficiency",
    description: "Reduced labor costs and material waste",
    metrics: "40% reduction in project costs",
    icon: <TrendingUp className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Workforce Optimization",
    description: "Free human workers for complex, creative tasks",
    metrics: "60% improvement in skilled labor utilization",
    icon: <Wrench className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Consistent Performance",
    description: "Eliminate human error and fatigue factors",
    metrics: "100% consistent output quality",
    icon: <BarChart3 className="h-8 w-8 text-cyan-500 float" />
  }
]

const applications = [
  {
    title: "High-Rise Construction",
    description: "Automated systems for skyscraper construction projects",
    features: [
      "Automated facade installation",
      "Robotic structural assembly",
      "Precision material placement",
      "Vertical construction automation"
    ],
    icon: <Building className="h-12 w-12 text-purple-500 float" />
  },
  {
    title: "Infrastructure Projects",
    description: "Robotics for large-scale infrastructure development",
    features: [
      "Automated bridge construction",
      "Tunnel boring robots",
      "Road paving automation",
      "Pipeline installation robots"
    ],
    icon: <Factory className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Prefabrication Systems",
    description: "Automated manufacturing of building components",
    features: [
      "Modular construction robots",
      "Precision cutting systems",
      "Assembly line automation",
      "Quality control integration"
    ],
    icon: <Layers className="h-12 w-12 text-green-500 float" />
  }
]

const technologies = [
  {
    title: "Artificial Intelligence",
    description: "Machine learning algorithms for intelligent decision making",
    icon: <Brain className="h-6 w-6 text-purple-500" />
  },
  {
    title: "Computer Vision",
    description: "Visual recognition for precise robot navigation and tasks",
    icon: <Target className="h-6 w-6 text-blue-500" />
  },
  {
    title: "IoT Integration",
    description: "Connected systems for real-time monitoring and control",
    icon: <Cpu className="h-6 w-6 text-green-500" />
  },
  {
    title: "Advanced Sensors",
    description: "Precision sensors for environment awareness and safety",
    icon: <Settings className="h-6 w-6 text-orange-500" />
  }
]

const stats = [
  "500+ robotic systems deployed globally",
  "85% average improvement in construction speed",
  "90% reduction in material waste",
  "24/7 operational capability",
  "Integration with existing workflows",
  "Scalable solutions for any project size"
]

export default function RoboticsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Robotics & Automation
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Revolutionary robotics and automation solutions transforming construction through precision, safety, and unprecedented efficiency.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Robotic Solutions
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {roboticSolutions.map((solution, index) => (
            <Link key={solution.title} href={solution.href} className="group">
              <Card 
                delay={index * 0.08}
                className="h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {solution.title}
                  </CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground">Capabilities:</h4>
                    <ul className="space-y-2">
                      {solution.details.map((detail) => (
                        <li key={detail} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Key Benefits & Impact
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {benefit.icon}
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  <div className="text-sm font-medium text-primary">{benefit.metrics}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Industry Applications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {applications.map((app, index) => (
            <Card 
              key={app.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {app.icon}
                </div>
                <CardTitle className="text-lg">{app.title}</CardTitle>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Core Technologies
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-2">
                  {tech.icon}
                  <h3 className="font-semibold text-sm">{tech.title}</h3>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Implementation Success
        </h2>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="grid gap-4 md:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={stat} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{stat}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Transform Your Construction Operations
        </h2>
        <p className="text-lg text-muted-foreground">
          Implement cutting-edge robotics and automation to revolutionize your construction projects
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Bot className="mr-2 h-5 w-5" />
              Request Demo
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" size="lg" className="button-glow">
              <Building className="mr-2 h-5 w-5" />
              View Success Stories
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 