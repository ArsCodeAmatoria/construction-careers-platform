'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Cog, 
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
  Thermometer,
  Wind,
  Snowflake,
  Flame
} from "lucide-react"

const hvacOverview = {
  name: "HVAC Technician",
  code: "313A",
  duration: "4 years",
  wage: "$19-36/hour",
  journeyWage: "$26-48/hour",
  demand: "Very High",
  description: "Install, maintain, and repair heating, ventilation, and air conditioning systems in residential, commercial, and industrial buildings",
  icon: <Cog className="h-16 w-16 text-cyan-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Basic HVAC principles", "Safety procedures", "Hand tools", "Electrical fundamentals", "Refrigeration basics"],
    wage: "$17-22/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 8 weeks school",
    topics: ["System installation", "Ductwork", "Controls", "Heat pumps", "Troubleshooting basics"],
    wage: "$19-26/hour",
    focus: "System Installation"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 8 weeks school", 
    topics: ["Commercial systems", "Boilers", "Chillers", "Advanced controls", "Energy efficiency"],
    wage: "$21-30/hour",
    focus: "Commercial Systems"
  },
  {
    year: "Year 4",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Complex diagnostics", "System design", "Green technology", "Business skills", "Code compliance"],
    wage: "$23-34/hour",
    focus: "Specialization & Leadership"
  }
]

const systemTypes = [
  {
    system: "Heating Systems",
    description: "Gas, oil, and electric heating equipment",
    components: ["Furnaces", "Boilers", "Heat pumps", "Radiant heating", "Heat exchangers"],
    applications: ["Residential heating", "Commercial boilers", "Industrial processes", "District heating"],
    icon: <Flame className="h-6 w-6 text-red-500 float" />
  },
  {
    system: "Air Conditioning",
    description: "Cooling and dehumidification systems", 
    components: ["Central AC", "Split systems", "Chillers", "Cooling towers", "Evaporative coolers"],
    applications: ["Home cooling", "Office buildings", "Data centers", "Process cooling"],
    icon: <Snowflake className="h-6 w-6 text-blue-500 float" />
  },
  {
    system: "Ventilation",
    description: "Air movement and quality control",
    components: ["Exhaust fans", "Supply fans", "Dampers", "Air cleaners", "Energy recovery"],
    applications: ["Kitchen ventilation", "Bathroom fans", "Industrial exhaust", "Clean rooms"],
    icon: <Wind className="h-6 w-6 text-green-500 float" />
  },
  {
    system: "Refrigeration",
    description: "Commercial and industrial cooling",
    components: ["Walk-in coolers", "Display cases", "Ice machines", "Freezers", "Process cooling"],
    applications: ["Restaurants", "Grocery stores", "Warehouses", "Food processing"],
    icon: <Thermometer className="h-6 w-6 text-purple-500 float" />
  }
]

const specializations = [
  {
    title: "Residential HVAC",
    description: "Home heating and cooling systems",
    systems: ["Central air", "Heat pumps", "Ductless mini-splits", "Furnaces", "Smart thermostats"],
    demand: "Very High",
    salary: "$20-38/hour"
  },
  {
    title: "Commercial HVAC",
    description: "Large building climate control", 
    systems: ["Rooftop units", "Chillers", "Boilers", "VAV systems", "Building automation"],
    demand: "High",
    salary: "$24-42/hour"
  },
  {
    title: "Industrial HVAC",
    description: "Manufacturing and process systems",
    systems: ["Process cooling", "Clean rooms", "Dust collection", "Fume extraction", "Specialized controls"],
    demand: "High",
    salary: "$26-45/hour"
  },
  {
    title: "Energy Management",
    description: "Efficiency and sustainability focus",
    systems: ["Energy audits", "System optimization", "Green technologies", "Smart controls", "Renewable integration"],
    demand: "Very High",
    salary: "$28-48/hour"
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Wrenches", "Gauges", "Leak detectors", "Multimeter", "Pipe cutters", "Tubing benders"],
    cost: "$800-1,500"
  },
  {
    category: "Power Tools", 
    items: ["Drill", "Reciprocating saw", "Vacuum pump", "Recovery machine", "Brazing torch", "Pipe threader"],
    cost: "$2,000-4,000"
  },
  {
    category: "Diagnostic Equipment",
    items: ["Refrigerant manifolds", "Digital thermometers", "Combustion analyzer", "Airflow meters", "Pressure switches"],
    cost: "$1,500-3,500"
  },
  {
    category: "Safety Equipment",
    items: ["Hard hat", "Safety glasses", "Work gloves", "Respirator", "Fall protection", "Gas detectors"],
    cost: "$400-800"
  }
]

