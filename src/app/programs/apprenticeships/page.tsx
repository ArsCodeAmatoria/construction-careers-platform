'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Users, 
  Award, 
  HardHat, 
  Clock, 
  Target, 
  Wrench, 
  Briefcase, 
  Shield,
  CheckCircle,
  DollarSign,
  GraduationCap,
  Building,
  Zap,
  Cog,
  Hammer,
  TrendingUp,
  MapPin,
  FileText,
  Calendar,
  BookOpen,
  Star,
  Building2,
  Factory,
  Home,
  Truck,
  Settings
} from "lucide-react"

const apprenticeshipPrograms = [
  {
    title: "Red Seal Trades",
    description: "Nationally recognized certification programs in high-demand trades",
    duration: "4 years",
    wage: "$18-35/hour",
    path: "/programs/apprenticeships/red-seal",
    features: [
      "Paid on-the-job training (80%)",
      "Technical classroom instruction (20%)",
      "Industry-recognized certification",
      "Interprovincial mobility",
      "Mentorship from experienced tradespeople"
    ],
    trades: [
      "Electrician", "Plumber", "Carpenter", "Welder", "HVAC Technician", "Heavy Equipment Operator"
    ],
    requirements: [
      "Grade 12 or equivalent",
      "Valid driver's license",
      "Physical fitness assessment",
      "Safety orientation completion"
    ],
    icon: <Shield className="h-12 w-12 text-red-500 float" />
  },
  {
    title: "Construction Trades",
    description: "Specialized training in high-demand construction trades",
    duration: "2-4 years",
    wage: "$16-32/hour",
    path: "/programs/apprenticeships/construction-trades",
    features: [
      "Hands-on project experience",
      "Modern equipment training",
      "Safety certifications included",
      "Direct employer partnerships",
      "Flexible scheduling options"
    ],
    trades: [
      "Concrete Finisher", "Roofer", "Drywall Installer", "Painter", "Glazier", "Flooring Installer"
    ],
    requirements: [
      "High school completion",
      "Basic math and reading skills",
      "Safety consciousness",
      "Team collaboration skills"
    ],
    icon: <Wrench className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Union Apprenticeships",
    description: "Union-sponsored apprenticeship programs with guaranteed benefits",
    duration: "3-5 years",
    wage: "$20-40/hour",
    path: "/programs/apprenticeships/union-apprenticeships",
    features: [
      "Guaranteed work placements",
      "Comprehensive benefits package",
      "Pension plan contributions",
      "Family health coverage",
      "Professional development support"
    ],
    trades: [
      "Ironworker", "Crane Operator", "Sheet Metal Worker", "Millwright", "Boilermaker", "Steamfitter"
    ],
    requirements: [
      "Union membership eligibility",
      "Physical capability assessment",
      "Clean driving record",
      "Drug and alcohol screening"
    ],
    icon: <Users className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Green Technology Trades",
    description: "Future-focused apprenticeships in sustainable construction",
    duration: "3-4 years",
    wage: "$19-36/hour",
    path: "/programs/apprenticeships/green-technology",
    features: [
      "Renewable energy systems training",
      "Energy efficiency specialization",
      "Smart building technology",
      "Environmental certification",
      "Innovation project participation"
    ],
    trades: [
      "Solar Panel Installer", "Energy Auditor", "Green Roofer", "Sustainable Builder", "Geothermal Technician"
    ],
    requirements: [
      "Technology aptitude",
      "Environmental interest",
      "Basic electrical knowledge",
      "Problem-solving skills"
    ],
    icon: <Zap className="h-12 w-12 text-emerald-500 float" />
  }
]

const careerPathways = [
  {
    title: "Journeyperson",
    description: "Certified tradesperson with full qualifications",
    timeline: "4-5 years",
    opportunities: [
      "Work independently",
      "Supervise apprentices",
      "Specialize in niche areas",
      "Start own business"
    ],
    salary: "$65,000 - $85,000",
    icon: <Award className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Lead Hand/Supervisor",
    description: "Team leadership and project coordination roles",
    timeline: "6-8 years",
    opportunities: [
      "Manage construction crews",
      "Oversee project quality",
      "Training responsibilities",
      "Safety compliance leadership"
    ],
    salary: "$75,000 - $95,000",
    icon: <Users className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Contractor/Business Owner",
    description: "Independent contractor or business ownership",
    timeline: "8-12 years",
    opportunities: [
      "Own construction company",
      "Specialized contracting services",
      "Project management",
      "Industry leadership"
    ],
    salary: "$85,000 - $150,000+",
    icon: <Briefcase className="h-8 w-8 text-purple-500 float" />
  }
]

