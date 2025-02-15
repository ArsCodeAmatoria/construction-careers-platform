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
  ArrowRightCircle
} from "lucide-react"

const programCategories = [
  {
    title: "Career Entry Programs",
    description: "Starting your journey in construction",
    partners: [
      { name: "WorkBC", logo: "/partners/workbc.svg" },
      { name: "BC Construction Association", logo: "/partners/bcca.svg" },
      { name: "Industry Training Authority BC", logo: "/partners/ita.svg" }
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
      { name: "BC Construction Association", logo: "/partners/bcca.svg" },
      { name: "WorkSafeBC", logo: "/partners/worksafe.svg" },
      { name: "Industry Training Authority", logo: "/partners/ita.svg" }
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
    <div className="flex flex-col items-center space-y-16 py-8">
      <section className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Construction Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Discover specialized programs supporting diverse communities in British Columbia's 
          construction industry. Find the support you need to build your future.
        </p>
      </section>

      {programCategories.map((category) => (
        <section key={category.title} className="w-full max-w-7xl px-4 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">{category.title}</h2>
            <p className="text-lg text-muted-foreground">{category.description}</p>
            
            {/* Partner Organizations */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Partner Organizations</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.partners.map((partner) => (
                  <div key={partner.name} className="text-center">
                    <div className="w-24 h-24 bg-card rounded-lg p-2 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {category.programs.map((program) => (
              <Link 
                key={program.title} 
                href={program.href}
                className="w-full group"
              >
                <div className="h-full border border-border hover:border-foreground/50 rounded-lg p-6 transition-colors">
                  <div className="flex flex-col items-center text-center">
                    {program.icon}
                    <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
                    <ul className="mt-4 space-y-2 text-sm w-full">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center justify-center">
                          <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Program Partners */}
                    <div className="mt-4 pt-4 border-t border-border w-full">
                      <h4 className="text-sm font-medium mb-2">Program Partners</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {program.partners.map((partner) => (
                          <li key={partner}>{partner}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Funding Information */}
                    {program.funding && (
                      <div className="mt-4 pt-4 border-t border-border w-full">
                        <h4 className="text-sm font-medium mb-2">Funding & Support</h4>
                        
                        {/* Available Grants */}
                        <div className="space-y-3">
                          {program.funding.grants.map((grant) => (
                            <div key={grant.name} className="text-left">
                              <h5 className="text-sm font-medium text-foreground">{grant.name}</h5>
                              <p className="text-sm text-muted-foreground">{grant.amount}</p>
                              <p className="text-xs text-muted-foreground">{grant.details}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Additional Support */}
                        <div className="mt-3">
                          <h5 className="text-sm font-medium mb-1">Additional Support</h5>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {program.funding.additional.map((support) => (
                              <li key={support}>{support}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Add category-level funding section */}
      <section className="w-full max-w-7xl px-4 mt-8">
        <div className="border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-center mb-4">Available Funding</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Funding Sources */}
            <div>
              <h4 className="text-lg font-medium mb-3">Funding Sources</h4>
              <div className="space-y-4">
                {category.funding.sources.map((source) => (
                  <div key={source.name} className="space-y-1">
                    <h5 className="font-medium">{source.name}</h5>
                    <p className="text-sm text-muted-foreground">{source.amount}</p>
                    <p className="text-sm text-muted-foreground">
                      Eligibility: {source.eligibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Support Services */}
            <div>
              <h4 className="text-lg font-medium mb-3">Support Services</h4>
              <ul className="space-y-2">
                {category.funding.support.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Find Your Program
        </h2>
        <p className="text-lg text-muted-foreground">
          Explore programs designed to support your journey in BC's construction industry.
        </p>
        <Link href="/careers">
          <Button size="lg">
            <Building className="mr-2 h-5 w-5" />
            View Career Options
          </Button>
        </Link>
      </section>
    </div>
  )
} 