'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Brain, 
  LineChart, 
  Search, 
  Shield, 
  Clock, 
  Target, 
  Zap,
  Building,
  CheckCircle
} from "lucide-react"

const aiSolutions = [
  {
    title: "Predictive Analytics",
    description: "AI-powered insights for project planning and risk management",
    features: [
      "Cost estimation",
      "Schedule optimization",
      "Risk prediction",
      "Resource allocation"
    ],
    icon: <LineChart className="h-12 w-12 text-blue-500 float" />,
    href: "/technologies/digital-construction/ai/predictive-analytics"
  },
  {
    title: "Computer Vision",
    description: "Visual AI for site monitoring and safety",
    features: [
      "Safety compliance",
      "Progress tracking",
      "Quality control",
      "Site surveillance"
    ],
    icon: <Search className="h-12 w-12 text-green-500 float" />,
    href: "/technologies/digital-construction/ai/computer-vision"
  },
  {
    title: "Machine Learning",
    description: "Intelligent systems for construction optimization",
    features: [
      "Pattern recognition",
      "Anomaly detection",
      "Performance optimization",
      "Automated reporting"
    ],
    icon: <Brain className="h-12 w-12 text-purple-500 float" />,
    href: "/technologies/digital-construction/ai/machine-learning"
  }
]

const benefits = [
  {
    title: "Enhanced Efficiency",
    description: "Streamline processes and reduce manual work",
    icon: <Zap className="h-8 w-8 text-yellow-500 float" />
  },
  {
    title: "Improved Safety",
    description: "Proactive risk identification and prevention",
    icon: <Shield className="h-8 w-8 text-red-500 float" />
  },
  {
    title: "Better Decision Making",
    description: "Data-driven insights for project management",
    icon: <Brain className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Time Savings",
    description: "Faster project delivery through automation",
    icon: <Clock className="h-8 w-8 text-green-500 float" />
  }
]

export default function AIConstructionPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          AI in Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Transforming construction through artificial intelligence and machine learning
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {aiSolutions.map((solution, index) => (
            <Link key={solution.title} href={solution.href}>
              <Card 
                delay={index * 0.08}
                className="h-full cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Benefits of AI
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
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
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Get Started
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover how AI can transform your construction projects
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Brain className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="button-glow">
            <Building className="mr-2 h-5 w-5" />
            View Case Studies
          </Button>
        </div>
      </section>
    </div>
  )
} 