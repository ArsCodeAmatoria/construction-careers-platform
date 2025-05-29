'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Clock, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  LineChart, 
  Settings,
  CheckCircle,
  ArrowLeft,
  Building,
  Target,
  Shield,
  Globe,
  Zap,
  Calculator,
  PieChart,
  Activity,
  Timer,
  Coins,
  Receipt,
  FileSpreadsheet
} from "lucide-react"

const integrationFeatures = [
  {
    title: "4D Scheduling Integration",
    description: "Dynamic time-based visualization and construction sequencing",
    features: [
      "Timeline-based model animation",
      "Construction sequence visualization",
      "Critical path analysis",
      "Resource allocation scheduling",
      "Progress tracking and comparison"
    ],
    specifications: {
      timeline: "Unlimited project duration",
      precision: "Hour-level accuracy",
      visualization: "Real-time 4D animation"
    },
    icon: <Calendar className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "5D Cost Integration",
    description: "Real-time cost analysis and budget management",
    features: [
      "Automated quantity takeoffs",
      "Real-time cost estimation",
      "Budget tracking and forecasting",
      "Cost variance analysis",
      "Change order management"
    ],
    specifications: {
      accuracy: "±3% cost estimation",
      tracking: "Real-time cost updates",
      integration: "ERP system connectivity"
    },
    icon: <DollarSign className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Resource Optimization",
    description: "AI-powered resource planning and optimization",
    features: [
      "Resource demand forecasting",
      "Equipment scheduling optimization",
      "Labor allocation planning",
      "Material delivery scheduling",
      "Capacity planning analysis"
    ],
    specifications: {
      optimization: "AI-powered algorithms",
      efficiency: "30% resource optimization",
      planning: "Multi-project coordination"
    },
    icon: <Target className="h-12 w-12 text-purple-500 float" />
  },
  {
    title: "Performance Analytics",
    description: "Advanced project performance monitoring and analytics",
    features: [
      "Real-time project dashboards",
      "Performance trend analysis",
      "Predictive project insights",
      "Risk assessment metrics",
      "ROI optimization tracking"
    ],
    specifications: {
      analytics: "Real-time data processing",
      reporting: "Automated report generation",
      insights: "Predictive analytics"
    },
    icon: <BarChart3 className="h-12 w-12 text-orange-500 float" />
  }
]

const schedulingWorkflows = [
  {
    title: "Construction Sequencing",
    description: "Visual construction sequence planning and optimization",
    capabilities: [
      "Phase-based construction planning",
      "Trade coordination scheduling",
      "Critical path optimization",
      "Weather impact analysis"
    ],
    benefits: [
      "30% reduction in project duration",
      "Improved schedule reliability",
      "Enhanced coordination efficiency"
    ],
    icon: <Clock className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Resource Planning",
    description: "Comprehensive resource planning and allocation",
    capabilities: [
      "Labor resource optimization",
      "Equipment utilization planning",
      "Material delivery coordination",
      "Subcontractor scheduling"
    ],
    benefits: [
      "25% improvement in resource efficiency",
      "Reduced idle time",
      "Optimized project costs"
    ],
    icon: <Activity className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Progress Monitoring",
    description: "Real-time progress tracking and performance analysis",
    capabilities: [
      "Automated progress measurement",
      "Schedule variance analysis",
      "Performance benchmarking",
      "Predictive completion dates"
    ],
    benefits: [
      "95% schedule accuracy",
      "Proactive issue identification",
      "Enhanced project control"
    ],
    icon: <TrendingUp className="h-8 w-8 text-purple-500 float" />
  }
]

const costManagement = [
  {
    title: "Automated Takeoffs",
    description: "AI-powered quantity and material takeoffs",
    features: [
      "3D model-based quantities",
      "Automated material calculations",
      "Real-time quantity updates",
      "Multi-discipline takeoffs"
    ],
    icon: <Calculator className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Budget Tracking",
    description: "Real-time budget monitoring and control",
    features: [
      "Live cost tracking",
      "Budget variance alerts",
      "Cash flow forecasting",
      "Change order management"
    ],
    icon: <PieChart className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Cost Analytics",
    description: "Advanced cost analysis and reporting",
    features: [
      "Cost trend analysis",
      "Performance benchmarking",
      "ROI optimization",
      "Predictive cost modeling"
    ],
    icon: <LineChart className="h-8 w-8 text-purple-500 float" />
  }
]

const applications = [
  {
    title: "Large Infrastructure Projects",
    description: "Complex infrastructure project management",
    benefits: [
      "Multi-phase construction planning",
      "Resource optimization across phases",
      "Long-term budget management",
      "Stakeholder coordination"
    ],
    metrics: "40% improvement in project delivery",
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Commercial Construction",
    description: "Commercial building project optimization",
    benefits: [
      "Fast-track construction scheduling",
      "Trade coordination efficiency",
      "Cost control optimization",
      "Quality assurance integration"
    ],
    metrics: "35% reduction in construction time",
    icon: <Globe className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Renovation Projects",
    description: "Complex renovation and retrofit management",
    benefits: [
      "Phased construction planning",
      "Occupied space coordination",
      "Cost-effective renovation strategies",
      "Minimal disruption scheduling"
    ],
    metrics: "50% reduction in renovation costs",
    icon: <Zap className="h-8 w-8 text-purple-500 float" />
  }
]

const integrationTools = [
  {
    title: "Microsoft Project",
    features: ["Schedule integration", "Resource management", "Critical path analysis"],
    description: "Professional project scheduling"
  },
  {
    title: "Primavera P6",
    features: ["Enterprise scheduling", "Risk analysis", "Portfolio management"],
    description: "Enterprise project management"
  },
  {
    title: "Procore",
    features: ["Field management", "Cost tracking", "Document control"],
    description: "Construction management platform"
  },
  {
    title: "Sage 300",
    features: ["Financial management", "Cost accounting", "Budget control"],
    description: "Construction ERP integration"
  }
]

const benefits = [
  "95% improvement in schedule accuracy",
  "40% reduction in project costs",
  "Real-time project visibility",
  "Automated cost tracking",
  "Enhanced resource optimization",
  "Predictive project analytics"
]

export default function FourDFiveDIntegrationPage() {
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
          4D/5D Integration
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Advanced time and cost integration platform combining BIM modeling with dynamic scheduling and real-time cost management for comprehensive project control and optimization.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Integration Features
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {integrationFeatures.map((feature, index) => (
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
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Scheduling Workflows
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {schedulingWorkflows.map((workflow, index) => (
            <Card 
              key={workflow.title}
              delay={index * 0.08}
              className="text-center h-full"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {workflow.icon}
                  <h3 className="font-semibold">{workflow.title}</h3>
                  <p className="text-sm text-muted-foreground">{workflow.description}</p>
                  
                  <div className="w-full space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Capabilities:</h4>
                      <ul className="space-y-1 text-xs">
                        {workflow.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center">
                            <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-xs">
                        {workflow.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-primary">
                            <CheckCircle className="h-2 w-2 mr-2 text-primary flex-shrink-0" />
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
          Cost Management Tools
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {costManagement.map((tool, index) => (
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
                    {tool.features.map((feature) => (
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
          Project Applications
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
          Platform Integrations
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {integrationTools.map((tool, index) => (
            <Card 
              key={tool.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-3">
                  <FileSpreadsheet className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-sm">{tool.title}</h3>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                  <ul className="space-y-1 text-xs">
                    {tool.features.map((feature) => (
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
          Optimize Time & Cost Management
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your project delivery with advanced 4D/5D integration for enhanced scheduling and cost control
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Integration Demo
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