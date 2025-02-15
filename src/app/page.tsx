import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  HardHat, 
  Construction as CraneIcon, 
  Brain, 
  Building2, 
  Truck,
  Hammer,
  Cpu,
  Drone,
  HardDrive,
  Factory
} from "lucide-react";

const careerSections = [
  {
    title: "Traditional Trades",
    description: "Master the foundational skills of construction with Red Seal certification opportunities.",
    icon: <HardHat className="h-12 w-12 text-blue-500" />,
    features: ["Carpentry", "Plumbing", "Electrical", "Welding"],
    href: "/careers?category=trades"
  },
  {
    title: "Crane Operations",
    description: "Operate state-of-the-art crane equipment in BC's growing construction industry.",
    icon: <CraneIcon className="h-12 w-12 text-orange-500" />,
    features: ["Tower Cranes", "Mobile Cranes", "Specialized Equipment", "Safety Certification"],
    href: "/careers?category=crane-operations"
  },
  {
    title: "Heavy Equipment",
    description: "Drive and operate essential construction machinery across BC's diverse projects.",
    icon: <Truck className="h-12 w-12 text-yellow-500" />,
    features: ["Excavators", "Bulldozers", "Dump Trucks", "Specialized Transport"],
    href: "/careers?category=heavy-equipment"
  },
  {
    title: "Digital Construction",
    description: "Shape the future of construction with cutting-edge technology and innovation.",
    icon: <Cpu className="h-12 w-12 text-purple-500" />,
    features: ["BIM Modeling", "VR/AR Solutions", "Digital Project Management", "Smart Systems"],
    href: "/careers?category=technology"
  }
]

const techHighlights = [
  {
    title: "BIM Technology",
    description: "Create detailed 3D models and collaborate across construction teams.",
    icon: <HardDrive className="h-8 w-8 text-blue-500" />
  },
  {
    title: "Drone Operations",
    description: "Monitor and survey construction sites with advanced aerial technology.",
    icon: <Drone className="h-8 w-8 text-green-500" />
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
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Build Your Future in BC Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          From traditional trades to cutting-edge technology, discover rewarding careers 
          in British Columbia's thriving construction industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/careers">
            <Button size="lg" className="w-full sm:w-auto">
              <HardHat className="mr-2 h-5 w-5" />
              Explore Careers
            </Button>
          </Link>
          <Link href="/technologies">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Cpu className="mr-2 h-5 w-5" />
              View Technologies
            </Button>
          </Link>
        </div>
      </section>

      {/* Career Sections */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl px-4">
        {careerSections.map((section) => (
          <Link 
            key={section.title} 
            href={section.href}
            className="group"
          >
            <div className="flex flex-col items-center p-6 border rounded-lg bg-card text-card-foreground hover:shadow-md transition-shadow">
              {section.icon}
              <h3 className="mt-4 text-xl font-semibold">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">{section.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {section.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Hammer className="h-4 w-4 mr-2 text-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </section>

      {/* Technology Highlights */}
      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Construction Technology
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techHighlights.map((tech) => (
            <div 
              key={tech.title}
              className="p-6 border rounded-lg bg-card text-card-foreground"
            >
              {tech.icon}
              <h3 className="mt-4 text-lg font-semibold">{tech.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
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
          <Button size="lg">
            <Building2 className="mr-2 h-5 w-5" />
            View All Careers
          </Button>
        </Link>
      </section>
    </div>
  );
}
