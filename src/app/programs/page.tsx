import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Users, 
  GraduationCap, 
  Building, 
  Shield,
  Globe,
  Heart,
  Target,
  HandshakeIcon,
  Blocks,
  ArrowRightCircle,
  Building2,
  HardHat,
  Briefcase,
  School,
  Factory,
  BookOpen,
  Construction,
  Users2,
  Plane,
  Box
} from "lucide-react"

const programCategories = [
  {
    title: "Career Entry Programs",
    description: "Starting your journey in construction",
    partners: [
      { 
        name: "WorkBC", 
        icon: <Briefcase className="h-12 w-12 text-blue-500" />
      },
      { 
        name: "BC Construction Association", 
        icon: <Building2 className="h-12 w-12 text-orange-500" />
      },
      { 
        name: "Industry Training Authority BC", 
        icon: <HardHat className="h-12 w-12 text-green-500" />
      }
    ],
    funding: {
      sources: [
        {
          name: "WorkBC Training Grants",
          amount: "Up to $10,000 per participant",
          eligibility: "BC residents, unemployed or underemployed"
        },
        {
          name: "BC Access Grant",
          amount: "Up to $4,000 per year",
          eligibility: "Low to middle income BC students"
        }
      ],
      support: [
        "Living allowance during training",
        "Transportation assistance",
        "Tool and equipment subsidies",
        "Childcare support"
      ]
    },
    programs: [
      {
        title: "Apprenticeships",
        description: "Start your career with hands-on training and mentorship",
        icon: <Users className="h-12 w-12 text-blue-500" />,
        href: "/programs/apprenticeships"
      },
      {
        title: "Entry Level Programs",
        description: "Begin your construction journey with no prior experience",
        icon: <GraduationCap className="h-12 w-12 text-green-500" />,
        href: "/programs/entry-level"
      },
      {
        title: "Training Programs",
        description: "Develop new skills and certifications",
        icon: <BookOpen className="h-12 w-12 text-purple-500" />,
        href: "/programs/training"
      },
      {
        title: "BIM Integration",
        description: "Learn Building Information Modeling for modern construction",
        icon: <Box className="h-12 w-12 text-indigo-500" />,
        href: "/programs/bim-integration"
      },
      {
        title: "Women in Construction",
        description: "Programs designed to support women in the industry",
        icon: <Users2 className="h-12 w-12 text-pink-500" />,
        href: "/programs/women-in-construction"
      },
      {
        title: "Indigenous Programs",
        description: "Opportunities and support for Indigenous communities",
        icon: <Building2 className="h-12 w-12 text-orange-500" />,
        href: "/programs/indigenous"
      },
      {
        title: "Newcomers to Canada",
        description: "Resources for international construction professionals",
        icon: <Plane className="h-12 w-12 text-sky-500" />,
        href: "/programs/newcomers"
      },
      {
        title: "Accessibility Programs",
        description: "Inclusive opportunities in construction",
        icon: <Heart className="h-12 w-12 text-red-500" />,
        href: "/programs/accessibility"
      },
      {
        title: "Union Training",
        description: "Union-sponsored training and development",
        icon: <Building className="h-12 w-12 text-yellow-500" />,
        href: "/programs/union-training"
      }
    ]
  },
  {
    title: "Specialized Programs",
    description: "Targeted support for diverse groups",
    partners: [
      { 
        name: "BC Construction Association", 
        icon: <Building2 className="h-12 w-12 text-orange-500" />
      },
      { 
        name: "WorkSafeBC", 
        icon: <Shield className="h-12 w-12 text-red-500" />
      },
      { 
        name: "Industry Training Authority", 
        icon: <HardHat className="h-12 w-12 text-green-500" />
      }
    ],
    programs: [
      {
        title: "Women in Construction",
        partners: [
          "BC Centre for Women in Trades",
          "BCIT Women in Trades",
          "Women Building Futures",
          "Build TogetHER BC"
        ],
        description: "Supporting women entering and advancing in construction.",
        icon: <Users className="h-12 w-12 text-purple-500" />,
        href: "/programs/women-in-construction",
        features: [
          "Skills Training",
          "Mentorship",
          "Industry Networks",
          "Career Development"
        ]
      },
      {
        title: "Indigenous Programs",
        partners: [
          "Aboriginal Skills Group",
          "First Nations Major Projects Coalition",
          "Indigenous Skills Training Society",
          "BC First Nations Construction Council"
        ],
        description: "Construction programs supporting Indigenous communities.",
        icon: <HandshakeIcon className="h-12 w-12 text-green-500" />,
        href: "/programs/indigenous",
        features: [
          "Cultural Integration",
          "Community Partnerships",
          "Skills Development",
          "Traditional Knowledge"
        ]
      },
      {
        title: "Veterans Programs",
        partners: [
          "Veterans Affairs Canada",
          "Helmets to Hardhats Canada",
          "BC Veterans Transition Network",
          "Canadian Armed Forces Transition Group"
        ],
        description: "Supporting veterans transitioning to construction careers.",
        icon: <Shield className="h-12 w-12 text-red-500" />,
        href: "/programs/veterans",
        features: [
          "Skills Translation",
          "Industry Placement",
          "Training Programs",
          "Veteran Networks"
        ]
      }
    ]
  },
  {
    title: "Professional Development",
    description: "Advance your construction career",
    partners: [
      { 
        name: "BCIT", 
        icon: <School className="h-12 w-12 text-blue-500" />
      },
      { 
        name: "BC Construction Safety Alliance", 
        icon: <Shield className="h-12 w-12 text-red-500" />
      },
      { 
        name: "BC Building Trades", 
        icon: <Construction className="h-12 w-12 text-yellow-500" />
      }
    ],
    programs: [
      {
        title: "Leadership Development",
        description: "Developing construction industry leaders.",
        icon: <Target className="h-12 w-12 text-purple-500" />,
        href: "/programs/leadership",
        features: [
          "Project Management",
          "Supervisor Training",
          "Business Skills",
          "Team Leadership"
        ]
      },
      {
        title: "Union Training",
        description: "Specialized training through BC construction unions.",
        icon: <Blocks className="h-12 w-12 text-blue-500" />,
        href: "/programs/union-training",
        features: [
          "Apprenticeship Programs",
          "Safety Certification",
          "Skills Upgrading",
          "Leadership Development"
        ]
      }
    ]
  },
  {
    title: "Support Programs",
    description: "Additional resources and assistance",
    partners: [
      { 
        name: "WorkBC", 
        icon: <Briefcase className="h-12 w-12 text-blue-500" />
      },
      { 
        name: "BC Construction Association", 
        icon: <Building2 className="h-12 w-12 text-orange-500" />
      },
      { 
        name: "Access BC", 
        icon: <Heart className="h-12 w-12 text-pink-500" />
      }
    ],
    programs: [
      {
        title: "Accessible Construction",
        description: "Supporting people with disabilities in construction.",
        icon: <Heart className="h-12 w-12 text-pink-500" />,
        href: "/programs/accessibility",
        features: [
          "Workplace Accommodation",
          "Specialized Training",
          "Support Services",
          "Industry Partnerships"
        ]
      },
      {
        title: "Career Transitions",
        description: "Support for transitioning into construction.",
        icon: <ArrowRightCircle className="h-12 w-12 text-orange-500" />,
        href: "/programs/transitions",
        features: [
          "Skills Assessment",
          "Retraining Programs",
          "Industry Orientation",
          "Job Placement"
        ]
      }
    ]
  }
]

export default function ProgramsPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Construction Career Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Find the right program to start or advance your construction career in British Columbia
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programCategories[0].programs.map((program) => (
            <Link 
              key={program.title}
              href={program.href}
              className="block group"
            >
              <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="transform transition-transform group-hover:scale-110">
                    {program.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>
                  
                  {program.features && (
                    <ul className="w-full space-y-2 text-sm">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center justify-center">
                          <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {program.partners && program.partners.length > 0 && (
                    <div className="w-full pt-6 border-t border-border">
                      <h4 className="text-sm font-medium mb-3">Program Partners</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {program.partners.map((partner) => (
                          <li key={partner}>{partner}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
} 