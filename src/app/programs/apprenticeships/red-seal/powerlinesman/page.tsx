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
  Wrench,
  Home,
  Factory,
  Users,
  BookOpen,
  AlertTriangle,
  Power,
  Cable,
  Gauge,
  Eye,
  Radio,
  Truck
} from "lucide-react"

const powerlinesmanOverview = {
  name: "Powerlinesman",
  code: "442A",
  duration: "4 years",
  wage: "$25-50/hour",
  journeyWage: "$35-65/hour",
  demand: "Very High",
  description: "Install, maintain, and repair electrical power transmission and distribution systems, working with high-voltage equipment and overhead power lines",
  icon: <Power className="h-16 w-16 text-yellow-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Electrical fundamentals", "Safety procedures", "Basic climbing", "Hand tools", "Ground operations"],
    wage: "$22-30/hour",
    focus: "Foundation & Safety"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Overhead construction", "Underground systems", "Equipment operation", "Line maintenance", "Emergency response"],
    wage: "$25-35/hour",
    focus: "Construction Skills"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 8 weeks school", 
    topics: ["High voltage work", "Transmission systems", "Substation basics", "Specialized equipment", "System protection"],
    wage: "$28-40/hour",
    focus: "Advanced Systems"
  },
  {
    year: "Year 4",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Complex installations", "System troubleshooting", "Supervision skills", "Project management", "Regulatory compliance"],
    wage: "$32-45/hour",
    focus: "Leadership & Expertise"
  }
]

const specializations = [
  {
    title: "Transmission Systems",
    description: "High-voltage long-distance power transmission",
    work: ["500kV+ lines", "Transmission towers", "Long-distance corridors", "Grid interconnections"],
    demand: "Very High",
    salary: "$35-65/hour",
    icon: <Power className="h-6 w-6 text-red-500 float" />
  },
  {
    title: "Distribution Systems",
    description: "Local power distribution networks", 
    work: ["4-35kV lines", "Neighborhood service", "Street lighting", "Residential connections"],
    demand: "High",
    salary: "$30-55/hour",
    icon: <Cable className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Underground Systems",
    description: "Buried cable installation and maintenance",
    work: ["Underground cables", "Vault work", "Directional boring", "Cable splicing"],
    demand: "High",
    salary: "$32-58/hour",
    icon: <Home className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Emergency Response",
    description: "Storm damage repair and emergency restoration",
    work: ["Storm response", "Outage restoration", "Emergency repairs", "24/7 availability"],
    demand: "Very High",
    salary: "$40-75/hour",
    icon: <AlertTriangle className="h-6 w-6 text-orange-500 float" />
  }
]

const voltageClassifications = [
  {
    category: "Low Voltage",
    range: "120V - 1kV",
    applications: ["Residential service", "Small commercial", "Secondary distribution", "Customer connections"],
    safety: ["Standard PPE", "Basic isolation", "Lock-out procedures", "Ground fault protection"],
    equipment: ["Meter connections", "Service drops", "Transformers", "Secondary cables"]
  },
  {
    category: "Medium Voltage",
    range: "1kV - 35kV",
    applications: ["Primary distribution", "Industrial service", "Substation feeders", "Street lighting"],
    safety: ["Insulated tools", "Rubber gloves", "Hot stick work", "Minimum approach distance"],
    equipment: ["Overhead lines", "Pad-mount transformers", "Switchgear", "Reclosers"]
  },
  {
    category: "High Voltage",
    range: "35kV - 138kV",
    applications: ["Sub-transmission", "Large industrial", "Distribution substations", "Regional supply"],
    safety: ["Full body suits", "Insulated platforms", "Grounding procedures", "Arc flash protection"],
    equipment: ["Transmission structures", "Circuit breakers", "Disconnect switches", "Power transformers"]
  },
  {
    category: "Extra High Voltage",
    range: "138kV+",
    applications: ["Transmission lines", "Bulk power transfer", "Grid interconnections", "Major substations"],
    safety: ["Live line maintenance", "Helicopter access", "Specialized training", "Advanced PPE"],
    equipment: ["Transmission towers", "Bundle conductors", "Dead-end structures", "Lightning protection"]
  }
]

