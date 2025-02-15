import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Users, 
  GraduationCap, 
  Building, 
  Hammer, 
  Award, 
  HandshakeIcon, 
  TreePine,
  Globe
} from "lucide-react"

const programs = [
  {
    title: "Indigenous Skills Training",
    organization: "Industry Training Authority BC",
    description: "Specialized construction training programs for Indigenous communities across BC.",
    icon: <Hammer className="h-12 w-12 text-purple-500" />,
    features: [
      "Cultural Integration",
      "Skills Development",
      "Community Support",
      "Job Placement"
    ],
    link: "https://www.itabc.ca/indigenous-people-trades/overview"
  },
  {
    title: "First Nations Construction Program",
    organization: "BC Construction Association",
    description: "Construction training and employment initiatives for First Nations communities.",
    icon: <Building className="h-12 w-12 text-blue-500" />,
    features: [
      "Traditional Knowledge",
      "Modern Construction",
      "Community Projects",
      "Industry Partnerships"
    ],
    link: "https://www.bccassn.com/jobs-careers/first-nations/"
  },
  {
    title: "Indigenous Apprenticeship",
    organization: "Aboriginal Skills Group",
    description: "Apprenticeship programs connecting Indigenous workers with construction opportunities.",
    icon: <GraduationCap className="h-12 w-12 text-green-500" />,
    features: [
      "Mentorship",
      "Cultural Support",
      "Skills Training",
      "Career Development"
    ],
    link: "https://aboriginalskillsgroup.ca/"
  }
]

const partnerships = [
  {
    name: "LNG Canada Indigenous Relations",
    description: "Construction partnerships with First Nations in northern BC.",
    icon: <Globe className="h-8 w-8 text-blue-500" />
  },
  {
    name: "BC Hydro Indigenous Initiatives",
    description: "Infrastructure projects with Indigenous communities.",
    icon: <TreePine className="h-8 w-8 text-green-500" />
  },
  {
    name: "First Nations Major Projects Coalition",
    description: "Supporting Indigenous participation in construction projects.",
    icon: <HandshakeIcon className="h-8 w-8 text-yellow-500" />
  }
]

const initiatives = [
  {
    title: "Indigenous Construction Training",
    description: "Comprehensive training programs designed with Indigenous communities.",
    features: [
      "Traditional Knowledge Integration",
      "Community-Based Learning",
      "Industry Certification",
      "Local Project Focus"
    ]
  },
  {
    title: "Community Partnerships",
    description: "Building relationships between construction industry and First Nations.",
    features: [
      "Joint Ventures",
      "Knowledge Sharing",
      "Economic Development",
      "Sustainable Growth"
    ]
  },
  {
    title: "Cultural Integration",
    description: "Incorporating Indigenous perspectives in construction practices.",
    features: [
      "Traditional Methods",
      "Environmental Stewardship",
      "Community Consultation",
      "Cultural Awareness"
    ]
  }
]

export default function IndigenousProgramsPage() {
  return (
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Indigenous Construction Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Discover construction programs and partnerships supporting Indigenous communities 
          across British Columbia. Building careers while honoring traditional knowledge.
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
          Industry Partnerships
        </h2>
        <div className="grid gap-6 md:grid-cols-3 place-items-center">
          {partnerships.map((partnership) => (
            <div 
              key={partnership.name}
              className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors flex flex-col items-center text-center"
            >
              {partnership.icon}
              <h3 className="mt-4 text-lg font-semibold">{partnership.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{partnership.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Key Initiatives
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.title}
              className="border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <h3 className="text-lg font-semibold">{initiative.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{initiative.description}</p>
              <ul className="mt-4 space-y-2">
                {initiative.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Build Your Future
        </h2>
        <p className="text-lg text-muted-foreground">
          Join the growing community of Indigenous professionals shaping BC's construction industry.
        </p>
        <Link href="/careers">
          <Button size="lg">
            <Users className="mr-2 h-5 w-5" />
            Explore Opportunities
          </Button>
        </Link>
      </section>
    </div>
  )
} 