import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Brain, 
  LineChart, 
  Search, 
  Shield, 
  Clock, 
  Target, 
  Zap,
  Building 
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
    icon: <LineChart className="h-12 w-12 text-blue-500" />
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
    icon: <Search className="h-12 w-12 text-green-500" />
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
    icon: <Brain className="h-12 w-12 text-purple-500" />
  }
]

const benefits = [
  {
    title: "Enhanced Efficiency",
    description: "Streamline processes and reduce manual work",
    icon: <Zap className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "Improved Safety",
    description: "Proactive risk identification and prevention",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    title: "Better Decision Making",
    description: "Data-driven insights for project management",
    icon: <Brain className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Time Savings",
    description: "Faster project delivery through automation",
    icon: <Clock className="h-6 w-6 text-green-500" />
  }
]

export default function AIConstructionPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          AI in Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Transforming construction through artificial intelligence and machine learning
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {aiSolutions.map((solution) => (
            <div 
              key={solution.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {solution.icon}
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Benefits of AI
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="p-6 border border-border rounded-lg"
            >
              <div className="flex flex-col items-center space-y-3">
                {benefit.icon}
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Get Started
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover how AI can transform your construction projects
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Brain className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <Building className="mr-2 h-5 w-5" />
            View Case Studies
          </Button>
        </div>
      </section>
    </div>
  )
} 