const safetyRequirements = [
  {
    title: "Electrical Safety",
    requirements: ["Lock-out/tag-out", "Minimum approach distances", "Electrical hazard awareness", "Arc flash protection"],
    certification: "Electrical Safety Training"
  },
  {
    title: "Fall Protection",
    requirements: ["Climbing certification", "Fall arrest systems", "Pole top rescue", "Equipment inspection"],
    certification: "Working at Heights certification"
  },
  {
    title: "Vehicle & Equipment",
    requirements: ["Bucket truck operation", "Crane safety", "Traffic control", "Equipment maintenance"],
    certification: "Mobile Equipment Operator"
  },
  {
    title: "Emergency Response",
    requirements: ["First aid/CPR", "Emergency procedures", "Storm response", "Public safety"],
    certification: "Emergency Response Training"
  }
]

const toolsEquipment = [
  {
    category: "Climbing Equipment",
    items: ["Safety belt", "Climbing spikes", "Fall protection", "Pole straps", "Positioning devices"],
    cost: "$1,500-3,000"
  },
  {
    category: "Hand Tools", 
    items: ["Hot sticks", "Insulated tools", "Wire pullers", "Crimping tools", "Voltage testers"],
    cost: "$2,000-4,000"
  },
  {
    category: "Safety Equipment",
    items: ["Rubber gloves", "Insulated sleeves", "Arc flash suits", "Hard hats", "Safety glasses"],
    cost: "$1,200-2,500"
  },
  {
    category: "Measuring Instruments",
    items: ["Voltmeters", "Ammeters", "Insulation testers", "Phase rotation meters", "Clamp meters"],
    cost: "$800-2,000"
  }
]

