'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Users, 
  GraduationCap, 
  Building, 
  Shield,
  Globe,
  Heart,
  Target,
  Handshake,
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

interface Partner {
  name: string
  icon: React.ReactElement
}

interface Program {
  title: string
  description: string
  icon: React.ReactElement
  href: string
  features?: string[]
  partners?: string[]
}

interface ProgramCategory {
  title: string
  description: string
  partners: Partner[]
  programs: Program[]
}

const programCategories: ProgramCategory[] = [
  {
    title: "Career Entry Programs",
    description: "Starting your journey in construction",
    partners: [
      { 
        name: "WorkBC", 
        icon: <Briefcase className="h-8 w-8 text-blue-500 float" />
      },
      { 
        name: "BC Construction Association", 
        icon: <Building2 className="h-8 w-8 text-orange-500 float" />
      },
      { 
        name: "Industry Training Authority BC", 
        icon: <HardHat className="h-8 w-8 text-green-500 float" />
      }
    ],
    programs: [
      {
        title: "Apprenticeships",
        description: "Start your career with hands-on training and mentorship",
        icon: <Users className="h-12 w-12 text-blue-500 float" />,
        href: "/programs/apprenticeships"
      },
      {
        title: "Entry Level Programs",
        description: "Begin your construction journey with no prior experience",
        icon: <GraduationCap className="h-12 w-12 text-green-500 float" />,
        href: "/programs/entry-level"
      },
      {
        title: "Training Programs",
        description: "Develop new skills and certifications",
        icon: <BookOpen className="h-12 w-12 text-purple-500 float" />,
        href: "/programs/training"
      },
      {
        title: "BIM Integration",
        description: "Learn Building Information Modeling for modern construction",
        icon: <Box className="h-12 w-12 text-indigo-500 float" />,
        href: "/programs/bim-integration"
      },
      {
        title: "Women in Construction",
        description: "Programs designed to support women in the industry",
        icon: <Users2 className="h-12 w-12 text-pink-500 float" />,
        href: "/programs/women-in-construction"
      },
      {
        title: "Indigenous Programs",
        description: "Opportunities and support for Indigenous communities",
        icon: <Building2 className="h-12 w-12 text-orange-500 float" />,
        href: "/programs/indigenous"
      },
      {
        title: "Newcomers to Canada",
        description: "Resources for international construction professionals",
        icon: <Plane className="h-12 w-12 text-sky-500 float" />,
        href: "/programs/newcomers"
      },
      {
        title: "Accessibility Programs",
        description: "Inclusive opportunities in construction",
        icon: <Heart className="h-12 w-12 text-red-500 float" />,
        href: "/programs/accessibility"
      },
      {
        title: "Union Training",
        description: "Union-sponsored training and development",
        icon: <Building className="h-12 w-12 text-yellow-500 float" />,
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
        icon: <Building2 className="h-8 w-8 text-orange-500 float" />
      },
      { 
        name: "WorkSafeBC", 
        icon: <Shield className="h-8 w-8 text-red-500 float" />
      },
      { 
        name: "Industry Training Authority", 
        icon: <HardHat className="h-8 w-8 text-green-500 float" />
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
        icon: <Users className="h-12 w-12 text-purple-500 float" />,
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
        icon: <Handshake className="h-12 w-12 text-green-500 float" />,
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
        icon: <Shield className="h-12 w-12 text-red-500 float" />,
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
        icon: <School className="h-8 w-8 text-blue-500 float" />
      },
      { 
        name: "BC Construction Safety Alliance", 
        icon: <Shield className="h-8 w-8 text-red-500 float" />
      },
      { 
        name: "BC Building Trades", 
        icon: <Construction className="h-8 w-8 text-yellow-500 float" />
      }
    ],
    programs: [
      {
        title: "Leadership Development",
        description: "Developing construction industry leaders.",
        icon: <Target className="h-12 w-12 text-purple-500 float" />,
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
        icon: <Blocks className="h-12 w-12 text-blue-500 float" />,
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
        icon: <Briefcase className="h-8 w-8 text-blue-500 float" />
      },
      { 
        name: "BC Construction Association", 
        icon: <Building2 className="h-8 w-8 text-orange-500 float" />
      },
      { 
        name: "Access BC", 
        icon: <Heart className="h-8 w-8 text-pink-500 float" />
      }
    ],
    programs: [
      {
        title: "Accessible Construction",
        description: "Supporting people with disabilities in construction.",
        icon: <Heart className="h-12 w-12 text-pink-500 float" />,
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
        icon: <ArrowRightCircle className="h-12 w-12 text-orange-500 float" />,
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
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Construction Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Comprehensive career development programs for the construction industry
        </p>
        <Link href="/career-programs" className="text-sm text-muted-foreground hover:text-foreground">
          View training certifications →
        </Link>
      </section>

      {programCategories.map((category, categoryIndex) => (
        <section key={category.title} className="w-full max-w-7xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">{category.title}</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              {category.description}
            </p>
            
            {/* Partners Section */}
            <div className="flex justify-center items-center gap-6 flex-wrap mt-6">
              <span className="text-sm text-muted-foreground">Partners:</span>
              {category.partners.map((partner, index) => (
                <div key={partner.name} className="flex items-center gap-2">
                  {partner.icon}
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {category.programs.map((program, programIndex) => (
              <Link 
                key={program.title}
                href={program.href}
                className="group"
              >
                <Card delay={(categoryIndex * 3 + programIndex) * 0.08} className="h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {program.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  
                  {program.features && (
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-muted-foreground">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm">
                          {program.features.map((feature: string) => (
                            <li key={feature} className="flex items-center text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {program.partners && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Program Partners:</h4>
                          <div className="text-xs text-muted-foreground space-y-1">
                            {program.partners.slice(0, 2).map((partner: string) => (
                              <div key={partner}>• {partner}</div>
                            ))}
                            {program.partners.length > 2 && (
                              <div className="text-xs text-primary">+{program.partners.length - 2} more</div>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </AnimatedContainer>
        </section>
      ))}
    </div>
  )
} 