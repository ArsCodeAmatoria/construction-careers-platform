'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Cog, 
  Package, 
  Eye, 
  BarChart3, 
  Factory, 
  Shield,
  Settings,
  CheckCircle,
  ArrowLeft,
  Bot,
  Building,
  Monitor,
  Clipboard,
  Target,
  Clock,
  Zap
} from "lucide-react"

const systemTypes = [
  {
    title: "Robotic Material Handling",
    description: "Automated systems for efficient material movement and placement",
    capabilities: [
      "Automated loading and unloading operations",
      "Precise material sorting and categorization",
      "Inventory tracking with RFID integration",
      "Coordinated multi-robot workflows",
      "Real-time location and status monitoring"
    ],
    specifications: {
      efficiency: "80% reduction in manual handling",
      accuracy: "99.5% sorting accuracy",
      productivity: "24/7 operational capability"
    },
    icon: <Package className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Automated Quality Inspection",
    description: "AI-powered systems for continuous quality monitoring",
    capabilities: [
      "Real-time defect detection and classification",
      "Dimensional accuracy measurement",
      "Surface quality analysis",
      "Compliance verification and documentation",
      "Predictive quality analytics"
    ],
    specifications: {
      efficiency: "70% faster inspection process",
      accuracy: "95% defect detection rate",
      productivity: "Continuous quality monitoring"
    },
    icon: <Eye className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Smart Site Monitoring",
    description: "Intelligent surveillance and environmental monitoring systems",
    capabilities: [
      "360-degree site surveillance coverage",
      "Environmental condition monitoring",
      "Personnel and equipment tracking",
      "Security breach detection and alerts",
      "Progress documentation and reporting"
    ],
    specifications: {
      efficiency: "50% reduction in security incidents",
      accuracy: "Real-time monitoring coverage",
      productivity: "Automated reporting generation"
    },
    icon: <Monitor className="h-12 w-12 text-purple-500 float" />
  },
  {
    title: "Inventory Management Systems",
    description: "Automated tracking and management of construction materials",
    capabilities: [
      "Real-time inventory level monitoring",
      "Automated reorder point calculations",
      "Material usage optimization",
      "Waste reduction algorithms",
      "Supply chain integration"
    ],
    specifications: {
      efficiency: "60% reduction in material waste",
      accuracy: "98% inventory accuracy",
      productivity: "Automated procurement workflows"
    },
    icon: <Clipboard className="h-12 w-12 text-orange-500 float" />
  }
]

const technologies = [
  {
    title: "IoT Sensors & Networks",
    description: "Connected sensor systems for real-time data collection",
    applications: [
      "Environmental monitoring sensors",
      "Equipment status and performance tracking",
      "Material condition monitoring",
      "Personnel safety and location tracking"
    ],
    icon: <Settings className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent algorithms for automated decision making",
    applications: [
      "Pattern recognition for quality control",
      "Predictive analytics for maintenance",
      "Optimization algorithms for workflows",
      "Anomaly detection and alerting"
    ],
    icon: <Bot className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Data Analytics Platforms",
    description: "Comprehensive data processing and visualization systems",
    applications: [
      "Real-time dashboard creation",
      "Performance trend analysis",
      "Predictive maintenance scheduling",
      "Cost optimization recommendations"
    ],
    icon: <BarChart3 className="h-8 w-8 text-green-500 float" />
  }
]

const applications = [
  {
    title: "Manufacturing & Prefabrication",
    description: "Automated systems for off-site construction manufacturing",
    benefits: [
      "Consistent product quality",
      "Reduced manufacturing time",
      "Minimized material waste",
      "Enhanced worker safety"
    ],
    metrics: "75% improvement in production efficiency",
    icon: <Factory className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Large-Scale Projects",
    description: "Coordinated automation for major construction sites",
    benefits: [
      "Synchronized operation workflows",
      "Real-time progress tracking",
      "Resource optimization",
      "Quality assurance integration"
    ],
    metrics: "45% reduction in project timeline",
    icon: <Building className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Maintenance Operations",
    description: "Automated systems for facility and equipment maintenance",
    benefits: [
      "Predictive maintenance scheduling",
      "Reduced equipment downtime",
      "Optimized maintenance costs",
      "Enhanced equipment lifespan"
    ],
    metrics: "65% reduction in unplanned downtime",
    icon: <Cog className="h-8 w-8 text-purple-500 float" />
  }
]

const processSteps = [
  {
    title: "Data Collection",
    description: "Continuous gathering of operational data through IoT sensors",
    icon: <Monitor className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Analysis & Processing",
    description: "Real-time analysis using AI and machine learning algorithms",
    icon: <Bot className="h-6 w-6 text-green-500" />
  },
  {
    title: "Decision Making",
    description: "Automated decisions based on predefined rules and patterns",
    icon: <Target className="h-6 w-6 text-purple-500" />
  },
  {
    title: "Action Execution",
    description: "Automated implementation of decisions and process adjustments",
    icon: <Zap className="h-6 w-6 text-orange-500" />
  }
]

const benefits = [
  "90% reduction in manual monitoring tasks",
  "75% improvement in operational efficiency",
  "60% decrease in human error rates",
  "24/7 continuous operation capability",
  "Real-time performance optimization",
  "Enhanced safety compliance monitoring"
]

export default function AutomatedSystemsPage() {
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
          Automated Systems
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Intelligent automated processes that revolutionize construction efficiency through smart monitoring, predictive analytics, and seamless workflow optimization.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          System Types & Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {systemTypes.map((system, index) => (
            <Card 
              key={system.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {system.icon}
                </div>
                <CardTitle className="text-xl">{system.title}</CardTitle>
                <CardDescription>{system.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Capabilities:</h4>
                    <ul className="space-y-1">
                      {system.capabilities.map((capability) => (
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
                      <div><span className="font-medium">Efficiency:</span> {system.specifications.efficiency}</div>
                      <div><span className="font-medium">Accuracy:</span> {system.specifications.accuracy}</div>
                      <div><span className="font-medium">Productivity:</span> {system.specifications.productivity}</div>
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
          Process Workflow
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {processSteps.map((step, index) => (
            <Card 
              key={step.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                  <div className="text-lg font-bold text-primary">{index + 1}</div>
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
          Implement Automated Systems
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your construction operations with intelligent automated systems that enhance efficiency and reduce operational overhead
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Cog className="mr-2 h-5 w-5" />
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