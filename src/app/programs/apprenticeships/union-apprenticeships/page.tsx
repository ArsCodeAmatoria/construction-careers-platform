'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Users, 
  Shield, 
  DollarSign, 
  Award, 
  Clock, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  ArrowLeft,
  Star,
  Heart,
  Home,
  Briefcase,
  Building,
  HardHat,
  Wrench,
  Cog,
  Truck,
  Factory,
  Settings,
  Globe,
  FileText,
  Hammer,
  Zap
} from "lucide-react"

const unionTrades = [
  {
    name: "Ironworker",
    slug: "../red-seal/ironworker",
    union: "Local 97",
    duration: "4 years",
    wage: "$25-45/hour",
    description: "Erect structural steel frameworks for buildings and bridges",
    benefits: ["Full health coverage", "Pension plan", "Dental & vision", "Life insurance"],
    demand: "Very High",
    icon: <Building className="h-8 w-8 text-gray-500 float" />
  },
  {
    name: "Crane Operator",
    slug: "../red-seal/crane-operator",
    union: "Local 115", 
    duration: "3 years",
    wage: "$30-50/hour",
    description: "Operate heavy lifting equipment on construction sites",
    benefits: ["Premium wages", "Safety training", "Equipment certification", "Overtime opportunities"],
    demand: "High",
    icon: <Truck className="h-8 w-8 text-orange-500 float" />
  },
  {
    name: "Sheet Metal Worker",
    slug: "../red-seal/sheet-metal-worker",
    union: "Local 280",
    duration: "4 years", 
    wage: "$24-42/hour",
    description: "Fabricate and install heating, ventilation, and roofing systems",
    benefits: ["Health & welfare", "Retirement savings", "Training fund", "Tool allowance"],
    demand: "High",
    icon: <Cog className="h-8 w-8 text-blue-500 float" />
  },
  {
    name: "Millwright",
    slug: "../../trades/millwright",
    union: "Local 1304",
    duration: "4 years",
    wage: "$26-44/hour", 
    description: "Install, maintain, and repair industrial machinery",
    benefits: ["Premium benefits", "Continuing education", "Safety certification", "Career mobility"],
    demand: "Medium",
    icon: <Settings className="h-8 w-8 text-green-500 float" />
  },
  {
    name: "Boilermaker",
    slug: "../../trades/boilermaker",
    union: "Local 359",
    duration: "4 years",
    wage: "$28-48/hour",
    description: "Fabricate, assemble, install, and repair boilers and pressure vessels",
    benefits: ["Comprehensive health", "Pension contributions", "Training programs", "Job security"],
    demand: "Medium",
    icon: <Factory className="h-8 w-8 text-red-500 float" />
  },
  {
    name: "Steamfitter",
    slug: "steamfitter",
    union: "Local 170",
    duration: "5 years",
    wage: "$27-46/hour",
    description: "Install and maintain piping systems for heating, cooling, and processing",
    benefits: ["Full medical coverage", "Retirement plan", "Skills training", "Union protection"],
    demand: "High",
    icon: <Wrench className="h-8 w-8 text-cyan-500 float" />
  }
]

const unionBenefits = [
  {
    title: "Guaranteed Work Placements",
    description: "Union members have priority access to job opportunities",
    details: ["Dispatch hall system", "Regional job opportunities", "Preference in hiring", "Work continuation"],
    icon: <Briefcase className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Comprehensive Benefits Package",
    description: "Full health, dental, and vision coverage for you and family",
    details: ["Medical insurance", "Prescription coverage", "Dental care", "Vision services"],
    icon: <Heart className="h-6 w-6 text-red-500 float" />
  },
  {
    title: "Pension Plan Contributions",
    description: "Employer contributions to secure your retirement future",
    details: ["Defined benefit plan", "Vesting schedules", "Portability options", "Retirement security"],
    icon: <Shield className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Family Health Coverage", 
    description: "Extended benefits for spouse and dependent children",
    details: ["Family medical plans", "Dependent coverage", "Maternity benefits", "Child healthcare"],
    icon: <Home className="h-6 w-6 text-purple-500 float" />
  },
  {
    title: "Professional Development Support",
    description: "Ongoing training and skill enhancement programs",
    details: ["Continuing education", "Skills upgrading", "Safety training", "Leadership development"],
    icon: <TrendingUp className="h-6 w-6 text-orange-500 float" />
  },
  {
    title: "Union Protection & Advocacy",
    description: "Collective bargaining power and workplace representation",
    details: ["Wage negotiations", "Working conditions", "Grievance procedures", "Legal support"],
    icon: <Users className="h-6 w-6 text-yellow-500 float" />
  }
]

const membershipRequirements = [
  {
    category: "Eligibility Criteria",
    items: [
      "Age 18 or older",
      "High school diploma or equivalent",
      "Physical ability to perform trade work",
      "Legal eligibility to work in Canada"
    ]
  },
  {
    category: "Assessment Process",
    items: [
      "Union membership application",
      "Physical capability assessment", 
      "Drug and alcohol screening",
      "Background check completion"
    ]
  },
  {
    category: "Union Participation",
    items: [
      "Attend union meetings",
      "Pay union dues and fees",
      "Follow union guidelines",
      "Participate in union activities"
    ]
  },
  {
    category: "Training Commitment",
    items: [
      "Complete apprenticeship program",
      "Maintain academic standards",
      "Safety training compliance",
      "On-the-job performance"
    ]
  }
]

