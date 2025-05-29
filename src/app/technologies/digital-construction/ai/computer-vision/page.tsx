'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Search, 
  Eye, 
  Camera, 
  Shield, 
  Activity, 
  FileCheck,
  Video,
  Scan,
  CheckCircle,
  ArrowLeft,
  Brain,
  Building,
  AlertTriangle
} from "lucide-react"

const features = [
  {
    title: "Safety Compliance",
    description: "Real-time monitoring of safety protocols and PPE usage",
    details: [
      "PPE detection and verification",
      "Hazard zone monitoring",
      "Safety protocol compliance",
      "Incident prevention alerts"
    ],
    icon: <Shield className="h-12 w-12 text-red-500 float" />
  },
  {
    title: "Progress Tracking",
    description: "Visual monitoring of construction progress and milestones",
    details: [
      "Automated progress reports",
      "3D model comparison",
      "Timeline visualization",
      "Quality milestone tracking"
    ],
    icon: <Activity className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Quality Control",
    description: "Automated inspection and defect detection",
    details: [
      "Structural defect detection",
      "Material quality assessment",
      "Measurement verification",
      "Compliance documentation"
    ],
    icon: <FileCheck className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Site Surveillance",
    description: "24/7 intelligent monitoring and security",
    details: [
      "Perimeter monitoring",
      "Unauthorized access detection",
      "Equipment security",
      "Theft prevention"
    ],
    icon: <Video className="h-12 w-12 text-purple-500 float" />
  }
]

const technologies = [
  {
    title: "Object Detection",
    description: "Identify and classify objects, people, and equipment on site",
    icon: <Search className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Image Recognition",
    description: "Advanced pattern recognition for construction elements",
    icon: <Eye className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "3D Scanning",
    description: "Create detailed 3D models from visual data",
    icon: <Scan className="h-8 w-8 text-purple-500 float" />
  }
]

const useCases = [
  {
    title: "Safety Monitoring",
    applications: [
      "Hard hat detection",
      "Safety vest verification",
      "Fall protection monitoring",
      "Dangerous behavior alerts"
    ]
  },
  {
    title: "Quality Assurance",
    applications: [
      "Crack detection in concrete",
      "Weld quality inspection",
      "Dimensional accuracy",
      "Material defect identification"
    ]
  },
  {
    title: "Progress Documentation",
    applications: [
      "Before/after comparisons",
      "Time-lapse creation",
      "Milestone verification",
      "Change documentation"
    ]
  }
]

export default function ComputerVisionPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Link href="/technologies/digital-construction/ai">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to AI Solutions
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Computer Vision
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Transform construction site monitoring with AI-powered visual intelligence for enhanced safety, quality control, and progress tracking.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Core Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground">Features:</h4>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Vision Technologies
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {tech.icon}
                  <h3 className="font-semibold">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Real-World Applications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {useCases.map((useCase, index) => (
            <Card 
              key={useCase.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {useCase.applications.map((app) => (
                    <li key={app} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{app}</span>
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
          Implementation Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-500" />
                Safety Improvements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>50% reduction in safety incidents</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>Real-time hazard detection</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>Automated compliance reporting</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Operational Efficiency
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>30% faster quality inspections</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>Automated progress tracking</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>Reduced manual inspections</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Deploy Computer Vision Today
        </h2>
        <p className="text-lg text-muted-foreground">
          Implement intelligent visual monitoring to enhance safety and efficiency on your construction sites
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Brain className="mr-2 h-5 w-5" />
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