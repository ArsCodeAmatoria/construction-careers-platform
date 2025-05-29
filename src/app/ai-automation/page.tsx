import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedContainer } from '@/components/ui/animated-container'
import Link from "next/link"
import { 
  Cpu, 
  Cog,
  Brain, 
  Building2, 
  Database,
  Plane,
  LineChart,
  Blocks,
  CheckCircle
} from "lucide-react"

const digitalTechnologies = [
  {
    title: "BIM Integration",
    description: "Building Information Modeling revolutionizing BC construction projects.",
    icon: <Database className="h-12 w-12 text-blue-500" />,
    features: [
      "3D Modeling",
      "Clash Detection",
      "Project Coordination",
      "Digital Twin Creation"
    ]
  },
  {
    title: "AI in Construction",
    description: "Today's construction industry is being transformed by artificial intelligence...",
    icon: <Brain className="h-12 w-12 text-purple-500" />,
    features: [
      "Predictive Analytics",
      "Risk Assessment",
      "Resource Optimization",
      "Safety Monitoring"
    ]
  },
  {
    title: "Robotics & Automation",
    description: "Advanced robotics enhancing construction efficiency and safety.",
    icon: <Cog className="h-12 w-12 text-orange-500" />,
    features: [
      "Automated Equipment",
      "Prefabrication",
      "Quality Control",
      "Safety Systems"
    ]
  },
  {
    title: "Drone Technology",
    description: "Aerial surveying and monitoring for construction sites.",
    icon: <Plane className="h-12 w-12 text-green-500" />,
    features: [
      "Site Surveys",
      "Progress Monitoring",
      "Safety Inspections",
      "Data Collection"
    ]
  },
  {
    title: "Smart Buildings",
    description: "Integrating IoT and automation in modern construction.",
    icon: <Building2 className="h-12 w-12 text-yellow-500" />,
    features: [
      "IoT Integration",
      "Energy Management",
      "Occupancy Systems",
      "Predictive Maintenance"
    ]
  },
  {
    title: "Digital Project Management",
    description: "Advanced tools for construction project coordination.",
    icon: <Blocks className="h-12 w-12 text-red-500" />,
    features: [
      "Real-time Tracking",
      "Team Collaboration",
      "Resource Management",
      "Documentation"
    ]
  }
]

const bcProjects = [
  {
    title: "Vancouver Smart City Initiative",
    description: "Digital infrastructure integration in urban development.",
    icon: <Cpu className="h-8 w-8 text-blue-500" />
  },
  {
    title: "BC Construction Innovation Hub",
    description: "Advancing digital construction technologies across BC.",
    icon: <Brain className="h-8 w-8 text-purple-500" />
  },
  {
    title: "Digital Twin Projects",
    description: "Creating virtual replicas of BC infrastructure.",
    icon: <LineChart className="h-8 w-8 text-green-500" />
  }
]

export default function DigitalConstructionPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Digital Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Explore how digital technologies and automation are transforming BC's construction industry. 
          From AI to robotics, discover the future of construction.
        </p>
      </section>

      <section className="w-full max-w-7xl px-4">
        <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {digitalTechnologies.map((tech, index) => (
            <Card key={tech.title} delay={index * 0.1}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <CardTitle className="text-xl">{tech.title}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          BC Innovation Projects
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.15}>
          {bcProjects.map((project, index) => (
            <Card key={project.title} delay={index * 0.15}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Join the Digital Revolution
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover careers in digital construction and help shape the future of BC's building industry.
        </p>
        <Link href="/careers?category=technology">
          <Button size="lg">
            <Cpu className="mr-2 h-5 w-5" />
            View Tech Careers
          </Button>
        </Link>
      </section>
    </div>
  )
} 