'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
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
  Cloud,
  Monitor,
  FileText,
  Settings,
  CheckCircle,
  Brain,
  Shield,
  BarChart3,
  Eye,
  Wrench,
  Calendar,
  DollarSign,
  Globe
} from "lucide-react"

const bimFeatures = [
  {
    title: "3D Modeling & Visualization",
    description: "Advanced BIM modeling and immersive visualization tools",
    features: [
      "Detailed 3D architectural models",
      "Virtual reality walkthroughs",
      "Advanced clash detection algorithms",
      "Real-time design validation",
      "Photorealistic rendering capabilities"
    ],
    specifications: {
      accuracy: "±1mm modeling precision",
      performance: "Real-time rendering",
      compatibility: "Universal file format support"
    },
    icon: <Box className="h-12 w-12 text-blue-500 float" />,
    path: "3d-modeling"
  },
  {
    title: "Collaboration & Coordination",
    description: "Real-time collaboration and seamless project coordination",
    features: [
      "Multi-user simultaneous access",
      "Intelligent version control",
      "Automated change management",
      "Cross-discipline coordination",
      "Cloud-based collaboration platform"
    ],
    specifications: {
      users: "Unlimited concurrent users",
      sync: "Real-time synchronization",
      access: "Global cloud accessibility"
    },
    icon: <Users className="h-12 w-12 text-green-500 float" />,
    path: "collaboration"
  },
  {
    title: "Data Management",
    description: "Comprehensive construction data and asset management",
    features: [
      "Centralized asset information",
      "Automated project documentation",
      "Advanced material tracking",
      "Integrated cost analysis",
      "Lifecycle data management"
    ],
    specifications: {
      storage: "Unlimited cloud storage",
      analytics: "Advanced data analytics",
      integration: "ERP system integration"
    },
    icon: <Database className="h-12 w-12 text-purple-500 float" />,
    path: "data-management"
  },
  {
    title: "4D/5D Integration",
    description: "Time and cost integration with spatial modeling",
    features: [
      "4D scheduling visualization",
      "5D cost modeling integration",
      "Resource optimization algorithms",
      "Timeline-based planning",
      "Budget tracking and forecasting"
    ],
    specifications: {
      scheduling: "Dynamic 4D scheduling",
      costing: "Real-time 5D cost analysis",
      optimization: "AI-powered resource planning"
    },
    icon: <Clock className="h-12 w-12 text-orange-500 float" />,
    path: "4d-5d-integration"
  }
]

const workflows = [
  {
    title: "Design Phase",
    description: "Conceptual design and detailed modeling workflows",
    features: [
      "Parametric architectural modeling",
      "Integrated MEP systems design",
      "Structural engineering coordination",
      "Site analysis and planning",
      "Sustainable design optimization"
    ],
    benefits: [
      "40% faster design iterations",
      "90% reduction in design conflicts",
      "Enhanced design quality",
      "Improved sustainability metrics"
    ],
    icon: <Layers className="h-12 w-12 text-orange-500 float" />
  },
  {
    title: "Construction Phase",
    description: "Construction planning and execution management",
    features: [
      "Dynamic 4D scheduling",
      "Resource planning optimization",
      "Real-time progress tracking",
      "Quality control integration",
      "Safety compliance monitoring"
    ],
    benefits: [
      "30% reduction in construction time",
      "25% improvement in resource efficiency",
      "Real-time project visibility",
      "Enhanced safety compliance"
    ],
    icon: <Building className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Operations Phase",
    description: "Facility management and maintenance optimization",
    features: [
      "Digital twin asset management",
      "Predictive maintenance scheduling",
      "Space planning and optimization",
      "Energy analysis and monitoring",
      "Lifecycle cost management"
    ],
    benefits: [
      "50% reduction in maintenance costs",
      "20% improvement in space utilization",
      "Enhanced operational efficiency",
      "Extended asset lifespan"
    ],
    icon: <Cloud className="h-12 w-12 text-green-500 float" />
  }
]

