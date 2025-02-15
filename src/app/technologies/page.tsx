import { Button } from "@/components/ui/button"
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
    icon: <Cpu className="h-12 w-12 text-purple-500" />,
    href: "/technologies/digital-construction",
    features: [
      {
        title: "Artificial Intelligence",
        description: "AI-powered solutions for construction optimization",
        icon: <Brain className="h-12 w-12 text-purple-500" />,
        href: "/technologies/digital-construction/ai"
      },
      {
        title: "Robotics & Automation",
        description: "Advanced robotics and automated construction processes",
        icon: <Cog className="h-12 w-12 text-orange-500" />,
        href: "/technologies/digital-construction/robotics"
      },
      {
        title: "BIM Integration",
        description: "Advanced 3D modeling and project coordination",
        icon: <Database className="h-12 w-12 text-blue-500" />,
        href: "/technologies/digital-construction/bim"
      },
      {
        title: "Digital Project Management",
        description: "Modern tools for efficient project delivery",
        icon: <LineChart className="h-12 w-12 text-green-500" />,
        href: "/technologies/digital-construction/project-management"
      }
    ]
  },
  {
    title: "Green Technologies",
    description: "Sustainable and eco-friendly construction innovations.",
    icon: <Leaf className="h-12 w-12 text-green-500" />,
    href: "/technologies/green",
    features: [
      {
        title: "Energy Efficiency",
        description: "Optimize building energy performance",
        icon: <Zap className="h-12 w-12 text-yellow-500" />,
        href: "/technologies/green/energy-efficiency"
      },
      {
        title: "Sustainable Materials",
        description: "Eco-friendly construction materials",
        icon: <Recycle className="h-12 w-12 text-green-500" />,
        href: "/technologies/green/sustainable-materials"
      },
      {
        title: "Renewable Systems",
        description: "Clean energy integration",
        icon: <Sun className="h-12 w-12 text-orange-500" />,
        href: "/technologies/green/renewable-systems"
      },
      {
        title: "Waste Reduction",
        description: "Minimize construction waste",
        icon: <Trash2 className="h-12 w-12 text-blue-500" />,
        href: "/technologies/green/waste-reduction"
      }
    ]
  },
  {
    title: "Smart Building Technologies",
    description: "Automation and control systems for modern buildings",
    icon: <Cpu className="h-12 w-12 text-blue-500" />,
    href: "/technologies/smart-building",
    features: [
      {
        title: "IoT Systems",
        description: "Connected building systems",
        icon: <Network className="h-12 w-12 text-purple-500" />,
        href: "/technologies/smart-building/iot"
      },
      {
        title: "Energy Management",
        description: "Smart energy monitoring and control",
        icon: <Zap className="h-12 w-12 text-yellow-500" />,
        href: "/technologies/smart-building/energy"
      },
      {
        title: "Automated Controls",
        description: "Intelligent building automation",
        icon: <Settings className="h-12 w-12 text-blue-500" />,
        href: "/technologies/smart-building/automation"
      },
      {
        title: "Occupancy Optimization",
        description: "Smart space utilization",
        icon: <Users className="h-12 w-12 text-green-500" />,
        href: "/technologies/smart-building/occupancy"
      }
    ]
  }
]

const innovationHighlights = [
  {
    title: "BIM Technology",
    description: "Advanced 3D modeling and project coordination.",
    icon: <Database className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Drone Operations",
    description: "Aerial surveying and site monitoring solutions.",
    icon: <Plane className="h-8 w-8 text-green-500" />
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems for construction optimization.",
    icon: <Brain className="h-8 w-8 text-purple-500" />
  },
  {
    title: "Automation Systems",
    description: "Robotics and automated construction processes.",
    icon: <Cog className="h-8 w-8 text-orange-500" />
  }
]

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Construction Technologies
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Explore the cutting-edge technologies shaping BC's construction industry. 
          From digital innovation to sustainable solutions, discover what's building our future.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4 place-items-center">
        {technologyCategories.map((category) => (
          <div 
            key={category.title} 
            className="w-full group"
          >
            <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <Link href={category.href}>
                  <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                </Link>
                <ul className="mt-4 space-y-2 text-sm w-full">
                  {category.features.map((feature) => (
                    <li key={feature.title}>
                      <Link 
                        href={feature.href} 
                        className="flex items-center justify-center hover:text-foreground"
                      >
                        {feature.icon}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {feature.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Innovation Highlights
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {innovationHighlights.map((tech) => (
            <div 
              key={tech.title}
              className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors flex flex-col items-center text-center"
            >
              {tech.icon}
              <h3 className="mt-4 text-lg font-semibold">{tech.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Shape the Future
        </h2>
        <p className="text-lg text-muted-foreground">
          Join the technological revolution in BC's construction industry.
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