const industryPartners = [
  {
    name: "BC Building Trades",
    type: "Union Organization",
    programs: ["Electrical", "Plumbing", "Carpentry"],
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    name: "Construction Labour Relations",
    type: "Industry Association",
    programs: ["Heavy Equipment", "Concrete", "Steel"],
    icon: <Factory className="h-8 w-8 text-orange-500 float" />
  },
  {
    name: "BC Hydro",
    type: "Utility Company",
    programs: ["Electrical Powerline", "Substation", "Telecommunications"],
    icon: <Zap className="h-8 w-8 text-yellow-500 float" />
  },
  {
    name: "Provincial Government",
    type: "Public Sector",
    programs: ["Infrastructure", "Transportation", "Facilities"],
    icon: <Building2 className="h-8 w-8 text-green-500 float" />
  }
]

const applicationProcess = [
  {
    step: 1,
    title: "Initial Application",
    description: "Submit online application with required documents",
    duration: "1-2 weeks",
    requirements: ["Completed application form", "Educational transcripts", "Resume", "References"]
  },
  {
    step: 2,
    title: "Assessment & Testing",
    description: "Complete aptitude tests and skills assessments",
    duration: "2-3 weeks",
    requirements: ["Math and reading assessment", "Physical abilities test", "Safety knowledge test", "Interview"]
  },
  {
    step: 3,
    title: "Employer Matching",
    description: "Matched with suitable employer for training",
    duration: "2-4 weeks",
    requirements: ["Employer interviews", "Reference checks", "Medical examination", "Training agreement"]
  },
  {
    step: 4,
    title: "Program Start",
    description: "Begin apprenticeship training and work placement",
    duration: "Ongoing",
    requirements: ["Orientation completion", "Safety training", "Tool procurement", "Registration confirmation"]
  }
]

const benefits = [
  {
    title: "Earn While Learning",
    description: "Get paid from day one while developing skills",
    value: "80% of time on job site",
    icon: <DollarSign className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Industry Recognition",
    description: "Nationally recognized Red Seal certification",
    value: "Interprovincial mobility",
    icon: <Award className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Career Security",
    description: "High demand for skilled tradespeople",
    value: "95% employment rate",
    icon: <Shield className="h-6 w-6 text-purple-500 float" />
  },
  {
    title: "Growth Potential",
    description: "Clear advancement opportunities",
    value: "$85K+ career earnings",
    icon: <TrendingUp className="h-6 w-6 text-orange-500 float" />
  },
  {
    title: "Skills Development",
    description: "Technical and leadership skills",
    value: "Lifelong learning",
    icon: <BookOpen className="h-6 w-6 text-cyan-500 float" />
  },
  {
    title: "Work-Life Balance",
    description: "Structured schedule with growth",
    value: "Flexible opportunities",
    icon: <Clock className="h-6 w-6 text-pink-500 float" />
  }
]

export default function ApprenticeshipPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Apprenticeship Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Build your career through hands-on training, expert mentorship, and industry-recognized certification programs that lead to rewarding careers in construction trades.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Apprenticeship Programs
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {apprenticeshipPrograms.map((program, index) => (
            <Link key={program.title} href={program.path}>
              <Card 
                delay={index * 0.08}
                className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                  <div className="flex justify-center gap-4 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {program.wage}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Program Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Available Trades:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.trades.map((trade) => (
                          <span key={trade} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {trade}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {program.requirements.map((req) => (
                          <li key={req} className="flex items-center text-xs text-muted-foreground">
                            <Target className="h-2 w-2 mr-2 text-blue-500 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
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
          Career Pathways
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {careerPathways.map((pathway, index) => (
            <Card 
              key={pathway.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {pathway.icon}
                  <h3 className="font-semibold">{pathway.title}</h3>
                  <p className="text-sm text-muted-foreground">{pathway.description}</p>
                  
                  <div className="w-full space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{pathway.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Salary Range:</span>
                      <span className="font-medium text-green-600">{pathway.salary}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Opportunities:</h4>
                      <ul className="space-y-1 text-xs">
                        {pathway.opportunities.map((opportunity) => (
                          <li key={opportunity} className="flex items-center">
                            <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                            <span>{opportunity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
          {applicationProcess.map((step, index) => (
            <Card 
              key={step.step}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <div className="text-xs font-medium text-orange-600">Duration: {step.duration}</div>
                  
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

      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Industry Partners
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {industryPartners.map((partner, index) => (
            <Card 
              key={partner.name}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-3">
                  {partner.icon}
                  <h3 className="font-semibold text-sm">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground">{partner.type}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {partner.programs.map((program) => (
                      <span key={program} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Apprenticeship Benefits
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {benefits.map((benefit, index) => (
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
                  <div className="text-sm font-medium text-primary">{benefit.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Apprenticeship Journey
        </h2>
        <p className="text-lg text-muted-foreground">
          Take the first step towards a rewarding career in the trades with guaranteed employment and industry-recognized certification
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
              Get Information
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 