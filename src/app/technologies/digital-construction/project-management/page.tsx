import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  LineChart, 
  Calendar, 
  FileText, 
  Users, 
  Clock, 
  Target, 
  Zap,
  Building,
  BarChart,
  Smartphone,
  Cloud,
  MessageSquare
} from "lucide-react"

const pmTools = [
  {
    title: "Project Planning & Scheduling",
    description: "Advanced digital tools for project planning and timeline management",
    features: [
      "Gantt charts",
      "Resource allocation",
      "Critical path analysis",
      "Milestone tracking"
    ],
    icon: <Calendar className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Document Management",
    description: "Centralized document control and collaboration",
    features: [
      "Version control",
      "Drawing management",
      "Document sharing",
      "Approval workflows"
    ],
    icon: <FileText className="h-12 w-12 text-green-500" />
  },
  {
    title: "Performance Analytics",
    description: "Real-time project performance monitoring and reporting",
    features: [
      "KPI tracking",
      "Progress reporting",
      "Cost monitoring",
      "Productivity analysis"
    ],
    icon: <BarChart className="h-12 w-12 text-purple-500" />
  }
]

const features = [
  {
    title: "Mobile Access",
    description: "Access project information anywhere, anytime",
    features: [
      "Field reporting",
      "Mobile inspections",
      "Real-time updates",
      "Photo documentation"
    ],
    icon: <Smartphone className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Team Collaboration",
    description: "Enhanced communication and coordination tools",
    features: [
      "Team messaging",
      "Task assignments",
      "Meeting management",
      "File sharing"
    ],
    icon: <MessageSquare className="h-12 w-12 text-red-500" />
  },
  {
    title: "Cloud Integration",
    description: "Seamless cloud-based project management",
    features: [
      "Data synchronization",
      "Remote access",
      "Automatic backups",
      "Cross-platform support"
    ],
    icon: <Cloud className="h-12 w-12 text-sky-500" />
  }
]

const benefits = [
  {
    title: "Improved Efficiency",
    description: "Streamlined workflows and reduced manual work",
    icon: <Zap className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "Better Communication",
    description: "Enhanced team collaboration and information sharing",
    icon: <Users className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Real-time Insights",
    description: "Instant access to project data and analytics",
    icon: <LineChart className="h-6 w-6 text-green-500" />
  },
  {
    title: "Time Savings",
    description: "Faster decision making and issue resolution",
    icon: <Clock className="h-6 w-6 text-purple-500" />
  }
]

export default function DigitalProjectManagementPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Digital Project Management
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Modern tools and solutions for efficient construction project management
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Core Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pmTools.map((tool) => (
            <div 
              key={tool.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {tool.icon}
                <h3 className="text-xl font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {tool.features.map((feature) => (
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

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Advanced Features
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
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
          Key Benefits
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
          Transform Your Project Management
        </h2>
        <p className="text-lg text-muted-foreground">
          Implement digital solutions to streamline your construction projects
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <LineChart className="mr-2 h-5 w-5" />
              Request Demo
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