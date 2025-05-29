'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Wrench, 
  Shield, 
  Award, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  ArrowLeft,
  Star,
  FileCheck,
  HardHat,
  Users,
  AlertTriangle,
  Droplets,
  Thermometer,
  Factory,
  Settings,
  Gauge,
  Heart,
  Home,
  Briefcase
} from "lucide-react"

const steamfitterOverview = {
  name: "Steamfitter",
  union: "Local 170 - United Association",
  duration: "5 years",
  wage: "$27-46/hour",
  journeyWage: "$35-55/hour",
  demand: "High",
  description: "Install, maintain, and repair piping systems for heating, cooling, processing, and industrial applications with full union benefits and job security",
  icon: <Wrench className="h-16 w-16 text-cyan-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 180 classroom hours",
    topics: ["Basic piping principles", "Safety protocols", "Tool usage", "Blueprint reading", "Union orientation"],
    wage: "$22-30/hour",
    focus: "Foundation Skills",
    unionBenefits: "Basic health coverage, union dues, safety training"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 180 classroom hours",
    topics: ["Pipe fitting techniques", "Welding basics", "System installation", "Quality control", "Union participation"],
    wage: "$25-35/hour",
    focus: "Intermediate Skills",
    unionBenefits: "Enhanced coverage, pension contributions start"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 180 classroom hours", 
    topics: ["Steam systems", "High-pressure systems", "Industrial applications", "Advanced welding", "Leadership development"],
    wage: "$28-40/hour",
    focus: "Advanced Systems",
    unionBenefits: "Full health benefits, increased pension contributions"
  },
  {
    year: "Year 4",
    hours: "1,800 work hours + 180 classroom hours", 
    topics: ["Complex installations", "System design", "Problem solving", "Supervision skills", "Union steward training"],
    wage: "$30-43/hour",
    focus: "Specialization",
    unionBenefits: "Premium benefits, family coverage eligibility"
  },
  {
    year: "Year 5",
    hours: "1,800 work hours + 180 classroom hours", 
    topics: ["Master-level skills", "Project management", "Mentoring", "Business practices", "Union leadership"],
    wage: "$32-46/hour",
    focus: "Mastery & Leadership",
    unionBenefits: "Full journeyperson benefits, leadership opportunities"
  }
]

const pipingSpecialties = [
  {
    specialty: "Steam Distribution Systems",
    description: "High-pressure steam piping for heating and industrial processes",
    applications: ["Power plants", "Hospitals", "Universities", "Manufacturing facilities"],
    skills: ["High-pressure welding", "Steam trap installation", "Insulation", "Safety protocols"],
    unionAdvantages: ["Premium safety training", "Specialized certifications", "Higher wage rates"],
    icon: <Thermometer className="h-6 w-6 text-red-500 float" />
  },
  {
    specialty: "HVAC Systems",
    description: "Heating, ventilation, and air conditioning piping systems",
    applications: ["Commercial buildings", "Residential complexes", "Industrial facilities", "Data centers"],
    skills: ["Refrigeration piping", "Hydronic systems", "Controls integration", "Energy efficiency"],
    unionAdvantages: ["Ongoing training", "Technology updates", "Manufacturer partnerships"],
    icon: <Settings className="h-6 w-6 text-blue-500 float" />
  },
  {
    specialty: "Industrial Process Piping",
    description: "Specialized piping for chemical and manufacturing processes",
    applications: ["Chemical plants", "Refineries", "Food processing", "Pharmaceutical facilities"],
    skills: ["Exotic materials", "Precision welding", "Pressure testing", "Quality assurance"],
    unionAdvantages: ["Hazard pay", "Specialized training", "Safety equipment provided"],
    icon: <Factory className="h-6 w-6 text-purple-500 float" />
  },
  {
    specialty: "Medical Gas Systems",
    description: "Life-critical piping systems for healthcare facilities",
    applications: ["Hospitals", "Surgery centers", "Dental offices", "Medical laboratories"],
    skills: ["Medical gas codes", "Contamination prevention", "Testing procedures", "Documentation"],
    unionAdvantages: ["Certification support", "Continuing education", "Industry partnerships"],
    icon: <Heart className="h-6 w-6 text-green-500 float" />
  }
]