const technologies = [
  {
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics",
    applications: [
      "Automated clash detection",
      "Predictive maintenance algorithms",
      "Design optimization suggestions",
      "Resource allocation optimization"
    ],
    icon: <Brain className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure and collaboration",
    applications: [
      "Global accessibility and collaboration",
      "Unlimited storage and processing",
      "Real-time synchronization",
      "Secure data management"
    ],
    icon: <Cloud className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "IoT Integration",
    description: "Connected sensors and real-time monitoring",
    applications: [
      "Real-time environmental monitoring",
      "Equipment performance tracking",
      "Progress monitoring sensors",
      "Quality control automation"
    ],
    icon: <Monitor className="h-8 w-8 text-green-500 float" />
  }
]

const applications = [
  {
    title: "Commercial Construction",
    description: "Large-scale commercial and office building projects",
    benefits: [
      "Complex system coordination",
      "Multi-stakeholder collaboration",
      "Cost optimization strategies",
      "Regulatory compliance management"
    ],
    metrics: "35% reduction in project timeline",
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Infrastructure Projects",
    description: "Roads, bridges, and utilities infrastructure",
    benefits: [
      "Terrain modeling and analysis",
      "Environmental impact assessment",
      "Phased construction planning",
      "Long-term asset management"
    ],
    metrics: "45% improvement in design accuracy",
    icon: <Globe className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Residential Development",
    description: "Housing projects and residential communities",
    benefits: [
      "Standardized design components",
      "Efficient material planning",
      "Quality control systems",
      "Sustainable design integration"
    ],
    metrics: "30% reduction in material waste",
    icon: <Box className="h-8 w-8 text-purple-500 float" />
  }
]

const benefits = [
  {
    title: "Improved Coordination",
    description: "Enhanced team collaboration and reduced conflicts",
    metrics: "90% reduction in design conflicts",
    icon: <Users className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Cost Savings",
    description: "Reduced errors and improved cost control",
    metrics: "25% reduction in project costs",
    icon: <DollarSign className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Time Efficiency",
    description: "Faster project delivery and decision making",
    metrics: "40% faster project completion",
    icon: <Clock className="h-6 w-6 text-orange-500 float" />
  },
  {
    title: "Enhanced Quality",
    description: "Superior accuracy and design quality",
    metrics: "95% improvement in design accuracy",
    icon: <Target className="h-6 w-6 text-purple-500 float" />
  },
  {
    title: "Risk Mitigation",
    description: "Proactive risk identification and management",
    metrics: "80% reduction in construction risks",
    icon: <Shield className="h-6 w-6 text-red-500 float" />
  },
  {
    title: "Data-Driven Decisions",
    description: "Analytics-powered project insights",
    metrics: "Real-time project intelligence",
    icon: <BarChart3 className="h-6 w-6 text-cyan-500 float" />
  }
]

const softwareTools = [
  "Autodesk Revit",
  "Bentley MicroStation",
  "ArchiCAD",
  "Tekla Structures",
  "Navisworks",
  "Solibri Model Checker"
]

export default function BIMPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          BIM Integration
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Revolutionary Building Information Modeling solutions that transform construction through intelligent design, seamless collaboration, and data-driven decision making.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Core BIM Features
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {bimFeatures.map((feature, index) => (
            <Link 
              key={feature.title}
              href={`/technologies/digital-construction/bim/${feature.path}`}
              className="block transition-transform hover:scale-105"
            >
              <Card 
                delay={index * 0.08}
                className="h-full hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="text-sm font-semibold mb-2">Specifications:</h4>
                      <div className="space-y-1 text-xs">
                        {Object.entries(feature.specifications).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-medium capitalize">{key}:</span> {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Project Lifecycle Integration
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {workflows.map((workflow, index) => (
            <Card 
              key={workflow.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {workflow.icon}
                  <h3 className="font-semibold text-lg">{workflow.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{workflow.description}</p>
                  
                  <div className="w-full space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {workflow.features.map((feature) => (
                          <li key={feature} className="flex items-center text-xs text-muted-foreground">
                            <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {workflow.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-xs text-primary">
                            <Target className="h-2 w-2 mr-2 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
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
          Advanced Technologies
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

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Compatible Software Tools
        </h2>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {softwareTools.map((tool, index) => (
                <div key={tool} className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Transform Your Projects with BIM
        </h2>
        <p className="text-lg text-muted-foreground">
          Implement advanced Building Information Modeling to revolutionize your construction workflows and project outcomes
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Box className="mr-2 h-5 w-5" />
              Schedule Demo
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