'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Bot, 
  Layers, 
  Hammer, 
  Zap, 
  Target, 
  Shield,
  Settings,
  CheckCircle,
  ArrowLeft,
  Brain,
  Building,
  Cog,
  Factory,
  Wrench,
  Clock
} from "lucide-react"

const robotTypes = [
  {
    title: "Bricklaying Robots",
    description: "Precision masonry robots with 99% accuracy rates",
    capabilities: [
      "Automated brick placement and alignment",
      "Mortar application with precision timing",
      "Pattern recognition for complex designs",
      "Quality control with integrated sensors",
      "Weather-adaptive construction algorithms"
    ],
    specifications: {
      accuracy: "±1mm precision",
      speed: "300-500 bricks per hour",
      efficiency: "3x faster than manual labor"
    },
    icon: <Hammer className="h-12 w-12 text-orange-500 float" />
  },
  {
    title: "3D Concrete Printing",
    description: "Large-scale additive manufacturing for construction",
    capabilities: [
      "Layer-by-layer concrete deposition",
      "Complex geometric structure creation",
      "Continuous operation without breaks",
      "Material optimization algorithms",
      "Multi-story building capabilities"
    ],
    specifications: {
      accuracy: "±5mm layer precision",
      speed: "50 cm³/second print rate",
      efficiency: "70% material waste reduction"
    },
    icon: <Layers className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Welding Automation",
    description: "Robotic welding systems for structural assembly",
    capabilities: [
      "Multi-axis welding arm movement",
      "Real-time weld quality monitoring",
      "Adaptive welding parameter control",
      "Seam tracking and correction",
      "Hazardous environment operation"
    ],
    specifications: {
      accuracy: "0.1mm weld precision",
      speed: "40% faster than manual welding",
      efficiency: "99.5% weld quality consistency"
    },
    icon: <Zap className="h-12 w-12 text-yellow-500 float" />
  },
  {
    title: "Demolition Robots",
    description: "Autonomous systems for controlled demolition",
    capabilities: [
      "Selective demolition with precision",
      "Debris sorting and material recovery",
      "Dust suppression integration",
      "Remote operation capabilities",
      "Structural integrity monitoring"
    ],
    specifications: {
      accuracy: "Selective demolition within 2cm",
      speed: "60% faster than manual methods",
      efficiency: "85% material recovery rate"
    },
    icon: <Wrench className="h-12 w-12 text-red-500 float" />
  }
]

const applications = [
  {
    title: "Residential Construction",
    description: "Automated home building and renovation projects",
    benefits: [
      "Consistent quality across all units",
      "Reduced construction timeline",
      "Lower labor costs",
      "Enhanced safety standards"
    ],
    icon: <Building className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Commercial Buildings",
    description: "Large-scale commercial construction automation",
    benefits: [
      "Scalable production methods",
      "Complex architectural designs",
      "24/7 construction capability",
      "Quality assurance integration"
    ],
    icon: <Factory className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Infrastructure Projects",
    description: "Robotic systems for infrastructure development",
    benefits: [
      "Precision in critical structures",
      "Reduced human risk exposure",
      "Consistent material application",
      "Environmental monitoring integration"
    ],
    icon: <Cog className="h-8 w-8 text-purple-500 float" />
  }
]

const technologies = [
  {
    title: "Computer Vision",
    description: "Visual recognition for precise positioning and quality control",
    applications: [
      "Material identification and sorting",
      "Defect detection and correction",
      "Progress monitoring and documentation",
      "Safety compliance verification"
    ]
  },
  {
    title: "Machine Learning",
    description: "Adaptive algorithms for improving performance over time",
    applications: [
      "Pattern recognition for complex tasks",
      "Predictive maintenance scheduling",
      "Optimization of construction processes",
      "Quality improvement algorithms"
    ]
  },
  {
    title: "Precision Sensors",
    description: "Advanced sensing systems for accuracy and safety",
    applications: [
      "Environmental condition monitoring",
      "Material property measurement",
      "Position and orientation tracking",
      "Force and torque feedback systems"
    ]
  }
]

const benefits = [
  "99% improvement in construction accuracy",
  "300% increase in construction speed",
  "85% reduction in workplace injuries",
  "70% decrease in material waste",
  "24/7 operational capability",
  "Consistent quality output"
]

export default function ConstructionRobotsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Link href="/technologies/digital-construction/robotics">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Robotics & Automation
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Construction Robots
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Advanced robotic systems revolutionizing construction through precision automation, enhanced safety, and unprecedented efficiency in building processes.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Robot Types & Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {robotTypes.map((robot, index) => (
            <Card 
              key={robot.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {robot.icon}
                </div>
                <CardTitle className="text-xl">{robot.title}</CardTitle>
                <CardDescription>{robot.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Capabilities:</h4>
                    <ul className="space-y-1">
                      {robot.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">Performance Specifications:</h4>
                    <div className="space-y-1 text-xs">
                      <div><span className="font-medium">Accuracy:</span> {robot.specifications.accuracy}</div>
                      <div><span className="font-medium">Speed:</span> {robot.specifications.speed}</div>
                      <div><span className="font-medium">Efficiency:</span> {robot.specifications.efficiency}</div>
                    </div>
                  </div>
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
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {app.icon}
                  <h3 className="font-semibold">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                  <ul className="space-y-1 text-sm">
                    {app.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Core Technologies
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  {tech.title}
                </CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tech.applications.map((application) => (
                    <li key={application} className="flex items-center text-sm text-muted-foreground">
                      <Target className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Key Benefits
        </h2>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Deploy Construction Robotics
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your construction operations with cutting-edge robotic systems designed for precision and efficiency
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
              View Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 