const unionBenefits = [
  {
    title: "Comprehensive Health Coverage",
    description: "Full medical, dental, and vision for member and family",
    details: ["100% premium coverage", "Low deductibles", "Prescription coverage", "Mental health services"],
    value: "$15,000-25,000/year"
  },
  {
    title: "Defined Benefit Pension",
    description: "Guaranteed retirement income based on years of service",
    details: ["Employer contributions", "Vested benefits", "Early retirement options", "Survivor benefits"],
    value: "$2,000-4,000/month retirement"
  },
  {
    title: "Job Security & Dispatch",
    description: "Union hall job placement and work continuation",
    details: ["Priority job referrals", "Regional mobility", "Unemployment benefits", "Work guarantees"],
    value: "Year-round employment"
  },
  {
    title: "Training & Development",
    description: "Continuous skill enhancement and certification",
    details: ["Technical training", "Safety courses", "Leadership development", "Apprentice mentoring"],
    value: "$5,000-10,000/year training"
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Pipe wrenches", "Threading tools", "Measuring tools", "Cutting tools", "Assembly tools"],
    cost: "$1,500-3,000",
    unionSupport: "Tool allowance provided"
  },
  {
    category: "Power Tools", 
    items: ["Pipe threaders", "Cut-off machines", "Grinders", "Welding equipment", "Pressure testing"],
    cost: "$5,000-15,000",
    unionSupport: "Employer-provided on job sites"
  },
  {
    category: "Safety Equipment",
    items: ["Hard hats", "Safety glasses", "Respirators", "Fall protection", "Arc flash protection"],
    cost: "$800-2,000",
    unionSupport: "Employer-required, union-approved"
  },
  {
    category: "Specialized Equipment",
    items: ["Borescopes", "Leak detectors", "Pressure gauges", "Temperature tools", "Flow meters"],
    cost: "$3,000-8,000",
    unionSupport: "Training provided, employer equipment"
  }
]

const safetyRequirements = [
  {
    title: "Pressure System Safety",
    requirements: ["High-pressure training", "Pressure testing certification", "Emergency procedures", "Leak detection"],
    certification: "Pressure Vessel Safety",
    unionSupport: "Comprehensive safety training programs"
  },
  {
    title: "Hot Work Safety",
    requirements: ["Welding safety", "Hot work permits", "Fire prevention", "Confined space entry"],
    certification: "Hot Work Permit",
    unionSupport: "Safety steward on all jobs"
  },
  {
    title: "Hazardous Materials",
    requirements: ["Chemical handling", "Asbestos awareness", "WHMIS training", "Respiratory protection"],
    certification: "HAZMAT Certification",
    unionSupport: "Health monitoring programs"
  },
  {
    title: "Heights & Confined Spaces",
    requirements: ["Fall protection", "Scaffold safety", "Confined space rescue", "Emergency response"],
    certification: "Working at Heights",
    unionSupport: "Union safety representatives"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$22-30/hour",
    unionStatus: "Apprentice member",
    responsibilities: ["Basic installation", "Material handling", "Safety compliance", "Union participation"],
    benefits: "Basic health coverage, safety training, union representation"
  },
  {
    level: "Intermediate Apprentice",
    years: "Years 2-3",
    wage: "$25-40/hour", 
    unionStatus: "Active apprentice member",
    responsibilities: ["Complex installations", "Quality control", "Team collaboration", "Skill development"],
    benefits: "Enhanced coverage, pension start, training opportunities"
  },
  {
    level: "Senior Apprentice",
    years: "Years 4-5",
    wage: "$30-46/hour",
    unionStatus: "Senior apprentice member",
    responsibilities: ["Advanced systems", "Mentoring", "Problem solving", "Leadership roles"],
    benefits: "Full benefits, family coverage, leadership training"
  },
  {
    level: "Journeyperson Steamfitter",
    years: "5+ years",
    wage: "$35-55/hour",
    unionStatus: "Full member",
    responsibilities: ["Project leadership", "Quality assurance", "Apprentice training", "Union activities"],
    benefits: "Premium benefits package, pension maximization, job security"
  }
]

