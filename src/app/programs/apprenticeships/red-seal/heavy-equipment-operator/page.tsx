'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Building, 
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
  Truck,
  Mountain,
  Fuel,
  Gauge
} from "lucide-react"

const operatorOverview = {
  name: "Heavy Equipment Operator",
  code: "349A",
  duration: "3 years",
  wage: "$24-45/hour",
  journeyWage: "$28-55/hour",
  demand: "High",
  description: "Operate heavy machinery and equipment for construction, mining, forestry, and infrastructure projects",
  icon: <Building className="h-16 w-16 text-green-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 6 weeks school",
    topics: ["Equipment safety", "Basic operation", "Maintenance procedures", "Site preparation", "Material handling"],
    wage: "$22-28/hour",
    focus: "Foundation Operation"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 6 weeks school",
    topics: ["Advanced operation", "Precision work", "Equipment systems", "Productivity optimization", "Quality control"],
    wage: "$24-32/hour",
    focus: "Advanced Techniques"
  },
  {
    year: "Year 3",
    hours: "1,500 work hours + 6 weeks school", 
    topics: ["Specialized equipment", "Site management", "Cost control", "Supervision skills", "Business operations"],
    wage: "$26-38/hour",
    focus: "Specialization & Leadership"
  }
]

const equipmentTypes = [
  {
    category: "Excavators",
    description: "Digging, trenching, and material handling",
    equipment: ["Mini excavators", "Standard excavators", "Long reach excavators", "Demolition excavators"],
    applications: ["Site excavation", "Utility trenching", "Foundation work", "Demolition"],
    icon: <Mountain className="h-6 w-6 text-brown-500 float" />
  },
  {
    category: "Bulldozers",
    description: "Earthmoving and site preparation", 
    equipment: ["Track dozers", "Wheel dozers", "Mini dozers", "Angle dozers"],
    applications: ["Land clearing", "Grading", "Push-loading", "Final grade"],
    icon: <Truck className="h-6 w-6 text-yellow-500 float" />
  },
  {
    category: "Loaders",
    description: "Material loading and transport",
    equipment: ["Wheel loaders", "Track loaders", "Skid steers", "Backhoe loaders"],
    applications: ["Material loading", "Snow removal", "Site cleanup", "Stockpiling"],
    icon: <Building className="h-6 w-6 text-orange-500 float" />
  },
  {
    category: "Road Equipment",
    description: "Road construction and maintenance",
    equipment: ["Motor graders", "Compactors", "Pavers", "Milling machines"],
    applications: ["Road grading", "Paving operations", "Surface preparation", "Maintenance"],
    icon: <Gauge className="h-6 w-6 text-blue-500 float" />
  }
]

const specializations = [
  {
    title: "Earthmoving Operations",
    description: "Large-scale excavation and grading",
    equipment: ["Large excavators", "Bulldozers", "Motor graders", "Scrapers"],
    demand: "Very High",
    salary: "$26-48/hour"
  },
  {
    title: "Road Construction",
    description: "Highway and infrastructure projects", 
    equipment: ["Pavers", "Compactors", "Graders", "Milling equipment"],
    demand: "High",
    salary: "$28-45/hour"
  },
  {
    title: "Mining Operations",
    description: "Resource extraction and processing",
    equipment: ["Mining excavators", "Haul trucks", "Drill rigs", "Crushing equipment"],
    demand: "High",
    salary: "$35-65/hour"
  },
  {
    title: "Crane Operations",
    description: "Lifting and placement operations",
    equipment: ["Mobile cranes", "Tower cranes", "Rough terrain cranes", "All terrain cranes"],
    demand: "Very High",
    salary: "$30-55/hour"
  }
]

const maintenanceKnowledge = [
  {
    system: "Hydraulic Systems",
    components: ["Pumps", "Cylinders", "Valves", "Filters", "Fluids"],
    maintenance: ["Fluid checks", "Filter replacement", "Seal inspection", "Pressure testing"],
    importance: "Critical for equipment operation and precision control"
  },
  {
    system: "Engine Systems",
    components: ["Diesel engines", "Cooling systems", "Air intake", "Exhaust", "Fuel systems"],
    maintenance: ["Oil changes", "Filter replacement", "Coolant service", "Belt inspection"],
    importance: "Essential for power generation and equipment reliability"
  },
  {
    system: "Drivetrain",
    components: ["Transmissions", "Differentials", "Final drives", "Tracks/tires", "Brakes"],
    maintenance: ["Gear oil service", "Track adjustment", "Brake inspection", "Tire maintenance"],
    importance: "Critical for mobility and operator safety"
  },
  {
    system: "Electrical Systems",
    components: ["Batteries", "Alternators", "Wiring", "Controls", "Displays"],
    maintenance: ["Battery service", "Connection cleaning", "System diagnostics", "Software updates"],
    importance: "Modern equipment relies heavily on electronic controls"
  }
]

