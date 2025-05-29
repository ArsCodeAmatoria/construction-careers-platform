'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Box, 
  Eye, 
  Layers, 
  Monitor, 
  Palette, 
  MousePointer,
  Settings,
  CheckCircle,
  ArrowLeft,
  Building,
  Scan,
  Camera,
  Zap,
  Target,
  VolumeX,
  Volume2
} from "lucide-react"

const modelingCapabilities = [
  {
    title: "Parametric Modeling",
    description: "Advanced parametric modeling with intelligent relationships",
    features: [
      "Family-based component creation",
      "Constraint-driven geometry",
      "Automated dimensioning systems",
      "Adaptive component behavior",
      "Rule-based design automation"
    ],
    specifications: {
      precision: "±1mm modeling accuracy",
      complexity: "Unlimited detail levels",
      automation: "Smart constraint resolution"
    },
    icon: <Box className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Advanced Visualization",
    description: "Immersive and photorealistic visualization technologies",
    features: [
      "Real-time ray tracing rendering",
      "Virtual reality walkthroughs",
      "Augmented reality integration",
      "Interactive 3D presentations",
      "Cloud-based visualization sharing"
    ],
    specifications: {
      quality: "4K+ photorealistic rendering",
      performance: "Real-time interaction",
      platforms: "VR/AR compatible"
    },
    icon: <Eye className="h-12 w-12 text-purple-500 float" />
  },
  {
    title: "Multi-Discipline Integration",
    description: "Coordinated modeling across all construction disciplines",
    features: [
      "Architectural design integration",
      "MEP systems coordination",
      "Structural engineering alignment",
      "Site and civil works modeling",
      "Cross-discipline clash detection"
    ],
    specifications: {
      coordination: "Real-time multi-user",
      disciplines: "All major trades",
      integration: "Seamless data exchange"
    },
    icon: <Layers className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Intelligent Object Libraries",
    description: "Comprehensive libraries of smart building components",
    features: [
      "Manufacturer-specific content",
      "Performance-based specifications",
      "Automated sizing and selection",
      "Code compliance verification",
      "Sustainable material options"
    ],
    specifications: {
      content: "100,000+ components",
      updates: "Real-time manufacturer data",
      compliance: "Global building codes"
    },
    icon: <Settings className="h-12 w-12 text-orange-500 float" />
  }
]

const visualizationTools = [
  {
    title: "Real-Time Rendering",
    description: "Instant photorealistic visualization",
    capabilities: [
      "GPU-accelerated rendering",
      "Dynamic lighting simulation",
      "Material property visualization",
      "Environmental context rendering"
    ],
    icon: <Monitor className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Virtual Reality",
    description: "Immersive 3D environment exploration",
    capabilities: [
      "VR headset compatibility",
      "Interactive object manipulation",
      "Scale and perspective control",
      "Collaborative VR sessions"
    ],
    icon: <VolumeX className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Augmented Reality",
    description: "Real-world overlay visualization",
    capabilities: [
      "Mobile AR applications",
      "On-site model overlay",
      "Progress comparison tools",
      "Interactive annotation system"
    ],
    icon: <Camera className="h-8 w-8 text-green-500 float" />
  }
]

const applications = [
  {
    title: "Architectural Design",
    description: "Complete building design and visualization",
    benefits: [
      "Conceptual design development",
      "Design iteration optimization",
      "Client presentation tools",
      "Regulatory approval support"
    ],
    metrics: "60% faster design approval",
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "MEP Coordination",
    description: "Mechanical, electrical, and plumbing system integration",
    benefits: [
      "System routing optimization",
      "Space allocation verification",
      "Installation sequence planning",
      "Maintenance access planning"
    ],
    metrics: "85% reduction in installation conflicts",
    icon: <Zap className="h-8 w-8 text-yellow-500 float" />
  },
  {
    title: "Construction Planning",
    description: "Build sequence and logistics visualization",
    benefits: [
      "4D construction sequencing",
      "Site logistics planning",
      "Equipment positioning",
      "Safety zone visualization"
    ],
    metrics: "40% improvement in planning efficiency",
    icon: <Target className="h-8 w-8 text-green-500 float" />
  }
]

const softwareIntegration = [
  {
    title: "Autodesk Revit",
    features: ["Parametric modeling", "Family creation", "Collaboration tools"],
    specialty: "Complete BIM authoring"
  },
  {
    title: "SketchUp Pro",
    features: ["Conceptual modeling", "Quick visualization", "Extension library"],
    specialty: "Design exploration"
  },
  {
    title: "Rhino 3D",
    features: ["NURBS modeling", "Complex geometry", "Grasshopper integration"],
    specialty: "Advanced geometry"
  },
  {
    title: "3ds Max",
    features: ["Photorealistic rendering", "Animation", "Visualization"],
    specialty: "High-end visualization"
  }
]

const benefits = [
  "99% improvement in design accuracy",
  "75% reduction in design errors",
  "60% faster client approvals",
  "Real-time design collaboration",
  "Enhanced stakeholder communication",
  "Immersive project visualization"
]

export default function ThreeDModelingPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Link href="/technologies/digital-construction/bim">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to BIM Integration
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          3D Modeling & Visualization
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Revolutionary 3D modeling and immersive visualization tools that transform building design through parametric modeling, photorealistic rendering, and interactive experiences.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Modeling Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {modelingCapabilities.map((capability, index) => (
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
                    <h4 className="text-sm font-semibold mb-2">Specifications:</h4>
                    <div className="space-y-1 text-xs">
                      {Object.entries(capability.specifications).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium capitalize">{key}:</span> {value}
                        </div>
                      ))}
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
          Visualization Technologies
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {visualizationTools.map((tool, index) => (
            <Card 
              key={tool.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {tool.icon}
                  <h3 className="font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                  <ul className="space-y-1 text-sm">
                    {tool.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{capability}</span>
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
          Software Integration
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {softwareIntegration.map((software, index) => (
            <Card 
              key={software.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-3">
                  <Palette className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-sm">{software.title}</h3>
                  <p className="text-xs text-muted-foreground">{software.specialty}</p>
                  <ul className="space-y-1 text-xs">
                    {software.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-2 w-2 mr-1 text-green-500 flex-shrink-0" />
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
          Transform Your Design Process
        </h2>
        <p className="text-lg text-muted-foreground">
          Implement advanced 3D modeling and visualization tools to revolutionize your building design and client communication
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Box className="mr-2 h-5 w-5" />
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