const industryApplications = [
  {
    sector: "Power Generation", 
    applications: ["Steam turbines", "Boiler systems", "Cooling systems", "Nuclear facilities"],
    growth: "+8% annually",
    unionAdvantage: "High-security clearance, premium wages"
  },
  {
    sector: "Healthcare Facilities",
    applications: ["Medical gas systems", "HVAC systems", "Laboratory piping", "Sterilization"],
    growth: "+15% annually",
    unionAdvantage: "Life-critical work, specialized training"
  },
  {
    sector: "Manufacturing",
    applications: ["Process piping", "Steam systems", "Compressed air", "Chemical handling"],
    growth: "+10% annually",
    unionAdvantage: "Industrial safety focus, hazard pay"
  },
  {
    sector: "Commercial Construction", 
    applications: ["Building HVAC", "Sprinkler systems", "Hydronic heating", "Green building"],
    growth: "+12% annually",
    unionAdvantage: "Prevailing wages, comprehensive benefits"
  }
]

export default function SteamfitterPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="space-y-4">
        <Link href="/programs/apprenticeships/union-apprenticeships">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Union Apprenticeships
          </Button>
        </Link>
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            {steamfitterOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {steamfitterOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {steamfitterOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {steamfitterOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {steamfitterOverview.wage}
            </span>
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {steamfitterOverview.union}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {steamfitterOverview.demand} Demand
            </span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Union Training Curriculum
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-1 lg:grid-cols-2" stagger={0.08}>
          {trainingCurriculum.map((year, index) => (
            <Card 
              key={year.year}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <CardTitle className="text-lg">{year.year}</CardTitle>
                <CardDescription>{year.focus}</CardDescription>
                <div className="text-sm text-muted-foreground">{year.hours}</div>
                <div className="text-sm font-medium text-green-600">{year.wage}</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Curriculum:</h4>
                    <ul className="space-y-1">
                      {year.topics.map((topic) => (
                        <li key={topic} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Union Benefits:</h4>
                    <p className="text-sm text-blue-600">{year.unionBenefits}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Piping Specializations
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {pipingSpecialties.map((specialty, index) => (
            <Card 
              key={specialty.specialty}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {specialty.icon}
                  <div>
                    <CardTitle className="text-lg">{specialty.specialty}</CardTitle>
                    <CardDescription>{specialty.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {specialty.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {specialty.skills.map((skill) => (
                        <span key={skill} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Union Advantages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {specialty.unionAdvantages.map((adv) => (
                        <span key={adv} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {adv}
                        </span>
                      ))}
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
          Union Benefits Package
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {unionBenefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
                <div className="text-sm font-medium text-green-600">
                  Value: {benefit.value}
                </div>
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

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Tools & Equipment
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {toolsEquipment.map((category, index) => (
            <Card 
              key={category.category}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                <div className="text-center text-sm font-medium text-blue-600">
                  Cost: {category.cost}
                </div>
                <div className="text-center text-xs text-green-600">
                  {category.unionSupport}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <Wrench className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
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
          Safety Requirements
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {safetyRequirements.map((safety, index) => (
            <Card 
              key={safety.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  {safety.title}
                </CardTitle>
                <div className="text-sm font-medium text-blue-600">
                  {safety.certification}
                </div>
                <div className="text-xs text-green-600">
                  Union Support: {safety.unionSupport}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {safety.requirements.map((req) => (
                    <li key={req} className="flex items-center text-sm">
                      <AlertTriangle className="h-3 w-3 mr-2 text-orange-500 flex-shrink-0" />
                      <span>{req}</span>
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
          Union Career Progression
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
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{level.level}</h3>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{level.years}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Wage:</span>
                      <span className="font-medium text-green-600">{level.wage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Union Status:</span>
                      <span className="font-medium text-blue-600">{level.unionStatus}</span>
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

                  <div className="w-full">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1">Union Benefits:</h4>
                    <p className="text-xs text-blue-600">{level.benefits}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Industry Applications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {industryApplications.map((industry, index) => (
            <Card 
              key={industry.sector}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{industry.sector}</CardTitle>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Growth:</span>
                  <span className="font-medium text-green-600">{industry.growth}</span>
                </div>
                <div className="text-xs text-blue-600">
                  Union Advantage: {industry.unionAdvantage}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {industry.applications.map((app) => (
                    <span key={app} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Join Local 170 - United Association
        </h2>
        <p className="text-lg text-muted-foreground">
          Experience the power of union brotherhood with comprehensive benefits, job security, and lifelong career advancement in steamfitting
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/careers?category=apprenticeship">
            <Button size="lg" className="button-glow pulse-glow">
              <HardHat className="mr-2 h-5 w-5" />
              Apply to Union
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="button-glow">
              <FileCheck className="mr-2 h-5 w-5" />
              Contact Local 170
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 