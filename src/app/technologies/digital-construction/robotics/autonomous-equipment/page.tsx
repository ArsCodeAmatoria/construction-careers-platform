'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Truck, 
  MapPin, 
  Satellite, 
  Shield, 
  Gauge, 
  Radio,
  Settings,
  CheckCircle,
  ArrowLeft,
  Bot,
  Building,
  Cog,
  Zap,
  Target,
  Clock
} from "lucide-react"

const equipmentTypes = [
  {
    title: "GPS-Guided Excavators",
    description: "Precision excavation with centimeter-level accuracy",
    capabilities: [
      "3D grade control with real-time positioning",
      "Automated digging patterns and depths",
      "Collision avoidance with proximity sensors",
      "Remote operation capabilities",
      "Fuel efficiency optimization algorithms"
    ],
    specifications: {
      accuracy: "±2cm positioning precision",
      efficiency: "35% fuel savings",
      productivity: "50% faster excavation"
    },
    icon: <Cog className="h-12 w-12 text-orange-500 float" />
  },
  {
    title: "Autonomous Dump Trucks",
    description: "Self-driving haul trucks for material transport",
    capabilities: [
      "Autonomous navigation on predefined routes",
      "Dynamic path optimization",
      "Load monitoring and weight distribution",
      "Traffic management integration",
      "Predictive maintenance systems"
    ],
    specifications: {
      accuracy: "Lane accuracy within 10cm",
      efficiency: "20% reduction in cycle times",
      productivity: "24/7 operational capability"
    },
    icon: <Truck className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Remote-Operated Bulldozers",
    description: "Remotely controlled earthmoving equipment",
    capabilities: [
      "Real-time video feedback systems",
      "Haptic feedback for operator control",
      "Automated blade control systems",
      "Terrain mapping and analysis",
      "Safety override mechanisms"
    ],
    specifications: {
      accuracy: "±5cm blade positioning",
      efficiency: "40% faster grading operations",
      productivity: "Hazardous area operation capability"
    },
    icon: <Radio className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Automated Crane Systems",
    description: "Self-operating cranes with intelligent load management",
    capabilities: [
      "Automated load path planning",
      "Dynamic load balancing",
      "Anti-collision systems",
      "Precision placement algorithms",
      "Weather condition monitoring"
    ],
    specifications: {
      accuracy: "±1cm load placement",
      efficiency: "30% faster lift cycles",
      productivity: "Enhanced safety protocols"
    },
    icon: <Target className="h-12 w-12 text-purple-500 float" />
  }
]

const technologies = [
  {
    title: "GPS & GNSS Systems",
    description: "Satellite-based positioning for precise navigation",
    features: [
      "Real-time kinematic (RTK) positioning",
      "Multi-constellation satellite support",
      "Correction services integration",
      "Sub-centimeter accuracy capabilities"
    ],
    icon: <Satellite className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "LiDAR & Sensors",
    description: "Advanced sensing systems for environment detection",
    features: [
      "360-degree environmental scanning",
      "Obstacle detection and avoidance",
      "Terrain mapping and analysis",
      "Real-time hazard identification"
    ],
    icon: <Gauge className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "AI Navigation",
    description: "Machine learning algorithms for intelligent movement",
    features: [
      "Adaptive path planning algorithms",
      "Traffic pattern recognition",
      "Predictive route optimization",
      "Learning from operational data"
    ],
    icon: <Bot className="h-8 w-8 text-purple-500 float" />
  }
]

const applications = [
  {
    title: "Mining Operations",
    description: "Autonomous equipment for mining and quarrying",
    benefits: [
      "Reduced human exposure to hazards",
      "24/7 continuous operation",
      "Improved operational efficiency",
      "Enhanced safety protocols"
    ],
    metrics: "85% reduction in safety incidents"
  },
  {
    title: "Large Construction Sites",
    description: "Coordinated autonomous equipment for major projects",
    benefits: [
      "Synchronized equipment operation",
      "Optimized material flow",
      "Reduced congestion and delays",
      "Real-time progress monitoring"
    ],
    metrics: "40% improvement in site productivity"
  },
  {
    title: "Infrastructure Development",
    description: "Autonomous systems for roads, bridges, and utilities",
    benefits: [
      "Precision grading and excavation",
      "Consistent quality standards",
      "Reduced project timelines",
      "Enhanced safety compliance"
    ],
    metrics: "30% faster project completion"
  }
]

const safetyFeatures = [
  {
    title: "Collision Avoidance",
    description: "Advanced systems to prevent equipment collisions",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "Emergency Stop",
    description: "Immediate shutdown capabilities for safety",
    icon: <Zap className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "Operator Override",
    description: "Manual control takeover when needed",
    icon: <Settings className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Perimeter Monitoring",
    description: "Continuous area surveillance for personnel safety",
    icon: <MapPin className="h-6 w-6 text-green-500" />
  }
]

const benefits = [
  "95% improvement in operational safety",
  "40% increase in productivity",
  "30% reduction in fuel consumption",
  "24/7 operational capability",
  "Reduced operator fatigue and errors",
  "Enhanced precision and consistency"
]

export default function AutonomousEquipmentPage() {
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
          Autonomous Equipment
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Self-operating construction machinery and vehicles that revolutionize site operations through intelligent automation, enhanced safety, and unprecedented efficiency.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Equipment Types & Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {equipmentTypes.map((equipment, index) => (
            <Card 
              key={equipment.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {equipment.icon}
                </div>
                <CardTitle className="text-xl">{equipment.title}</CardTitle>
                <CardDescription>{equipment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Capabilities:</h4>
                    <ul className="space-y-1">
                      {equipment.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">Performance Metrics:</h4>
                    <div className="space-y-1 text-xs">
                      <div><span className="font-medium">Accuracy:</span> {equipment.specifications.accuracy}</div>
                      <div><span className="font-medium">Efficiency:</span> {equipment.specifications.efficiency}</div>
                      <div><span className="font-medium">Productivity:</span> {equipment.specifications.productivity}</div>
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
          Core Technologies
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {tech.icon}
                  <h3 className="font-semibold">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                  <ul className="space-y-1 text-sm">
                    {tech.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
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
          Industry Applications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {applications.map((app, index) => (
            <Card 
              key={app.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{app.title}</CardTitle>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <ul className="space-y-1">
                    {app.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/10 p-2 rounded text-center">
                    <span className="text-sm font-medium text-primary">{app.metrics}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Safety Features
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {safetyFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-2">
                  {feature.icon}
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
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
          Deploy Autonomous Equipment
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your construction operations with intelligent, self-operating equipment that enhances safety and productivity
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Truck className="mr-2 h-5 w-5" />
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