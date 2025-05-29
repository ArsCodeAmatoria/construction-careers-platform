import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedContainer } from '@/components/ui/animated-container'
import Link from "next/link";
import { 
  HardHat, 
  Construction as CraneIcon, 
  Brain, 
  Building2, 
  Truck,
  Hammer,
  Cpu,
  Plane,
  Database,
  Factory,
  Leaf,
  LineChart,
  CheckCircle
} from "lucide-react";

const careerSections = [
  {
    title: "Traditional Trades",
    description: "Master the foundational skills of construction with Red Seal certification opportunities.",
    icon: <HardHat className="h-12 w-12 text-blue-500 float" />,
    features: ["Carpentry", "Plumbing", "Electrical", "Welding"],
    href: "/programs/trades"
  },
  {
    title: "Crane Operations",
    description: "Operate state-of-the-art crane equipment in BC's growing construction industry.",
    icon: <CraneIcon className="h-12 w-12 text-orange-500 float" />,
    features: ["Tower Cranes", "Mobile Cranes", "Specialized Equipment", "Safety Certification"],
    href: "/programs/crane"
  },
  {
    title: "Heavy Equipment",
    description: "Drive and operate essential construction machinery across BC's diverse projects.",
    icon: <Truck className="h-12 w-12 text-yellow-500 float" />,
    features: ["Excavators", "Bulldozers", "Dump Trucks", "Specialized Transport"],
    href: "/programs/heavy-equipment"
  },
  {
    title: "Digital Construction",
    description: "Shape the future of construction with cutting-edge technology and innovation.",
    icon: <Cpu className="h-12 w-12 text-purple-500 float" />,
    features: ["BIM Modeling", "VR/AR Solutions", "Digital Project Management", "Smart Systems"],
    href: "/ai-automation"
  },
  {
    title: "Green Building",
    description: "Lead the transition to sustainable construction and renewable energy systems.",
    icon: <Leaf className="h-12 w-12 text-green-500 float" />,
    features: [
      "Sustainability Coordination",
      "Energy Modeling",
      "Renewable Systems",
      "Waste Management"
    ],
    href: "/technologies/green"
  }
]

const techHighlights = [
  {
    title: "BIM Technology",
    description: "Create detailed 3D models and collaborate across construction teams.",
    icon: <Database className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Aerial Surveying",
    description: "Monitor and survey construction sites with advanced aerial technology.",
    icon: <Plane className="h-8 w-8 text-green-500" />
  },
  {
    title: "VR/AR Solutions",
    description: "Visualize projects and train workers using immersive technologies.",
    icon: <Brain className="h-8 w-8 text-purple-500" />
  },
  {
    title: "Digital Project Management",
    description: "Lead construction projects with modern digital tools and methodologies.",
    icon: <Factory className="h-8 w-8 text-orange-500" />
  },
  {
    title: "Sustainable Technologies",
    description: "Implement green building solutions and renewable energy systems.",
    icon: <Leaf className="h-8 w-8 text-green-500" />
  },
  {
    title: "Energy Modeling",
    description: "Optimize building performance with advanced simulation tools.",
    icon: <LineChart className="h-8 w-8 text-blue-500" />
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl shimmer-text">
          Build Your Future in BC Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          From traditional trades to cutting-edge technology, discover rewarding careers 
          in British Columbia's thriving construction industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/careers">
            <Button size="lg" className="w-full sm:w-auto button-glow">
              <HardHat className="mr-2 h-5 w-5" />
              Explore Careers
            </Button>
          </Link>
          <Link href="/technologies">
            <Button variant="outline" size="lg" className="w-full sm:w-auto button-glow">
              <Cpu className="mr-2 h-5 w-5" />
              View Technologies
            </Button>
          </Link>
        </div>
      </section>

      {/* Career Sections */}
      <section className="w-full max-w-7xl px-4">
        <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {careerSections.map((section, index) => (
            <Link 
              key={section.title} 
              href={section.href}
              className="group"
            >
              <Card delay={index * 0.1}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {section.icon}
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </AnimatedContainer>
      </section>

      {/* Technology Highlights */}
      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Construction Technology
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {techHighlights.map((tech, index) => (
            <Card key={tech.title} delay={index * 0.08}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <CardTitle className="text-lg">{tech.title}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Journey Today
        </h2>
        <p className="text-lg text-muted-foreground">
          Whether you're interested in traditional trades or cutting-edge technology, 
          BC's construction industry offers diverse opportunities for growth and success.
        </p>
        <Link href="/careers">
          <Button size="lg" className="button-glow pulse-glow">
            <Building2 className="mr-2 h-5 w-5" />
            View All Careers
          </Button>
        </Link>
      </section>
    </div>
  );
}
