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
  Brain
} from "lucide-react"

const technologyCategories = [
  {
    title: "Digital Construction",
    description: "AI, automation, and digital tools transforming construction.",
    icon: <Cpu className="h-12 w-12 text-purple-500" />,
    href: "/ai-automation",
    features: [
      "Artificial Intelligence",
      "Robotics & Automation",
      "BIM Integration",
      "Digital Project Management"
    ]
  },
  {
    title: "Green Technologies",
    description: "Sustainable and eco-friendly construction innovations.",
    icon: <Leaf className="h-12 w-12 text-green-500" />,
    href: "/technologies/green",
    features: [
      "Energy Efficiency",
      "Sustainable Materials",
      "Renewable Systems",
      "Waste Reduction"
    ]
  },
  {
    title: "Smart Buildings",
    description: "Intelligent building systems and IoT integration.",
    icon: <Building2 className="h-12 w-12 text-blue-500" />,
    href: "/technologies/smart-buildings",
    features: [
      "IoT Systems",
      "Energy Management",
      "Automated Controls",
      "Occupancy Optimization"
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
          <Link 
            key={category.title} 
            href={category.href}
            className="w-full group"
          >
            <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                <ul className="mt-4 space-y-2 text-sm w-full">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center">
                      <Cpu className="h-4 w-4 mr-2 text-muted-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
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