const workEnvironments = [
  {
    environment: "Overhead Lines",
    conditions: ["Heights up to 200+ feet", "All weather conditions", "Rural and urban areas", "Traffic exposure"],
    challenges: ["Wind exposure", "Ice loading", "Animal contact", "Public safety"],
    equipment: ["Bucket trucks", "Digger derricks", "Tensioning equipment", "Conductor stringing"]
  },
  {
    environment: "Underground Systems",
    conditions: ["Confined spaces", "Underground vaults", "Trenching operations", "Directional boring"],
    challenges: ["Water infiltration", "Gas hazards", "Space limitations", "Soil conditions"],
    equipment: ["Cable pullers", "Splicing tools", "Vault equipment", "Boring machines"]
  },
  {
    environment: "Substations",
    conditions: ["High voltage equipment", "Switching operations", "Maintenance windows", "Live work"],
    challenges: ["Complex systems", "Safety protocols", "Coordination requirements", "System reliability"],
    equipment: ["Circuit breakers", "Transformers", "Control systems", "Protection equipment"]
  },
  {
    environment: "Emergency Response",
    conditions: ["Storm damage", "24/7 availability", "Time pressure", "Public emergencies"],
    challenges: ["Hazardous conditions", "Media attention", "Public pressure", "Extended hours"],
    equipment: ["Emergency vehicles", "Generators", "Portable equipment", "Communication systems"]
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$22-30/hour",
    responsibilities: ["Ground support", "Material handling", "Basic maintenance", "Safety compliance"],
    skills: ["Tool familiarity", "Safety awareness", "Basic electrical"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-4",
    wage: "$25-45/hour", 
    responsibilities: ["Line work", "Equipment operation", "System maintenance", "Emergency response"],
    skills: ["Climbing", "Live line work", "System knowledge"]
  },
  {
    level: "Journeyperson Powerlinesman",
    years: "4+ years",
    wage: "$35-65/hour",
    responsibilities: ["Complex installations", "System troubleshooting", "Training apprentices", "Project leadership"],
    skills: ["Full trade competency", "Supervision", "Problem solving"]
  },
  {
    level: "Crew Leader/Supervisor",
    years: "8+ years",
    wage: "$45,000-150,000+/year",
    responsibilities: ["Crew management", "Work planning", "Safety oversight", "Customer relations"],
    skills: ["Leadership", "Project management", "System design"]
  }
]

const industryApplications = [
  {
    sector: "Electric Utilities", 
    applications: ["Power generation", "Transmission systems", "Distribution networks", "Customer service"],
    growth: "+15% annually"
  },
  {
    sector: "Renewable Energy",
    applications: ["Wind farms", "Solar installations", "Grid integration", "Energy storage"],
    growth: "+35% annually"
  },
  {
    sector: "Industrial Services",
    applications: ["Plant maintenance", "Construction projects", "Mining operations", "Oil & gas facilities"],
    growth: "+20% annually"
  },
  {
    sector: "Telecommunications", 
    applications: ["Fiber optic installation", "Communication towers", "Network infrastructure", "Internet backbone"],
    growth: "+25% annually"
  }
]

const physicalRequirements = [
  {
    requirement: "Height Tolerance",
    description: "Work at extreme heights up to 200+ feet",
    importance: "Critical - daily requirement for overhead line work"
  },
  {
    requirement: "Physical Strength",
    description: "Lift 75+ lbs and work in challenging positions",
    importance: "Essential - handling heavy equipment and materials"
  },
  {
    requirement: "Weather Endurance",
    description: "Work in all weather conditions including storms",
    importance: "Required - emergency response and maintenance"
  },
  {
    requirement: "Color Vision",
    description: "Distinguish wire colors and safety indicators",
    importance: "Safety critical - proper wire identification"
  }
]

export default function PowerlinesmanPage() {
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
            {powerlinesmanOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {powerlinesmanOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {powerlinesmanOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {powerlinesmanOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {powerlinesmanOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {powerlinesmanOverview.wage}
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
                  <span className={`font-medium ${spec.demand === 'Very High' ? 'text-red-500' : spec.demand === 'High' ? 'text-orange-500' : 'text-yellow-500'}`}>
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
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Types of Work:</h4>
                  <div className="flex flex-wrap gap-1">
                    {spec.work.map((work) => (
                      <span key={work} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {work}
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
          Voltage Classifications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {voltageClassifications.map((voltage, index) => (
            <Card 
              key={voltage.category}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                  {voltage.category}
                </CardTitle>
                <div className="text-sm font-medium text-blue-600">
                  {voltage.range}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {voltage.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Safety Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                      {voltage.safety.map((safety) => (
                        <span key={safety} className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          {safety}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Equipment:</h4>
                    <div className="flex flex-wrap gap-1">
                      {voltage.equipment.map((equip) => (
                        <span key={equip} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {equip}
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
          Work Environments
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {workEnvironments.map((env, index) => (
            <Card 
              key={env.environment}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{env.environment}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Conditions:</h4>
                    <ul className="space-y-1">
                      {env.conditions.map((condition) => (
                        <li key={condition} className="flex items-center text-xs">
                          <Eye className="h-2 w-2 mr-2 text-blue-500 flex-shrink-0" />
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Challenges:</h4>
                    <div className="flex flex-wrap gap-1">
                      {env.challenges.map((challenge) => (
                        <span key={challenge} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Equipment Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {env.equipment.map((equip) => (
                        <span key={equip} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {equip}
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
          Physical Requirements
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {physicalRequirements.map((req, index) => (
            <Card 
              key={req.requirement}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{req.requirement}</CardTitle>
                <CardDescription>{req.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <span className="font-semibold text-muted-foreground">Importance: </span>
                  <span className="text-orange-600">{req.importance}</span>
                </div>
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
          Power Your Career to New Heights
        </h2>
        <p className="text-lg text-muted-foreground">
          Energize your future with Red Seal Powerlinesman certification - high-voltage skills, excellent wages, and essential infrastructure work keeping communities powered
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