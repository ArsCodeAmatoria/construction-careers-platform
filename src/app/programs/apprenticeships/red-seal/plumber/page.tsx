'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Settings, 
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
  Wrench,
  Home,
  Factory,
  Users,
  BookOpen,
  AlertTriangle,
  Gauge,
  Droplets,
  Thermometer,
  Zap
} from "lucide-react"

const plumberOverview = {
  name: "Plumber",
  code: "306A",
  duration: "4 years",
  wage: "$22-38/hour",
  journeyWage: "$28-48/hour",
  demand: "High",
  description: "Install, maintain, and repair water supply, drainage, and gas systems in residential, commercial, and industrial buildings",
  icon: <Settings className="h-16 w-16 text-blue-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Pipe cutting & joining", "Basic plumbing codes", "Safety procedures", "Hand tools", "Water systems"],
    wage: "$20-24/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Fixture installation", "Drainage systems", "Venting principles", "Pipe materials", "Blueprint reading"],
    wage: "$22-28/hour",
    focus: "System Installation"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 8 weeks school", 
    topics: ["Heating systems", "Gas piping", "Commercial systems", "Troubleshooting", "Backflow prevention"],
    wage: "$24-32/hour",
    focus: "Advanced Systems"
  },
  {
    year: "Year 4",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Complex installations", "System design", "Code compliance", "Green technology", "Business skills"],
    wage: "$26-36/hour",
    focus: "Specialization & Leadership"
  }
]

const specializations = [
  {
    title: "Residential Plumbing",
    description: "Home water and waste systems",
    applications: ["New construction", "Renovations", "Fixture upgrades", "Water heater installation"],
    demand: "Very High",
    salary: "$24-40/hour",
    icon: <Home className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Commercial Plumbing",
    description: "Large building water and waste systems", 
    applications: ["Office buildings", "Retail spaces", "Restaurants", "Healthcare facilities"],
    demand: "High",
    salary: "$28-45/hour",
    icon: <Building className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Industrial Plumbing",
    description: "Manufacturing and processing facility systems",
    applications: ["Process piping", "Chemical handling", "Steam systems", "Specialized equipment"],
    demand: "High", 
    salary: "$30-48/hour",
    icon: <Factory className="h-6 w-6 text-orange-500 float" />
  },
  {
    title: "Gas Fitting",
    description: "Natural gas and propane system installation",
    applications: ["Gas lines", "Appliance connections", "Tank installations", "Safety systems"],
    demand: "High",
    salary: "$26-44/hour",
    icon: <Thermometer className="h-6 w-6 text-red-500 float" />
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Pipe wrenches", "Tubing cutters", "Reamers", "Pliers", "Hacksaws", "Files"],
    cost: "$600-1,000"
  },
  {
    category: "Power Tools", 
    items: ["Threading machine", "Drain cleaning machine", "Pipe cutter", "Reciprocating saw", "Hammer drill"],
    cost: "$2,000-4,000"
  },
  {
    category: "Specialized Equipment",
    items: ["Leak detectors", "Camera inspection equipment", "Pressure testing tools", "Torch set", "Pipe benders"],
    cost: "$1,500-3,500"
  },
  {
    category: "Safety Equipment",
    items: ["Hard hat", "Safety glasses", "Work gloves", "Knee pads", "Fall protection", "Gas detectors"],
    cost: "$400-800"
  }
]

const systemTypes = [
  {
    system: "Water Supply Systems",
    components: ["Supply lines", "Shut-off valves", "Pressure regulation", "Water meters", "Backflow preventers"],
    materials: ["Copper", "PEX", "PVC", "CPVC"]
  },
  {
    system: "Drainage Systems",
    components: ["Waste lines", "Vent stacks", "Traps", "Cleanouts", "Floor drains"],
    materials: ["Cast iron", "PVC", "ABS", "Clay tile"]
  },
  {
    system: "Gas Systems",
    components: ["Gas meters", "Regulators", "Shutoff valves", "Appliance connections", "Venting"],
    materials: ["Black iron", "CSST", "Copper", "PE pipe"]
  },
  {
    system: "Heating Systems",
    components: ["Boilers", "Radiators", "Hydronic piping", "Controls", "Expansion tanks"],
    materials: ["Copper", "PEX-AL-PEX", "Steel", "Cast iron"]
  }
]

const safetyRequirements = [
  {
    title: "Confined Space Safety",
    requirements: ["Confined space entry training", "Gas monitoring", "Ventilation procedures", "Emergency protocols"],
    certification: "Confined Space Entry certification"
  },
  {
    title: "Gas Line Safety",
    requirements: ["Gas leak detection", "Pressure testing", "Purging procedures", "Emergency shutoffs"],
    certification: "Gas Fitting B-License"
  },
  {
    title: "Excavation Safety",
    requirements: ["Trenching safety", "Shoring techniques", "Underground utilities", "Soil classification"],
    certification: "Excavation Safety Training"
  },
  {
    title: "General Safety",
    requirements: ["WHMIS training", "Fall protection", "First aid", "Tool safety"],
    certification: "Construction Safety Training"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$20-24/hour",
    responsibilities: ["Basic pipe cutting", "Material handling", "Tool maintenance", "Safety compliance"],
    skills: ["Pipe joining", "Tool usage", "Safety awareness"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-4",
    wage: "$22-36/hour", 
    responsibilities: ["System installation", "Troubleshooting", "Quality control", "Code compliance"],
    skills: ["System design", "Complex repairs", "Blueprint reading"]
  },
  {
    level: "Journeyperson Plumber",
    years: "4+ years",
    wage: "$28-48/hour",
    responsibilities: ["Project supervision", "System commissioning", "Code inspections", "Client consultation"],
    skills: ["Full trade competency", "Leadership", "Business knowledge"]
  },
  {
    level: "Plumbing Contractor",
    years: "8+ years",
    wage: "$60,000-200,000+/year",
    responsibilities: ["Business ownership", "Project management", "Staff supervision", "Contract bidding"],
    skills: ["Business management", "Strategic planning", "Customer relations"]
  }
]

const industryApplications = [
  {
    sector: "Residential Construction", 
    applications: ["New home plumbing", "Bathroom renovations", "Kitchen upgrades", "Water heater replacement"],
    growth: "+18% annually"
  },
  {
    sector: "Commercial Construction",
    applications: ["Office building systems", "Retail plumbing", "Restaurant equipment", "Healthcare facilities"],
    growth: "+14% annually"
  },
  {
    sector: "Industrial Services",
    applications: ["Process piping", "Maintenance services", "System upgrades", "Emergency repairs"],
    growth: "+12% annually"
  },
  {
    sector: "Green Technology", 
    applications: ["Water conservation systems", "Solar hot water", "Greywater systems", "High-efficiency fixtures"],
    growth: "+25% annually"
  }
]

export default function PlumberPage() {
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
            {plumberOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {plumberOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {plumberOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {plumberOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {plumberOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {plumberOverview.wage}
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
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          System Types & Components
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {systemTypes.map((system, index) => (
            <Card 
              key={system.system}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                  {system.system}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Components:</h4>
                    <div className="flex flex-wrap gap-1">
                      {system.components.map((component) => (
                        <span key={component} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Materials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {system.materials.map((material) => (
                        <span key={material} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {material}
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
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                    <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
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
          Start Your Plumbing Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Flow into a rewarding career with Red Seal Plumber certification - essential services, steady work, and excellent earning potential
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