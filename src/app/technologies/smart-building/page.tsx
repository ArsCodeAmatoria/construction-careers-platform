import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Cpu, 
  Wifi, 
  Lightbulb, 
  Shield, 
  BarChart, 
  ThermometerSun, 
  Lock, 
  Settings 
} from "lucide-react"

const smartTechnologies = [
  {
    title: "Building Automation Systems",
    description: "Integrated control systems for building operations",
    features: [
      "HVAC automation",
      "Lighting control",
      "Energy management",
      "Remote monitoring"
    ],
    icon: <Settings className="h-12 w-12 text-blue-500" />
  },
  {
    title: "IoT Sensors & Analytics",
    description: "Smart sensors and data analytics for building performance",
    features: [
      "Occupancy tracking",
      "Environmental monitoring",
      "Predictive maintenance",
      "Real-time analytics"
    ],
    icon: <Cpu className="h-12 w-12 text-green-500" />
  },
  {
    title: "Energy Management",
    description: "Intelligent systems for optimal energy usage",
    features: [
      "Energy consumption tracking",
      "Peak demand management",
      "Renewable integration",
      "Cost optimization"
    ],
    icon: <ThermometerSun className="h-12 w-12 text-orange-500" />
  }
]

const benefits = [
  {
    title: "Operational Efficiency",
    description: "Optimize building operations through automation and smart controls",
    icon: <BarChart className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Energy Savings",
    description: "Reduce energy consumption and operating costs",
    icon: <Lightbulb className="h-6 w-6 text-green-500" />
  },
  {
    title: "Enhanced Security",
    description: "Advanced security systems and access control",
    icon: <Lock className="h-6 w-6 text-red-500" />
  },
  {
    title: "Improved Comfort",
    description: "Better indoor environment quality and occupant comfort",
    icon: <ThermometerSun className="h-6 w-6 text-orange-500" />
  }
]

export default function SmartBuildingPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Smart Building Technologies
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Next-generation building automation and control systems for modern construction
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {smartTechnologies.map((tech) => (
            <div 
              key={tech.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {tech.icon}
                <h3 className="text-xl font-semibold">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
                <ul className="w-full space-y-2 text-sm">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Wifi className="h-4 w-4 mr-2 text-muted-foreground" />
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
          Get Started
        </h2>
        <p className="text-lg text-muted-foreground">
          Learn how smart building technologies can transform your construction projects
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <Shield className="mr-2 h-5 w-5" />
              Request Consultation
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <Cpu className="mr-2 h-5 w-5" />
            View Solutions
          </Button>
        </div>
      </section>
    </div>
  )
} 