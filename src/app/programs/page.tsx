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
  Construction
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
        title: "Youth Programs",
        description: "Launch your construction career through apprenticeships and training.",
        icon: <GraduationCap className="h-12 w-12 text-yellow-500" />,
        href: "/programs/youth",
        partners: [
          "Skills Ready BC",
          "BC School Districts",
          "Construction Foundation of BC",
          "BC Youth in Trades"
        ],
        features: [
          "High School Programs",
          "Summer Internships",
          "Youth Apprenticeships",
          "Career Exploration"
        ],
        funding: {
          grants: [
            {
              name: "Youth Skills Training Grant",
              amount: "Up to $5,000",
              details: "For high school students entering trades"
            },
            {
              name: "Youth Apprenticeship Bursary",
              amount: "$1,000 per level",
              details: "For registered youth apprentices"
            }
          ],
          additional: [
            "Tool allowance: $500",
            "Safety equipment coverage",
            "Transportation support"
          ]
        }
      },
      {
        title: "Newcomers to Canada",
        description: "Programs supporting immigrants in BC construction.",
        icon: <Globe className="h-12 w-12 text-blue-500" />,
        href: "/programs/newcomers",
        partners: [
          "BC Construction Association",
          "Immigrant Services Society of BC",
          "SUCCESS BC",
          "BC Settlement Organizations"
        ],
        features: [
          "Skills Assessment",
          "Credential Recognition",
          "Language Training",
          "Industry Integration"
        ],
        funding: {
          grants: [
            {
              name: "Immigrant Skills Training Fund",
              amount: "Up to $7,500",
              details: "For credential recognition and training"
            },
            {
              name: "Settlement Assistance Grant",
              amount: "Up to $3,000",
              details: "For language and industry training"
            }
          ],
          additional: [
            "Language training support",
            "Credential assessment coverage",
            "Work gear allowance"
          ]
        }
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
    <div className="flex flex-col items-center space-y-20 py-12">
      <section className="text-center space-y-8 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Construction Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed">
          Discover specialized programs supporting diverse communities in British Columbia's 
          construction industry. Find the support you need to build your future.
        </p>
      </section>

      {programCategories.map((category) => (
        <section key={category.title} className="w-full max-w-7xl px-4 space-y-12">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {category.title}
            </h2>
            <p className="text-lg text-muted-foreground">{category.description}</p>
          </div>
          
          {category.partners && category.partners.length > 0 && (
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold">Partner Organizations</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {category.partners.map((partner) => (
                  <div key={partner.name} className="text-center group">
                    <div className="w-28 h-28 border border-border rounded-xl p-5 flex items-center justify-center 
                                  transition-colors hover:border-foreground/50 hover:bg-accent">
                      {partner.icon}
                    </div>
                    <p className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-stretch">
            {category.programs.map((program) => (
              <Link 
                key={program.title} 
                href={program.href}
                className="group h-full"
              >
                <div className="h-full border border-border hover:border-foreground/50 rounded-xl p-8 
                               transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="transform transition-transform group-hover:scale-110">
                      {program.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                    
                    <ul className="w-full space-y-2 text-sm">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center justify-center">
                          <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

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

                    {program.funding && (
                      <div className="w-full pt-6 border-t border-border space-y-4">
                        <h4 className="text-sm font-medium">Funding & Support</h4>
                        <div className="space-y-4">
                          {program.funding.grants.map((grant) => (
                            <div key={grant.name} className="text-left">
                              <h5 className="text-sm font-medium">{grant.name}</h5>
                              <p className="text-sm text-muted-foreground">{grant.amount}</p>
                              <p className="text-xs text-muted-foreground">{grant.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {category.funding && (
            <div className="border border-border rounded-xl p-8 mt-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-8">Available Funding</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-medium">Funding Sources</h4>
                  <div className="space-y-6">
                    {category.funding.sources.map((source) => (
                      <div key={source.name} className="space-y-2">
                        <h5 className="font-medium">{source.name}</h5>
                        <p className="text-sm text-muted-foreground">{source.amount}</p>
                        <p className="text-sm text-muted-foreground">
                          Eligibility: {source.eligibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl font-medium">Support Services</h4>
                  <ul className="space-y-4">
                    {category.funding.support.map((item) => (
                      <li key={item} className="flex items-center text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      <section className="w-full max-w-4xl px-4 text-center space-y-8 py-8">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Find Your Program
        </h2>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Explore programs designed to support your journey in BC's construction industry.
        </p>
        <Link href="/careers">
          <Button size="lg" className="px-8">
            <Building className="mr-2 h-5 w-5" />
            View Career Options
          </Button>
        </Link>
      </section>
    </div>
  )
} 