const refrigerantKnowledge = [
  {
    type: "R-410A",
    properties: ["High pressure", "Non-ozone depleting", "Common residential", "Two-component blend"],
    applications: ["Residential AC", "Heat pumps", "Small commercial", "New installations"],
    handling: ["Higher pressure ratings", "Special recovery equipment", "No venting allowed", "Leak detection critical"]
  },
  {
    type: "R-22 (Freon)",
    properties: ["Being phased out", "Ozone depleting", "Single component", "Lower pressure"],
    applications: ["Older systems", "Replacement parts", "Retrofit applications", "Phase-out compliance"],
    handling: ["EPA certification required", "Recovery mandatory", "Limited availability", "Retrofit considerations"]
  },
  {
    type: "R-32",
    properties: ["Lower GWP", "Single component", "Flammable (A2L)", "Energy efficient"],
    applications: ["New equipment", "Environmental focus", "European adoption", "Future systems"],
    handling: ["Special training required", "Leak detection systems", "Ventilation considerations", "Safety protocols"]
  },
  {
    type: "Natural Refrigerants",
    properties: ["CO2", "Ammonia", "Hydrocarbons", "Environmental friendly"],
    applications: ["Commercial refrigeration", "Industrial systems", "Heat pumps", "Specialty applications"],
    handling: ["Specialized training", "Safety equipment", "Pressure considerations", "Toxicity awareness"]
  }
]

const safetyRequirements = [
  {
    title: "Electrical Safety",
    requirements: ["Lockout/tagout", "Proper grounding", "Arc flash protection", "Voltage testing"],
    certification: "Electrical Safety Training"
  },
  {
    title: "Refrigerant Handling",
    requirements: ["EPA certification", "Recovery procedures", "Leak detection", "Ventilation requirements"],
    certification: "EPA Section 608 certification"
  },
  {
    title: "Chemical Safety",
    requirements: ["WHMIS training", "Acid handling", "Cleaning chemicals", "Proper storage"],
    certification: "Chemical Handling certification"
  },
  {
    title: "Height Safety",
    requirements: ["Fall protection", "Ladder safety", "Roof work", "Equipment hoisting"],
    certification: "Working at Heights certification"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$17-22/hour",
    responsibilities: ["Basic installations", "Helper duties", "Tool maintenance", "Safety compliance"],
    skills: ["Hand tool usage", "Basic electrical", "Safety procedures"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-4",
    wage: "$19-34/hour", 
    responsibilities: ["System installation", "Maintenance", "Troubleshooting", "Customer service"],
    skills: ["System knowledge", "Diagnostics", "Refrigerant handling"]
  },
  {
    level: "Journeyperson HVAC Tech",
    years: "4+ years",
    wage: "$26-48/hour",
    responsibilities: ["Complex repairs", "System commissioning", "Training others", "Project leadership"],
    skills: ["All systems", "Supervision", "Problem solving"]
  },
  {
    level: "HVAC Contractor/Supervisor",
    years: "8+ years",
    wage: "$40,000-120,000+/year",
    responsibilities: ["Business ownership", "Project management", "Staff supervision", "Customer relations"],
    skills: ["Business management", "Estimating", "Leadership"]
  }
]

const industryApplications = [
  {
    sector: "Residential Service", 
    applications: ["Home AC repair", "Furnace installation", "Heat pump service", "Duct cleaning"],
    growth: "+22% annually"
  },
  {
    sector: "Commercial Construction",
    applications: ["Office buildings", "Retail spaces", "Schools", "Healthcare facilities"],
    growth: "+18% annually"
  },
  {
    sector: "Industrial Maintenance",
    applications: ["Manufacturing plants", "Food processing", "Data centers", "Clean rooms"],
    growth: "+15% annually"
  },
  {
    sector: "Green Technology", 
    applications: ["Heat pumps", "Geothermal", "Solar HVAC", "Energy efficiency"],
    growth: "+35% annually"
  }
]

export default function HVACTechnicianPage() {
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
            {hvacOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {hvacOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {hvacOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {hvacOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {hvacOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {hvacOverview.wage}
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
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          HVAC System Types
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {systemTypes.map((system, index) => (
            <Card 
              key={system.system}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {system.icon}
                  <div>
                    <CardTitle className="text-lg">{system.system}</CardTitle>
                    <CardDescription>{system.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Components:</h4>
                    <div className="flex flex-wrap gap-1">
                      {system.components.map((component) => (
                        <span key={component} className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {system.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
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
                <CardTitle className="text-lg">{spec.title}</CardTitle>
                <CardDescription>{spec.description}</CardDescription>
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
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Systems:</h4>
                  <div className="flex flex-wrap gap-1">
                    {spec.systems.map((system) => (
                      <span key={system} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {system}
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
          Refrigerant Knowledge
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {refrigerantKnowledge.map((refrigerant, index) => (
            <Card 
              key={refrigerant.type}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{refrigerant.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Properties:</h4>
                    <ul className="space-y-1">
                      {refrigerant.properties.map((prop) => (
                        <li key={prop} className="flex items-center text-xs">
                          <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                          <span>{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {refrigerant.applications.map((app) => (
                        <span key={app} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Handling Requirements:</h4>
                    <ul className="space-y-1">
                      {refrigerant.handling.map((requirement) => (
                        <li key={requirement} className="flex items-center text-xs">
                          <AlertTriangle className="h-2 w-2 mr-2 text-orange-500 flex-shrink-0" />
                          <span>{requirement}</span>
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
                    <span key={app} className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
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
          Climate Your Career Success
        </h2>
        <p className="text-lg text-muted-foreground">
          Control the future with Red Seal HVAC Technician certification - essential services, growing demand, and excellent earning potential in climate control
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