const safetyRequirements = [
  {
    title: "Equipment Operation Safety",
    requirements: ["Pre-operation inspections", "Proper startup procedures", "Load capacity awareness", "Stability principles"],
    certification: "Heavy Equipment Safety certification"
  },
  {
    title: "Site Safety",
    requirements: ["Hazard identification", "Traffic control", "Underground utilities", "Overhead power lines"],
    certification: "Construction Site Safety Training"
  },
  {
    title: "Lifting Operations",
    requirements: ["Load calculations", "Rigging practices", "Signal person communication", "Crane safety zones"],
    certification: "Mobile Crane Operator certification"
  },
  {
    title: "Environmental Safety",
    requirements: ["Spill prevention", "Emission controls", "Noise management", "Soil protection"],
    certification: "Environmental Compliance Training"
  }
]

const toolsEquipment = [
  {
    category: "Personal Tools",
    items: ["Hard hat", "Safety vest", "Work boots", "Gloves", "Safety glasses", "Radio"],
    cost: "$300-600"
  },
  {
    category: "Maintenance Tools", 
    items: ["Tool kit", "Grease gun", "Pressure gauge", "Multimeter", "Inspection mirrors", "Torque wrench"],
    cost: "$800-1,500"
  },
  {
    category: "Measurement Tools",
    items: ["Measuring tape", "Grade rod", "Laser level", "Slope meter", "GPS units", "String line"],
    cost: "$500-2,000"
  },
  {
    category: "Safety Equipment",
    items: ["Spotter flags", "Warning lights", "Fire extinguisher", "First aid kit", "Emergency tools"],
    cost: "$400-800"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$22-28/hour",
    responsibilities: ["Basic operation", "Site cleanup", "Equipment maintenance", "Safety compliance"],
    skills: ["Equipment familiarization", "Safety procedures", "Basic controls"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-3",
    wage: "$24-38/hour", 
    responsibilities: ["Advanced operation", "Precision work", "Quality control", "Training others"],
    skills: ["Multiple equipment types", "Productivity focus", "Problem solving"]
  },
  {
    level: "Journeyperson Operator",
    years: "3+ years",
    wage: "$28-55/hour",
    responsibilities: ["Complex projects", "Site supervision", "Equipment selection", "Client liaison"],
    skills: ["All equipment types", "Leadership", "Project management"]
  },
  {
    level: "Equipment Supervisor",
    years: "7+ years",
    wage: "$40,000-150,000+/year",
    responsibilities: ["Fleet management", "Project coordination", "Staff supervision", "Contract oversight"],
    skills: ["Business management", "Cost control", "Strategic planning"]
  }
]

const industryApplications = [
  {
    sector: "Construction", 
    applications: ["Site preparation", "Foundation work", "Road building", "Utility installation"],
    growth: "+22% annually"
  },
  {
    sector: "Mining & Resources",
    applications: ["Surface mining", "Material handling", "Site development", "Reclamation work"],
    growth: "+18% annually"
  },
  {
    sector: "Infrastructure",
    applications: ["Highway construction", "Bridge work", "Airport development", "Port facilities"],
    growth: "+25% annually"
  },
  {
    sector: "Environmental Services", 
    applications: ["Landfill operations", "Remediation projects", "Recycling facilities", "Renewable energy"],
    growth: "+30% annually"
  }
]

export default function HeavyEquipmentOperatorPage() {
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
            {operatorOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {operatorOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {operatorOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {operatorOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {operatorOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {operatorOverview.wage}
            </span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Training Curriculum
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {trainingCurriculum.map((year, index) => (
            <Card 
              key={year.year}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Equipment Categories
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {equipmentTypes.map((category, index) => (
            <Card 
              key={category.category}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Equipment Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.equipment.map((equip) => (
                        <span key={equip} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {equip}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.applications.map((app) => (
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
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Equipment:</h4>
                  <div className="flex flex-wrap gap-1">
                    {spec.equipment.map((equip) => (
                      <span key={equip} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {equip}
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
          Equipment Maintenance Knowledge
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {maintenanceKnowledge.map((system, index) => (
            <Card 
              key={system.system}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Fuel className="h-5 w-5 mr-2 text-orange-500" />
                  {system.system}
                </CardTitle>
                <CardDescription className="text-xs mt-2">{system.importance}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Components:</h4>
                    <div className="flex flex-wrap gap-1">
                      {system.components.map((component) => (
                        <span key={component} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Maintenance Tasks:</h4>
                    <ul className="space-y-1">
                      {system.maintenance.map((task) => (
                        <li key={task} className="flex items-center text-xs">
                          <Wrench className="h-2 w-2 mr-2 text-gray-500 flex-shrink-0" />
                          <span>{task}</span>
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
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                    <span key={app} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
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
          Move Your Career Forward
        </h2>
        <p className="text-lg text-muted-foreground">
          Power through to success with Red Seal Heavy Equipment Operator certification - high demand, excellent wages, and opportunities in major construction projects
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