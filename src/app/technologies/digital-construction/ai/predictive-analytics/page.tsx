'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  LineChart, 
  TrendingUp, 
  Calculator, 
  Clock, 
  AlertTriangle, 
  Target,
  BarChart3,
  PieChart,
  CheckCircle,
  ArrowLeft,
  Brain,
  Building
} from "lucide-react"

const features = [
  {
    title: "Cost Estimation",
    description: "AI-powered accurate project cost predictions",
    details: [
      "Historical data analysis",
      "Real-time cost tracking",
      "Risk-adjusted budgeting",
      "Material price forecasting"
    ],
    icon: <Calculator className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Schedule Optimization",
    description: "Intelligent project timeline planning",
    details: [
      "Critical path analysis",
      "Resource scheduling",
      "Weather impact prediction",
      "Milestone tracking"
    ],
    icon: <Clock className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Risk Prediction",
    description: "Proactive identification of project risks",
    details: [
      "Safety hazard detection",
      "Quality issue prediction",
      "Delay risk assessment",
      "Budget overrun alerts"
    ],
    icon: <AlertTriangle className="h-12 w-12 text-red-500 float" />
  },
  {
    title: "Resource Allocation",
    description: "Optimal distribution of workforce and materials",
    details: [
      "Crew optimization",
      "Equipment scheduling",
      "Material logistics",
      "Productivity analysis"
    ],
    icon: <Target className="h-12 w-12 text-purple-500 float" />
  }
]

const analytics = [
  {
    title: "Performance Metrics",
    description: "Track and analyze project performance indicators",
    icon: <BarChart3 className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Trend Analysis",
    description: "Identify patterns and trends in construction data",
    icon: <TrendingUp className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Predictive Models",
    description: "Build models for future project outcomes",
    icon: <PieChart className="h-8 w-8 text-purple-500 float" />
  }
]

const benefits = [
  "Reduce project costs by 15-25%",
  "Improve schedule accuracy by 30%",
  "Decrease safety incidents by 40%",
  "Enhance resource utilization by 20%",
  "Accelerate decision-making process",
  "Minimize project delays and overruns"
]

export default function PredictiveAnalyticsPage() {
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
          Predictive Analytics
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Harness the power of AI-driven insights to predict project outcomes, optimize resources, and minimize risks in construction projects.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Core Features
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
                  <h4 className="text-sm font-semibold text-muted-foreground">Capabilities:</h4>
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
          Analytics Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {analytics.map((analytic, index) => (
            <Card 
              key={analytic.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {analytic.icon}
                  <h3 className="font-semibold">{analytic.title}</h3>
                  <p className="text-sm text-muted-foreground">{analytic.description}</p>
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
          Ready to Transform Your Projects?
        </h2>
        <p className="text-lg text-muted-foreground">
          Implement predictive analytics to revolutionize your construction planning and execution
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
              View Success Stories
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 