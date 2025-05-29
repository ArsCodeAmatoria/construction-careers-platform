'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Shield, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Target, 
  Zap, 
  Users, 
  BookOpen, 
  Wrench, 
  HardHat,
  ArrowLeft,
  Building,
  TrendingUp,
  Briefcase,
  Star,
  Globe,
  FileCheck,
  Hammer,
  Settings,
  Cog,
  Factory,
  Building2,
  Square,
  Power,
  ArrowUp
} from "lucide-react"

const redSealTrades = [
  {
    name: "Electrician",
    code: "309A",
    duration: "4 years",
    wage: "$20-40/hour",
    description: "Install, maintain, and repair electrical systems",
    demand: "Very High",
    slug: "electrician",
    icon: <Zap className="h-8 w-8 text-yellow-500 float" />
  },
  {
    name: "Plumber", 
    code: "306A",
    duration: "4 years",
    wage: "$22-38/hour",
    description: "Install and maintain water and drainage systems",
    demand: "High",
    slug: "plumber",
    icon: <Settings className="h-8 w-8 text-blue-500 float" />
  },
  {
    name: "Carpenter",
    code: "403A", 
    duration: "4 years",
    wage: "$18-35/hour",
    description: "Construct, install, and repair structures and fixtures",
    demand: "Very High",
    slug: "carpenter",
    icon: <Hammer className="h-8 w-8 text-amber-500 float" />
  },
  {
    name: "Welder",
    code: "456A",
    duration: "3 years", 
    wage: "$20-42/hour",
    description: "Join metals using various welding techniques",
    demand: "High",
    slug: "welder",
    icon: <Factory className="h-8 w-8 text-orange-500 float" />
  },
  {
    name: "HVAC Technician",
    code: "313A",
    duration: "4 years",
    wage: "$19-36/hour", 
    description: "Install and service heating, ventilation, and air conditioning",
    demand: "Very High",
    slug: "hvac-technician",
    icon: <Cog className="h-8 w-8 text-cyan-500 float" />
  },
  {
    name: "Heavy Equipment Operator",
    code: "349A",
    duration: "3 years",
    wage: "$24-45/hour",
    description: "Operate heavy machinery for construction projects",
    demand: "High",
    slug: "heavy-equipment-operator",
    icon: <Building className="h-8 w-8 text-green-500 float" />
  },
  {
    name: "Ironworker",
    code: "420A",
    duration: "3 years",
    wage: "$22-45/hour",
    description: "Install structural steel and iron frameworks",
    demand: "High",
    slug: "ironworker",
    icon: <Building2 className="h-8 w-8 text-gray-500 float" />
  },
  {
    name: "Sheet Metal Worker",
    code: "308A",
    duration: "4 years",
    wage: "$20-42/hour",
    description: "Fabricate and install sheet metal products for HVAC and construction",
    demand: "High",
    slug: "sheet-metal-worker",
    icon: <Square className="h-8 w-8 text-slate-500 float" />
  },
  {
    name: "Powerlinesman",
    code: "442A",
    duration: "4 years",
    wage: "$25-50/hour",
    description: "Install, maintain, and repair electrical power transmission and distribution systems",
    demand: "Very High",
    slug: "powerlinesman",
    icon: <Power className="h-8 w-8 text-yellow-600 float" />
  },
  {
    name: "Crane Operator",
    code: "7371",
    duration: "3 years",
    wage: "$25-55/hour",
    description: "Operate various types of cranes to lift, move, and position materials in construction and industrial environments",
    demand: "Very High",
    slug: "crane-operator",
    icon: <ArrowUp className="h-8 w-8 text-blue-500 float" />
  }
]

const certificationProcess = [
  {
    step: 1,
    title: "Apprenticeship Registration",
    description: "Register with provincial apprenticeship authority",
    duration: "1-2 weeks",
    requirements: ["Application submission", "Educational requirements", "Employer sponsorship"]
  },
  {
    step: 2,
    title: "On-the-Job Training",
    description: "Complete required work hours with qualified supervision",
    duration: "80% of program",
    requirements: ["Logbook completion", "Skill demonstration", "Progress evaluations"]
  },
  {
    step: 3,
    title: "Technical Training",
    description: "Attend classroom instruction at approved institutions",
    duration: "20% of program", 
    requirements: ["Course attendance", "Written examinations", "Practical assessments"]
  },
  {
    step: 4,
    title: "Red Seal Examination",
    description: "Pass the interprovincial Red Seal examination",
    duration: "4 hours",
    requirements: ["Complete apprenticeship", "Application for exam", "Pass mark of 70%"]
  }
]

