'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Zap, 
  Shield, 
  Award, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  ArrowLeft,
  Star,
  Globe,
  FileCheck,
  HardHat,
  Building,
  Settings,
  Wrench,
  Lightbulb,
  Factory,
  Home,
  Users,
  BookOpen,
  Activity,
  AlertTriangle,
  Cpu,
  Gauge
} from "lucide-react"

const electricianOverview = {
  name: "Electrician",
  code: "309A",
  duration: "4 years",
  wage: "$20-40/hour",
  journeyWage: "$25-45/hour",
  demand: "Very High",
  description: "Install, maintain, and repair electrical systems in residential, commercial, and industrial settings",
  icon: <Zap className="h-16 w-16 text-yellow-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Electrical fundamentals", "Safety procedures", "Hand tools", "Basic wiring", "Electrical codes"],
    wage: "$18-22/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Motor controls", "Conduit systems", "Panel installation", "Troubleshooting", "Blueprint reading"],
    wage: "$20-26/hour",
    focus: "Intermediate Systems"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 8 weeks school", 
    topics: ["Industrial systems", "Power distribution", "Control circuits", "PLC basics", "High voltage"],
    wage: "$22-30/hour",
    focus: "Advanced Applications"
  },
  {
    year: "Year 4",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Complex systems", "Project management", "Code compliance", "Renewable energy", "Leadership skills"],
    wage: "$24-34/hour",
    focus: "Specialization & Leadership"
  }
]

const specializations = [
  {
    title: "Residential Wiring",
    description: "Home electrical systems and smart home technology",
    applications: ["New construction", "Renovations", "Smart home automation", "Energy efficiency upgrades"],
    demand: "Very High",
    salary: "$22-38/hour",
    icon: <Home className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Industrial Electrical",
    description: "Factory and manufacturing electrical systems", 
    applications: ["Motor controls", "Production line automation", "Power distribution", "Maintenance systems"],
    demand: "High",
    salary: "$28-45/hour",
    icon: <Factory className="h-6 w-6 text-orange-500 float" />
  },
  {
    title: "Commercial Systems",
    description: "Office buildings and commercial facility electrical work",
    applications: ["Lighting systems", "Fire alarm systems", "Security systems", "Building automation"],
    demand: "High", 
    salary: "$25-42/hour",
    icon: <Building className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Renewable Energy",
    description: "Solar, wind, and sustainable energy systems",
    applications: ["Solar panel installation", "Battery storage systems", "Grid-tie systems", "Energy monitoring"],
    demand: "Very High",
    salary: "$26-44/hour",
    icon: <Lightbulb className="h-6 w-6 text-yellow-500 float" />
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Wire strippers", "Multimeter", "Voltage tester", "Pliers", "Screwdrivers", "Knife"],
    cost: "$500-800"
  },
  {
    category: "Power Tools", 
    items: ["Drill", "Reciprocating saw", "Conduit bender", "Cable puller", "Oscilloscope", "Megohmmeter"],
    cost: "$1,500-3,000"
  },
  {
    category: "Safety Equipment",
    items: ["Hard hat", "Safety glasses", "Insulated gloves", "Arc flash suit", "Fall protection", "First aid kit"],
    cost: "$800-1,200"
  },
  {
    category: "Specialized Instruments",
    items: ["Power quality analyzer", "Thermal imaging camera", "Cable fault locator", "Motor analyzer"],
    cost: "$2,000-5,000"
  }
]

