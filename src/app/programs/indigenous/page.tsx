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
    name: "LNG Canada & Haisla Nation",
    description: "Construction and skills development partnership in Kitimat region.",
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    link: "https://www.lngcanada.ca/about-us/working-with-first-nations/"
  },
  {
    name: "Coastal GasLink & First Nations",
    description: "Partnerships with 20 First Nations along the project corridor.",
    icon: <TreePine className="h-8 w-8 text-green-500" />,
    link: "https://www.coastalgaslink.com/sustainability/indigenous-relations/"
  },
  {
    name: "Site C & Treaty 8 Nations",
    description: "Infrastructure projects with Treaty 8 First Nations.",
    icon: <Building className="h-8 w-8 text-yellow-500" />,
    link: "https://www.sitecproject.com/working-with-first-nations"
  },
  {
    name: "Tsleil-Waututh Nation Projects",
    description: "Construction initiatives in Metro Vancouver region.",
    icon: <HandshakeIcon className="h-8 w-8 text-purple-500" />,
    link: "https://twnation.ca/"
  },
  {
    name: "Squamish Nation Developments",
    description: "Major construction projects in partnership with Squamish Nation.",
    icon: <Building className="h-8 w-8 text-orange-500" />,
    link: "https://www.squamish.net/development/"
  },
  {
    name: "Musqueam Capital Corp",
    description: "Construction and development projects led by Musqueam Nation.",
    icon: <Globe className="h-8 w-8 text-red-500" />,
    link: "https://www.musqueamcapital.ca/"
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
  },
  {
    title: "First Nations Major Projects",
    description: "Supporting Indigenous-led construction projects across BC.",
    features: [
      "Capacity Building",
      "Project Management",
      "Technical Training",
      "Leadership Development"
    ]
  },
  {
    title: "Traditional Construction Methods",
    description: "Integrating traditional building practices with modern techniques.",
    features: [
      "Cultural Knowledge",
      "Sustainable Practices",
      "Local Materials",
      "Traditional Techniques"
    ]
  }
]

const successStories = [
  {
    nation: "Haisla Nation",
    project: "Cedar Valley Lodge",
    description: "Construction and operation of worker accommodation facility.",
    impact: "Created 300+ jobs and ongoing training opportunities."
  },
  {
    nation: "Squamish Nation",
    project: "Sen̓áḵw Development",
    description: "Largest First Nations economic development project in Canadian history.",
    impact: "Creating thousands of construction jobs and housing units."
  },
  {
    nation: "Tk'emlúps te Secwépemc",
    project: "Community Infrastructure",
    description: "Major infrastructure development projects.",
    impact: "Building capacity and creating sustainable employment."
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
              <div className="mt-4 pt-4 border-t border-border w-full">
                <Link href={partnership.link} target="_blank">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
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
          Join the growing community of Indigenous professionals shaping BC&apos;s construction industry.
        </p>
        <Link href="/careers">
          <Button size="lg">
            <Users className="mr-2 h-5 w-5" />
            Explore Opportunities
          </Button>
        </Link>
      </section>

      <section className="w-full max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Success Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-3 place-items-center">
          {successStories.map((story) => (
            <div 
              key={story.nation}
              className="w-full h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors"
            >
              <h3 className="text-lg font-semibold">{story.nation}</h3>
              <h4 className="text-md font-medium text-muted-foreground mt-2">{story.project}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{story.description}</p>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{story.impact}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 