const programBenefits = [
  {
    title: "Interprovincial Mobility",
    description: "Work anywhere in Canada with Red Seal certification",
    icon: <Globe className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Industry Recognition", 
    description: "Nationally recognized standard of excellence",
    icon: <Award className="h-6 w-6 text-gold-500 float" />
  },
  {
    title: "Career Security",
    description: "High demand for certified tradespeople",
    icon: <Shield className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Earning Potential",
    description: "Higher wages with Red Seal certification",
    icon: <DollarSign className="h-6 w-6 text-emerald-500 float" />
  },
  {
    title: "Professional Growth",
    description: "Opportunities for specialization and advancement",
    icon: <TrendingUp className="h-6 w-6 text-purple-500 float" />
  },
  {
    title: "Entrepreneurship",
    description: "Qualification to start your own business",
    icon: <Briefcase className="h-6 w-6 text-orange-500 float" />
  }
]

const requirements = [
  {
    category: "Educational",
    items: [
      "Grade 12 diploma or equivalent",
      "Strong math and communication skills", 
      "Physics or technical courses (preferred)",
      "English proficiency"
    ]
  },
  {
    category: "Physical",
    items: [
      "Physical fitness for trade demands",
      "Good hand-eye coordination",
      "Color vision (for some trades)",
      "Ability to work at heights"
    ]
  },
  {
    category: "Personal",
    items: [
      "Valid driver's license",
      "Safety-conscious mindset",
      "Problem-solving abilities", 
      "Team collaboration skills"
    ]
  },
  {
    category: "Pre-Apprenticeship",
    items: [
      "Foundation training (recommended)",
      "Safety certifications",
      "First aid certification",
      "Tool familiarity"
    ]
  }
]

const careerProgression = [
  {
    level: "Apprentice",
    years: "0-4 years",
    wage: "$18-25/hour",
    responsibilities: ["Learn fundamental skills", "Complete required hours", "Attend technical training"]
  },
  {
    level: "Journeyperson", 
    years: "4+ years",
    wage: "$25-40/hour",
    responsibilities: ["Work independently", "Supervise apprentices", "Complex problem solving"]
  },
  {
    level: "Specialist/Lead",
    years: "6-10 years", 
    wage: "$35-50/hour",
    responsibilities: ["Specialized expertise", "Project leadership", "Training coordination"]
  },
  {
    level: "Contractor/Owner",
    years: "10+ years",
    wage: "$50,000-150,000+/year",
    responsibilities: ["Business management", "Client relations", "Strategic planning"]
  }
]

export default function RedSealTradesPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="space-y-4">
        <Link href="/programs/apprenticeships">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Apprenticeships
          </Button>
        </Link>
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-red-500 float" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            Red Seal Trades
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Nationally recognized certification programs in high-demand trades with interprovincial mobility and industry-standard excellence.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Available Red Seal Trades
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {redSealTrades.map((trade, index) => (
            <Link key={trade.name} href={`/programs/apprenticeships/red-seal/${trade.slug}`}>
              <Card 
                delay={index * 0.08}
                className="h-full cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {trade.icon}
                  </div>
                  <CardTitle className="text-lg">{trade.name}</CardTitle>
                  <CardDescription>{trade.description}</CardDescription>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Code:</span> {trade.code}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{trade.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Wage Range:</span>
                      <span className="font-medium text-green-600">{trade.wage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Demand:</span>
                      <span className={`font-medium ${trade.demand === 'Very High' ? 'text-red-500' : 'text-orange-500'}`}>
                        {trade.demand}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Certification Process
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {certificationProcess.map((step, index) => (
            <Card 
              key={step.step}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <div className="text-xs font-medium text-orange-600">
                    Duration: {step.duration}
                  </div>
                  
                  <div className="w-full">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-xs">
                      {step.requirements.map((req) => (
                        <li key={req} className="flex items-center">
                          <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Program Benefits
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {programBenefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {benefit.icon}
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Entry Requirements
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {requirements.map((req, index) => (
            <Card 
              key={req.category}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg text-center">{req.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <Target className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Career Progression
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {careerProgression.map((level, index) => (
            <Card 
              key={level.level}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{level.level}</h3>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{level.years}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Wage:</span>
                      <span className="font-medium text-green-600">{level.wage}</span>
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1 text-xs">
                      {level.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-center">
                          <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Red Seal Journey
        </h2>
        <p className="text-lg text-muted-foreground">
          Join Canada's most recognized trades certification program with guaranteed quality, mobility, and career advancement
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/careers?category=apprenticeship">
            <Button size="lg" className="button-glow pulse-glow">
              <HardHat className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="button-glow">
              <FileCheck className="mr-2 h-5 w-5" />
              Get Information
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 