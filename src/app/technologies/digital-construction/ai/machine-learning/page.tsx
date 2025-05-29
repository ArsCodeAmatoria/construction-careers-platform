'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Brain, 
  TrendingUp, 
  Search, 
  Zap, 
  Target, 
  AlertTriangle,
  BarChart3,
  Cpu,
  CheckCircle,
  ArrowLeft,
  Building,
  FileText,
  Settings
} from "lucide-react"

const features = [
  {
    title: "Pattern Recognition",
    description: "Identify complex patterns in construction data and processes",
    details: [
      "Equipment usage patterns",
      "Worker productivity trends",
      "Material consumption analysis",
      "Project timeline patterns"
    ],
    icon: <Search className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Anomaly Detection",
    description: "Automatically identify unusual patterns and potential issues",
    details: [
      "Equipment malfunction detection",
      "Safety compliance violations",
      "Quality deviation alerts",
      "Schedule anomaly warnings"
    ],
    icon: <AlertTriangle className="h-12 w-12 text-red-500 float" />
  },
  {
    title: "Performance Optimization",
    description: "Continuously improve processes through intelligent algorithms",
    details: [
      "Resource allocation optimization",
      "Workflow efficiency improvements",
      "Energy consumption reduction",
      "Waste minimization strategies"
    ],
    icon: <TrendingUp className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Automated Reporting",
    description: "Generate intelligent insights and comprehensive reports",
    details: [
      "Progress analytics dashboards",
      "Performance metric reports",
      "Predictive maintenance alerts",
      "Cost optimization recommendations"
    ],
    icon: <FileText className="h-12 w-12 text-purple-500 float" />
  }
]

const algorithms = [
  {
    title: "Neural Networks",
    description: "Deep learning for complex construction problem solving",
    icon: <Brain className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Regression Analysis",
    description: "Statistical modeling for predictive construction insights",
    icon: <BarChart3 className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Classification Models",
    description: "Categorize and classify construction data automatically",
    icon: <Target className="h-8 w-8 text-green-500 float" />
  }
]

const applications = [
  {
    title: "Equipment Management",
    description: "Optimize equipment usage and maintenance schedules",
    benefits: [
      "30% reduction in equipment downtime",
      "Predictive maintenance scheduling",
      "Optimal equipment allocation",
      "Fuel efficiency optimization"
    ],
    icon: <Settings className="h-6 w-6 text-orange-500" />
  },
  {
    title: "Quality Prediction",
    description: "Predict and prevent quality issues before they occur",
    benefits: [
      "25% reduction in rework",
      "Early defect detection",
      "Material quality optimization",
      "Compliance assurance"
    ],
    icon: <CheckCircle className="h-6 w-6 text-green-500" />
  },
  {
    title: "Resource Optimization",
    description: "Intelligent allocation of human and material resources",
    benefits: [
      "20% improvement in productivity",
      "Optimal crew scheduling",
      "Material waste reduction",
      "Cost-effective planning"
    ],
    icon: <Target className="h-6 w-6 text-blue-500" />
  }
]

const dataTypes = [
  "Historical project data",
  "Real-time sensor information",
  "Weather and environmental data",
  "Equipment performance metrics",
  "Worker productivity data",
  "Material usage patterns",
  "Safety incident records",
  "Quality inspection results"
]

export default function MachineLearningPage() {
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
          Machine Learning
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Harness intelligent algorithms to optimize construction processes, predict outcomes, and continuously improve project performance.
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
                  <h4 className="text-sm font-semibold text-muted-foreground">Applications:</h4>
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
          ML Algorithms
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {algorithms.map((algorithm, index) => (
            <Card 
              key={algorithm.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {algorithm.icon}
                  <h3 className="font-semibold">{algorithm.title}</h3>
                  <p className="text-sm text-muted-foreground">{algorithm.description}</p>
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
          {applications.map((app, index) => (
            <Card 
              key={app.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {app.icon}
                  {app.title}
                </CardTitle>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {app.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
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
          Data Sources for ML
        </h2>
        <Card className="p-6">
          <CardContent className="p-0">
            <p className="text-sm text-muted-foreground mb-4">
              Machine learning algorithms learn from diverse construction data sources to provide intelligent insights:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {dataTypes.map((dataType, index) => (
                <div key={dataType} className="flex items-center space-x-3">
                  <Cpu className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{dataType}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Implementation Impact
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Operational Improvements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>40% improvement in decision accuracy</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>25% reduction in project delays</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Cost Benefits
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>15-20% reduction in overall costs</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>Automated process optimization</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                  <span>Reduced manual analysis time</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Implement Intelligent Construction
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your construction operations with machine learning algorithms that continuously learn and optimize
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Brain className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" size="lg" className="button-glow">
              <Building className="mr-2 h-5 w-5" />
              View Results
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 