const safetyRequirements = [
  {
    title: "Electrical Safety Training",
    requirements: ["Arc flash awareness", "Lockout/tagout procedures", "Electrical shock prevention", "PPE requirements"],
    certification: "CSA Z462 compliance"
  },
  {
    title: "Fall Protection",
    requirements: ["Height safety training", "Harness use", "Ladder safety", "Scaffolding protocols"],
    certification: "Working at Heights certification"
  },
  {
    title: "First Aid & CPR",
    requirements: ["Basic first aid", "CPR certification", "AED training", "Emergency response"],
    certification: "Standard First Aid & CPR-C"
  },
  {
    title: "Workplace Safety",
    requirements: ["WHMIS training", "Confined space entry", "Hazard identification", "Incident reporting"],
    certification: "Construction Safety Training"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$18-22/hour",
    responsibilities: ["Basic installations", "Helper duties", "Material preparation", "Safety compliance"],
    skills: ["Tool usage", "Code basics", "Safety procedures"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-4",
    wage: "$20-34/hour", 
    responsibilities: ["Independent tasks", "Quality control", "Troubleshooting", "Training juniors"],
    skills: ["System design", "Complex installations", "Problem solving"]
  },
  {
    level: "Journeyperson Electrician",
    years: "4+ years",
    wage: "$25-45/hour",
    responsibilities: ["Project leadership", "Code compliance", "System commissioning", "Client consultation"],
    skills: ["Full trade competency", "Supervision", "Business skills"]
  },
  {
    level: "Electrical Contractor",
    years: "8+ years",
    wage: "$50,000-150,000+/year",
    responsibilities: ["Business ownership", "Project management", "Staff supervision", "Business development"],
    skills: ["Entrepreneurship", "Management", "Strategic planning"]
  }
]

const industryApplications = [
  {
    sector: "Construction", 
    applications: ["New building wiring", "Infrastructure projects", "Site electrical", "Temporary power"],
    growth: "+15% annually"
  },
  {
    sector: "Manufacturing",
    applications: ["Production line electrical", "Motor maintenance", "Control systems", "Plant automation"],
    growth: "+12% annually"
  },
  {
    sector: "Renewable Energy",
    applications: ["Solar installations", "Wind farm maintenance", "Battery systems", "Grid integration"],
    growth: "+52% annually"
  },
  {
    sector: "Maintenance Services", 
    applications: ["Facility maintenance", "Emergency repairs", "System upgrades", "Preventive maintenance"],
    growth: "+18% annually"
  }
]

const certificationPath = [
  {
    milestone: "Provincial Apprenticeship Registration",
    timeline: "Month 1",
    requirements: ["High school completion", "Employer sponsorship", "Application submission"]
  },
  {
    milestone: "Technical Training Completion",
    timeline: "4 years",
    requirements: ["240 hours classroom training", "7,200 work hours", "Competency evaluations"]
  },
  {
    milestone: "Red Seal Examination",
    timeline: "After apprenticeship",
    requirements: ["Journeyperson certificate", "Exam application", "70% pass mark"]
  },
  {
    milestone: "Continuing Education",
    timeline: "Ongoing", 
    requirements: ["Code updates", "New technology training", "Safety refreshers", "Specialization courses"]
  }
]

export default function ElectricianPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="space-y-4">
        <Link href="/programs/apprenticeships/red-seal">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Red Seal Trades
          </Button>
        </Link>
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            {electricianOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {electricianOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {electricianOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {electricianOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {electricianOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {electricianOverview.wage}
            </span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Training Curriculum
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {trainingCurriculum.map((year, index) => (
            <Card 
              key={year.year}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <CardTitle className="text-lg">{year.year}</CardTitle>
                <CardDescription>{year.focus}</CardDescription>
                <div className="text-sm text-muted-foreground">{year.hours}</div>
                <div className="text-sm font-medium text-green-600">{year.wage}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {year.topics.map((topic) => (
                    <li key={topic} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{topic}</span>
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
          Specialization Areas
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {specializations.map((spec, index) => (
            <Card 
              key={spec.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {spec.icon}
                  <div>
                    <CardTitle className="text-lg">{spec.title}</CardTitle>
                    <CardDescription>{spec.description}</CardDescription>
                  </div>
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <span className="text-muted-foreground">Demand:</span>
                  <span className={`font-medium ${spec.demand === 'Very High' ? 'text-red-500' : 'text-orange-500'}`}>
                    {spec.demand}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Salary:</span>
                  <span className="font-medium text-green-600">{spec.salary}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {spec.applications.map((app) => (
                      <span key={app} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {app}
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
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Key Skills:</h4>
                    <ul className="space-y-1 text-xs">
                      {level.skills.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <Target className="h-2 w-2 mr-2 text-blue-500 flex-shrink-0" />
                          <span>{skill}</span>
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
                <div className="text-sm font-medium text-green-600">
                  Growth: {industry.growth}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {industry.applications.map((app) => (
                    <span key={app} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
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
          Start Your Electrical Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Power your future with a Red Seal Electrician certification - high demand, excellent wages, and endless opportunities in the electrical trade
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