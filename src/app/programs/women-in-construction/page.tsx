import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, GraduationCap, Building, Hammer, Award, Heart } from "lucide-react"

const programs = [
  {
    title: "BC Women in Trades",
    organization: "Industry Training Authority BC",
    description: "Support, training, and mentorship for women entering construction trades.",
    icon: <Hammer className="h-12 w-12 text-purple-500" />,
    features: [
      "Skills Training",
      "Mentorship",
      "Financial Support",
      "Job Placement"
    ],
    link: "https://www.itabc.ca/women-trades/overview"
  },
  {
    title: "Women in Construction Program",
    organization: "BCIT",
    description: "Specialized construction training programs designed for women.",
    icon: <GraduationCap className="h-12 w-12 text-blue-500" />,
    features: [
      "Trade Discovery",
      "Technical Training",
      "Industry Connections",
      "Career Planning"
    ],
    link: "https://www.bcit.ca/construction/"
  },
  {
    title: "BCCWITT",
    organization: "BC Centre for Women in Trade",
    description: "Advocacy and support for women in construction trades.",
    icon: <Users className="h-12 w-12 text-green-500" />,
    features: [
      "Networking Events",
      "Resource Access",
      "Industry Advocacy",
      "Support Services"
    ],
    link: "https://bccwitt.ca/"
  }
]

const successStories = [
  {
    name: "Build Together BC",
    description: "Building a network of women in construction across British Columbia.",
    icon: <Heart className="h-8 w-8 text-red-500" />
  },
  {
    name: "Women Building Futures",
    description: "Preparing women for successful careers in construction.",
    icon: <Building className="h-8 w-8 text-blue-500" />
  },
  {
    name: "Skilled Trades Employment Program",
    description: "Supporting women's entry into construction careers.",
    icon: <Award className="h-8 w-8 text-yellow-500" />
  }
]

export default function WomenInConstructionPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Women in Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Discover programs and opportunities supporting women in BC's construction industry. 
          From skills training to mentorship, find resources to build your career.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4 place-items-center">
        {programs.map((program) => (
          <div 
            key={program.title}
            className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              {program.icon}
              <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{program.organization}</p>
              <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
              <ul className="mt-4 space-y-2 text-sm w-full">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border w-full">
                <Link href={program.link} target="_blank">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Success Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-3 place-items-center">
          {successStories.map((story) => (
            <div 
              key={story.name}
              className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors flex flex-col items-center text-center"
            >
              {story.icon}
              <h3 className="mt-4 text-lg font-semibold">{story.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Journey Today
        </h2>
        <p className="text-lg text-muted-foreground">
          Join the growing community of women building BC's future through careers in construction.
        </p>
        <Link href="/careers">
          <Button size="lg">
            <Users className="mr-2 h-5 w-5" />
            Explore Career Options
          </Button>
        </Link>
      </section>
    </div>
  )
} 