const careerProgression = [
  {
    level: "Apprentice (1st Year)",
    wage: "$20-25/hour",
    benefits: "Basic coverage",
    responsibilities: ["Learn fundamental skills", "Safety orientation", "Tool familiarization", "Basic tasks"],
    union_role: "Apprentice member"
  },
  {
    level: "Apprentice (2nd-3rd Year)",
    wage: "$22-30/hour", 
    benefits: "Enhanced coverage",
    responsibilities: ["Intermediate skills", "Quality work", "Team collaboration", "Progressive responsibilities"],
    union_role: "Active apprentice"
  },
  {
    level: "Journeyperson",
    wage: "$25-40/hour",
    benefits: "Full benefits",
    responsibilities: ["Independent work", "Mentoring apprentices", "Quality assurance", "Problem solving"],
    union_role: "Full member"
  },
  {
    level: "Foreman/Supervisor",
    wage: "$35-50/hour",
    benefits: "Premium benefits", 
    responsibilities: ["Team leadership", "Project coordination", "Quality control", "Safety management"],
    union_role: "Leadership member"
  }
]

const unionPartners = [
  {
    name: "BC Building Trades Council",
    type: "Provincial Organization",
    services: ["Multi-trade coordination", "Political advocacy", "Industry relations", "Training standards"]
  },
  {
    name: "International Brotherhood",
    type: "International Union",
    services: ["Global networking", "International mobility", "Advanced training", "Career opportunities"]
  },
  {
    name: "Construction Labour Relations",
    type: "Industry Partnership", 
    services: ["Collective bargaining", "Dispute resolution", "Industry standards", "Safety protocols"]
  },
  {
    name: "Joint Training Committees",
    type: "Training Partners",
    services: ["Curriculum development", "Instructor certification", "Equipment provision", "Standards maintenance"]
  }
]

const applicationSteps = [
  {
    step: 1,
    title: "Union Contact",
    description: "Contact local union hall for information and application",
    duration: "1 week",
    requirements: ["Identify trade of interest", "Contact union representative", "Gather required documents"]
  },
  {
    step: 2,
    title: "Application Submission",
    description: "Complete and submit union membership application",
    duration: "2-3 weeks",
    requirements: ["Completed application form", "Supporting documents", "Application fee payment"]
  },
  {
    step: 3,
    title: "Assessment & Interview",
    description: "Complete assessments and union interview process",
    duration: "2-4 weeks", 
    requirements: ["Aptitude testing", "Physical assessment", "Union interview", "Reference verification"]
  },
  {
    step: 4,
    title: "Apprenticeship Placement",
    description: "Begin apprenticeship with union contractor",
    duration: "Ongoing",
    requirements: ["Union acceptance", "Contractor assignment", "Program registration", "Training commencement"]
  }
]

export default function UnionApprenticeshipsPage() {
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
            <Users className="h-16 w-16 text-green-500 float" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            Union Apprenticeships
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Union-sponsored apprenticeship programs with guaranteed benefits, job security, comprehensive training, and strong collective bargaining power.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Union Trade Programs
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {unionTrades.map((trade, index) => (
            <Link 
              key={trade.name}
              href={`/programs/apprenticeships/union-apprenticeships/${trade.slug}`}
            >
              <Card 
                delay={index * 0.08}
                className="h-full hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {trade.icon}
                  </div>
                  <CardTitle className="text-lg">{trade.name}</CardTitle>
                  <CardDescription>{trade.description}</CardDescription>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">{trade.union}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{trade.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Wage:</span>
                        <span className="font-medium text-green-600">{trade.wage}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Demand:</span>
                      <span className={`font-medium ${trade.demand === 'Very High' ? 'text-red-500' : trade.demand === 'High' ? 'text-orange-500' : 'text-yellow-500'}`}>
                        {trade.demand}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Union Benefits:</h4>
                      <ul className="space-y-1">
                        {trade.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-xs">
                            <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Union Benefits & Advantages
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {unionBenefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Membership Requirements
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {membershipRequirements.map((req, index) => (
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
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{level.level}</h3>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Wage:</span>
                      <span className="font-medium text-green-600">{level.wage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Benefits:</span>
                      <span className="font-medium">{level.benefits}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Union Role:</span>
                      <span className="font-medium">{level.union_role}</span>
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Responsibilities:</h4>
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

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Union Partners & Support
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {unionPartners.map((partner, index) => (
            <Card 
              key={partner.name}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{partner.name}</CardTitle>
                <CardDescription>{partner.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {partner.services.map((service) => (
                    <li key={service} className="flex items-center text-sm">
                      <Users className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{service}</span>
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
          Application Process
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {applicationSteps.map((step, index) => (
            <Card 
              key={step.step}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <div className="text-xs font-medium text-orange-600">
                    Timeline: {step.duration}
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Join the Union Brotherhood
        </h2>
        <p className="text-lg text-muted-foreground">
          Experience the strength of collective bargaining, comprehensive benefits, and lifelong career security with union apprenticeships
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
              <FileText className="mr-2 h-5 w-5" />
              Contact Union Rep
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 