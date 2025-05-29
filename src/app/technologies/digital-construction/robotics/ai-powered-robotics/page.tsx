'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Shield,
  Settings,
  CheckCircle,
  ArrowLeft,
  Bot,
  Building,
  Cpu,
  Eye,
  LineChart,
  Layers,
  Cog
} from "lucide-react"

const aiCapabilities = [
  {
    title: "Adaptive Construction Algorithms",
    description: "Self-learning systems that optimize construction processes in real-time",
    features: [
      "Dynamic task planning and optimization",
      "Real-time adaptation to site conditions",
      "Continuous learning from operational data",
      "Performance improvement over time",
      "Predictive workflow adjustments"
    ],
    specifications: {
      efficiency: "65% improvement in task optimization",
      accuracy: "Real-time adaptive decision making",
      productivity: "Continuous learning capability"
    },
    icon: <Brain className="h-12 w-12 text-purple-500 float" />
  },
  {
    title: "Real-Time Decision Making",
    description: "Instantaneous intelligent responses to changing construction environments",
    features: [
      "Millisecond response times to conditions",
      "Multi-sensor data fusion and analysis",
      "Risk assessment and mitigation strategies",
      "Emergency response protocols",
      "Context-aware decision trees"
    ],
    specifications: {
      efficiency: "Sub-second response times",
      accuracy: "99.8% decision accuracy",
      productivity: "24/7 intelligent monitoring"
    },
    icon: <Zap className="h-12 w-12 text-yellow-500 float" />
  },
  {
    title: "Predictive Maintenance",
    description: "AI-driven maintenance scheduling and equipment health monitoring",
    features: [
      "Equipment health prediction algorithms",
      "Failure pattern recognition",
      "Optimal maintenance scheduling",
      "Parts and resource optimization",
      "Cost-benefit analysis automation"
    ],
    specifications: {
      efficiency: "70% reduction in unexpected failures",
      accuracy: "95% prediction accuracy",
      productivity: "Extended equipment lifespan"
    },
    icon: <LineChart className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Human-Robot Collaboration",
    description: "Intelligent systems that safely and efficiently work alongside humans",
    features: [
      "Human intent prediction and assistance",
      "Safe interaction protocols",
      "Collaborative task coordination",
      "Skill complementarity optimization",
      "Natural language processing interfaces"
    ],
    specifications: {
      efficiency: "85% improvement in team productivity",
      accuracy: "Zero collision safety record",
      productivity: "Enhanced human capabilities"
    },
    icon: <Users className="h-12 w-12 text-blue-500 float" />
  }
]

const aiTechnologies = [
  {
    title: "Computer Vision",
    description: "Advanced visual recognition and scene understanding",
    applications: [
      "Object detection and recognition",
      "Quality inspection automation",
      "Progress monitoring and documentation",
      "Safety compliance verification"
    ],
    icon: <Eye className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Neural Networks",
    description: "Deep learning models for complex pattern recognition",
    applications: [
      "Predictive analytics and forecasting",
      "Anomaly detection systems",
      "Optimization algorithm development",
      "Natural language processing"
    ],
    icon: <Cpu className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Reinforcement Learning",
    description: "Self-improving systems through trial and error learning",
    applications: [
      "Autonomous navigation systems",
      "Task optimization strategies",
      "Resource allocation algorithms",
      "Performance enhancement protocols"
    ],
    icon: <Target className="h-8 w-8 text-green-500 float" />
  }
]

const applications = [
  {
    title: "Smart Construction Sites",
    description: "AI-coordinated construction operations with intelligent robotics",
    benefits: [
      "Optimized resource allocation",
      "Real-time quality assurance",
      "Predictive safety monitoring",
      "Dynamic workflow optimization"
    ],
    metrics: "60% improvement in overall site efficiency",
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Precision Manufacturing",
    description: "AI-enhanced robotic systems for prefabrication and assembly",
    benefits: [
      "Sub-millimeter accuracy control",
      "Adaptive quality management",
      "Waste minimization algorithms",
      "Production optimization"
    ],
    metrics: "90% reduction in manufacturing defects",
    icon: <Layers className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Maintenance Operations",
    description: "Intelligent robotic systems for predictive and preventive maintenance",
    benefits: [
      "Predictive failure detection",
      "Optimized maintenance scheduling",
      "Reduced equipment downtime",
      "Cost-effective resource planning"
    ],
    metrics: "75% reduction in maintenance costs",
    icon: <Cog className="h-8 w-8 text-purple-500 float" />
  }
]

const learningCapabilities = [
  {
    title: "Continuous Learning",
    description: "Systems that improve performance through ongoing experience",
    icon: <TrendingUp className="h-6 w-6 text-green-500" />
  },
  {
    title: "Adaptive Behavior",
    description: "Real-time adaptation to new environments and challenges",
    icon: <Brain className="h-6 w-6 text-purple-500" />
  },
  {
    title: "Safety Protocols",
    description: "AI-driven safety systems with predictive risk assessment",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "Performance Optimization",
    description: "Automatic optimization of operational parameters",
    icon: <Settings className="h-6 w-6 text-blue-500" />
  }
]

const benefits = [
  "85% improvement in operational efficiency",
  "95% reduction in human error rates",
  "70% faster adaptation to new tasks",
  "Real-time intelligent decision making",
  "Continuous performance optimization",
  "Enhanced safety through predictive analytics"
]

const futureCapabilities = [
  "Fully autonomous construction teams",
  "Self-optimizing construction processes",
  "Human-like problem-solving abilities",
  "Cross-project knowledge transfer",
  "Advanced collaborative intelligence",
  "Predictive project outcome modeling"
]

export default function AIPoweredRoboticsPage() {
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
          AI-Powered Robotics
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Revolutionary machine learning enhanced robotic systems that bring artificial intelligence to construction, enabling adaptive behavior, predictive capabilities, and human-robot collaboration.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          AI Capabilities & Features
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {aiCapabilities.map((capability, index) => (
            <Card 
              key={capability.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {capability.icon}
                </div>
                <CardTitle className="text-xl">{capability.title}</CardTitle>
                <CardDescription>{capability.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {capability.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">Performance Metrics:</h4>
                    <div className="space-y-1 text-xs">
                      <div><span className="font-medium">Efficiency:</span> {capability.specifications.efficiency}</div>
                      <div><span className="font-medium">Accuracy:</span> {capability.specifications.accuracy}</div>
                      <div><span className="font-medium">Productivity:</span> {capability.specifications.productivity}</div>
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
          Core AI Technologies
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {aiTechnologies.map((tech, index) => (
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
                    {tech.applications.map((application) => (
                      <li key={application} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{application}</span>
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
          Learning Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {learningCapabilities.map((capability, index) => (
            <Card 
              key={capability.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-2">
                  {capability.icon}
                  <h3 className="font-semibold text-sm">{capability.title}</h3>
                  <p className="text-xs text-muted-foreground">{capability.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Current Benefits
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

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Future Capabilities
        </h2>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="grid gap-4 md:grid-cols-2">
              {futureCapabilities.map((capability, index) => (
                <div key={capability} className="flex items-center space-x-3">
                  <Brain className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Deploy AI-Powered Robotics
        </h2>
        <p className="text-lg text-muted-foreground">
          Harness the power of artificial intelligence in construction robotics for unprecedented efficiency and intelligent automation
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Brain className="mr-2 h-5 w-5" />
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