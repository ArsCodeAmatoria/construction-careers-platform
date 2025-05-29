'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Cpu, 
  Leaf, 
  Building2, 
  Database,
  Plane,
  LineChart,
  Cog,
  Brain,
  Zap,
  Recycle,
  Sun,
  Trash2,
  Network,
  Settings,
  Users
} from "lucide-react"

const technologyCategories = [
  {
    title: "Digital Construction",
    description: "AI, automation, and digital tools transforming construction.",
    icon: <Cpu className="h-12 w-12 text-purple-500 float" />,
    href: "/technologies/digital-construction",
    features: [
      {
        title: "Artificial Intelligence",
        description: "AI-powered solutions for construction optimization",
        icon: <Brain className="h-8 w-8 text-purple-500 float" />,
        href: "/technologies/digital-construction/ai"
      },
      {
        title: "Robotics & Automation",
        description: "Advanced robotics and automated construction processes",
        icon: <Cog className="h-8 w-8 text-orange-500 float" />,
        href: "/technologies/digital-construction/robotics"
      },
      {
        title: "BIM Integration",
        description: "Advanced 3D modeling and project coordination",
        icon: <Database className="h-8 w-8 text-blue-500 float" />,
        href: "/technologies/digital-construction/bim"
      },
      {
        title: "Digital Project Management",
        description: "Modern tools for efficient project delivery",
        icon: <LineChart className="h-8 w-8 text-green-500 float" />,
        href: "/technologies/digital-construction/project-management"
      }
    ]
  },
  {
    title: "Green Technologies",
    description: "Sustainable and eco-friendly construction innovations.",
    icon: <Leaf className="h-12 w-12 text-green-500 float" />,
    href: "/technologies/green",
    features: [
      {
        title: "Energy Efficiency",
        description: "Optimize building energy performance",
        icon: <Zap className="h-8 w-8 text-yellow-500 float" />,
        href: "/technologies/green/energy-efficiency"
      },
      {
        title: "Sustainable Materials",
        description: "Eco-friendly construction materials",
        icon: <Recycle className="h-8 w-8 text-green-500 float" />,
        href: "/technologies/green/sustainable-materials"
      },
      {
        title: "Renewable Systems",
        description: "Clean energy integration",
        icon: <Sun className="h-8 w-8 text-orange-500 float" />,
        href: "/technologies/green/renewable-systems"
      },
      {
        title: "Waste Reduction",
        description: "Minimize construction waste",
        icon: <Trash2 className="h-8 w-8 text-blue-500 float" />,
        href: "/technologies/green/waste-reduction"
      }
    ]
  },
  {
    title: "Smart Building Technologies",
    description: "Automation and control systems for modern buildings",
    icon: <Building2 className="h-12 w-12 text-blue-500 float" />,
    href: "/technologies/smart-building",
    features: [
      {
        title: "IoT Systems",
        description: "Connected building systems",
        icon: <Network className="h-8 w-8 text-purple-500 float" />,
        href: "/technologies/smart-building/iot"
      },
      {
        title: "Energy Management",
        description: "Smart energy monitoring and control",
        icon: <Zap className="h-8 w-8 text-yellow-500 float" />,
        href: "/technologies/smart-building/energy"
      },
      {
        title: "Automated Controls",
        description: "Intelligent building automation",
        icon: <Settings className="h-8 w-8 text-blue-500 float" />,
        href: "/technologies/smart-building/automation"
      },
      {
        title: "Occupancy Optimization",
        description: "Smart space utilization",
        icon: <Users className="h-8 w-8 text-green-500 float" />,
        href: "/technologies/smart-building/occupancy"
      }
    ]
  }
]

const innovationHighlights = [
  {
    title: "BIM Technology",
    description: "Advanced 3D modeling and project coordination.",
    icon: <Database className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Drone Operations",
    description: "Aerial surveying and site monitoring solutions.",
    icon: <Plane className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems for construction optimization.",
    icon: <Brain className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Automation Systems",
    description: "Robotics and automated construction processes.",
    icon: <Cog className="h-8 w-8 text-orange-500 float" />
  }
]

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none shimmer-text">
              Construction Technologies
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              BC&apos;s construction industry is evolving with cutting-edge technologies. 
              From digital innovations to sustainable solutions, we&apos;re building the future 
              of construction in British Columbia.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12 px-4 md:px-6">
        <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl place-items-center" stagger={0.08}>
          {technologyCategories.map((category, index) => (
            <Card key={category.title} delay={index * 0.08} className="w-full h-full">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <Link href={category.href} className="block">
                  <CardTitle className="text-xl hover:text-primary transition-colors">{category.title}</CardTitle>
                  <CardDescription className="mt-2">{category.description}</CardDescription>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <Link 
                      key={feature.title}
                      href={feature.href} 
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors group"
                    >
                      <div className="mr-3">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                          {feature.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {feature.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>

        <section className="w-full max-w-7xl px-4 space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            Innovation Highlights
          </h2>
          <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center" stagger={0.08}>
            {innovationHighlights.map((tech, index) => (
              <Card key={tech.title} delay={index * 0.08} className="w-full h-full">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{tech.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </AnimatedContainer>
        </section>

        <section className="w-full max-w-7xl space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              Shape the Future
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Join the technological revolution in BC&apos;s construction industry.
            </p>
            <Link href="/careers?category=technology">
              <Button size="lg" className="button-glow pulse-glow">
                <Cpu className="mr-2 h-5 w-5" />
                View Tech Careers
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 