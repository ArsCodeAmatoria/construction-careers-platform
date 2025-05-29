'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Square, 
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
  Building,
  Layers,
  Grid,
  Settings,
  Gauge,
  Eye,
  Thermometer
} from "lucide-react"

const concreteFinisherOverview = {
  name: "Concrete Finisher",
  duration: "3 years",
  wage: "$18-32/hour",
  journeyWage: "$25-40/hour",
  demand: "High",
  description: "Shape, smooth, and finish surfaces of poured concrete floors, walls, sidewalks, and other structures using specialized tools and techniques",
  icon: <Square className="h-16 w-16 text-gray-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Basic concrete properties", "Surface preparation", "Hand finishing tools", "Safety protocols", "Curing techniques"],
    wage: "$16-22/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Power tool operation", "Decorative techniques", "Repair methods", "Quality control", "Advanced finishing"],
    wage: "$18-28/hour",
    focus: "Advanced Techniques"
  },
  {
    year: "Year 3",
    hours: "1,500 work hours + 150 classroom hours", 
    topics: ["Specialized applications", "Supervision skills", "Estimating", "Business practices", "Complex projects"],
    wage: "$20-32/hour",
    focus: "Mastery & Leadership"
  }
]

const finishingTechniques = [
  {
    technique: "Float Finishing",
    description: "Smooth surface preparation using bull floats and hand floats",
    applications: ["Sidewalks", "Driveways", "Basement floors", "Garage slabs"],
    tools: ["Bull float", "Hand float", "Magnesium float", "Wood float"],
    difficulty: "Basic",
    icon: <Settings className="h-6 w-6 text-blue-500 float" />
  },
  {
    technique: "Trowel Finishing",
    description: "Dense, smooth finish using steel trowels for high-traffic areas", 
    applications: ["Industrial floors", "Commercial spaces", "Warehouses", "Machine shops"],
    tools: ["Steel trowel", "Power trowel", "Fresno trowel", "Edging trowel"],
    difficulty: "Intermediate",
    icon: <Wrench className="h-6 w-6 text-green-500 float" />
  },
  {
    technique: "Stamped Concrete",
    description: "Decorative patterns and textures pressed into concrete surface",
    applications: ["Patios", "Pool decks", "Walkways", "Decorative surfaces"],
    tools: ["Texture mats", "Stamps", "Release agents", "Color hardeners"],
    difficulty: "Advanced",
    icon: <Grid className="h-6 w-6 text-purple-500 float" />
  },
  {
    technique: "Exposed Aggregate",
    description: "Revealing decorative stones by removing surface mortar",
    applications: ["Driveways", "Sidewalks", "Architectural features", "Pool surrounds"],
    tools: ["Surface retarder", "Broom", "Water hose", "Chemical retarder"],
    difficulty: "Advanced",
    icon: <Layers className="h-6 w-6 text-orange-500 float" />
  }
]

const specializations = [
  {
    title: "Decorative Concrete",
    description: "Artistic and decorative concrete applications",
    techniques: ["Stamped concrete", "Colored concrete", "Exposed aggregate", "Polished concrete"],
    projects: ["Patios", "Pool decks", "Architectural features", "Commercial spaces"],
    salary: "$22-38/hour",
    demand: "High"
  },
  {
    title: "Industrial Flooring",
    description: "Heavy-duty concrete floors for industrial applications",
    techniques: ["Power troweling", "Surface hardeners", "Joint sealing", "Repair techniques"],
    projects: ["Warehouses", "Manufacturing plants", "Distribution centers", "Machine shops"],
    salary: "$24-40/hour",
    demand: "Very High"
  },
  {
    title: "Repair Specialist",
    description: "Concrete restoration and repair work",
    techniques: ["Crack repair", "Spall repair", "Surface restoration", "Protective coatings"],
    projects: ["Bridge repair", "Building restoration", "Parking structures", "Infrastructure"],
    salary: "$26-42/hour",
    demand: "High"
  },
  {
    title: "Architectural Concrete",
    description: "High-end architectural and structural concrete work",
    techniques: ["Form finishing", "Precast elements", "Textured surfaces", "Precision work"],
    projects: ["Commercial buildings", "Architectural features", "Monuments", "Bridges"],
    salary: "$28-45/hour",
    demand: "Medium"
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Steel trowels", "Float tools", "Edgers", "Groovers", "Brushes"],
    cost: "$300-800"
  },
  {
    category: "Power Tools", 
    items: ["Power trowels", "Grinders", "Saws", "Mixers", "Screeds"],
    cost: "$2,000-8,000"
  },
  {
    category: "Safety Equipment",
    items: ["Knee pads", "Safety glasses", "Hard hats", "Work boots", "Gloves"],
    cost: "$200-500"
  },
  {
    category: "Measuring Tools",
    items: ["Levels", "Measuring tapes", "Squares", "String lines", "Gauges"],
    cost: "$150-400"
  }
]

const concreteTypes = [
  {
    type: "Standard Concrete",
    mixRatio: "1:2:3 (cement:sand:gravel)",
    applications: ["Foundations", "Sidewalks", "Driveways", "Basic structures"],
    strengthPSI: "2,500-4,000 PSI",
    cureTime: "28 days full strength"
  },
  {
    type: "High-Strength Concrete",
    mixRatio: "1:1.5:2.5 with additives",
    applications: ["High-rise buildings", "Bridges", "Heavy-duty floors", "Structural elements"],
    strengthPSI: "5,000-8,000+ PSI",
    cureTime: "28-56 days full strength"
  },
  {
    type: "Lightweight Concrete",
    mixRatio: "Expanded aggregates",
    applications: ["Roof decks", "Block fill", "Precast panels", "Insulating concrete"],
    strengthPSI: "1,500-3,000 PSI",
    cureTime: "28 days full strength"
  },
  {
    type: "Fiber-Reinforced",
    mixRatio: "Standard mix + fiber",
    applications: ["Industrial floors", "Overlays", "Repair work", "Crack-resistant surfaces"],
    strengthPSI: "3,000-5,000 PSI",
    cureTime: "28 days + enhanced durability"
  }
]

const safetyRequirements = [
  {
    title: "Personal Protective Equipment",
    requirements: ["Safety glasses", "Hard hats", "Knee protection", "Non-slip footwear"],
    certification: "PPE Training"
  },
  {
    title: "Chemical Safety",
    requirements: ["Skin protection", "Concrete burn prevention", "Chemical handling", "First aid knowledge"],
    certification: "WHMIS certification"
  },
  {
    title: "Tool Safety",
    requirements: ["Power tool operation", "Equipment maintenance", "Electrical safety", "Machine guarding"],
    certification: "Tool Safety Training"
  },
  {
    title: "Site Safety",
    requirements: ["Fall protection", "Traffic control", "Weather awareness", "Emergency procedures"],
    certification: "Construction Safety"
  }
]

const workEnvironments = [
  {
    environment: "Residential Construction",
    conditions: ["Outdoor work", "Various weather", "Homeowner interaction", "Tight schedules"],
    challenges: ["Weather delays", "Access limitations", "Quality expectations", "Time pressure"],
    projects: ["Driveways", "Patios", "Sidewalks", "Basement floors"]
  },
  {
    environment: "Commercial Construction",
    conditions: ["Large-scale projects", "Team coordination", "Strict deadlines", "Quality standards"],
    challenges: ["Project complexity", "Safety protocols", "Equipment coordination", "Schedule management"],
    projects: ["Office buildings", "Retail spaces", "Warehouses", "Parking structures"]
  },
  {
    environment: "Industrial Facilities",
    conditions: ["Heavy-duty requirements", "Precision work", "Specialized equipment", "Safety focus"],
    challenges: ["Chemical resistance", "Load requirements", "Surface tolerances", "Environmental factors"],
    projects: ["Manufacturing floors", "Processing plants", "Distribution centers", "Heavy equipment pads"]
  },
  {
    environment: "Infrastructure",
    conditions: ["Public projects", "Traffic management", "Long-term durability", "Regulatory compliance"],
    challenges: ["Public safety", "Traffic control", "Weather exposure", "Longevity requirements"],
    projects: ["Roads", "Bridges", "Sidewalks", "Public facilities"]
  }
]

const qualityFactors = [
  {
    factor: "Surface Finish",
    importance: "Critical for appearance and durability",
    techniques: ["Proper floating", "Trowel timing", "Surface preparation", "Curing protection"],
    measurement: "Visual inspection, surface texture tests"
  },
  {
    factor: "Flatness/Levelness",
    importance: "Essential for proper drainage and function",
    techniques: ["Laser screed", "String line", "Proper slump", "Skilled finishing"],
    measurement: "F-number system, straightedge testing"
  },
  {
    factor: "Strength Development",
    importance: "Structural integrity and load capacity",
    techniques: ["Proper mix design", "Adequate curing", "Temperature control", "Moisture retention"],
    measurement: "Compression tests, core samples"
  },
  {
    factor: "Durability",
    importance: "Long-term performance and maintenance",
    techniques: ["Proper air content", "Low water-cement ratio", "Quality materials", "Protection during cure"],
    measurement: "Freeze-thaw tests, permeability tests"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$16-22/hour",
    responsibilities: ["Basic finishing", "Tool preparation", "Surface prep", "Safety compliance"],
    skills: ["Hand tool use", "Basic techniques", "Safety awareness"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-3",
    wage: "$18-32/hour", 
    responsibilities: ["Advanced finishing", "Power tool operation", "Quality control", "Training helpers"],
    skills: ["Decorative techniques", "Problem solving", "Equipment operation"]
  },
  {
    level: "Journeyperson Finisher",
    years: "3+ years",
    wage: "$25-40/hour",
    responsibilities: ["Project leadership", "Quality assurance", "Complex finishing", "Apprentice training"],
    skills: ["All techniques", "Supervision", "Estimating"]
  },
  {
    level: "Specialist/Contractor",
    years: "5+ years",
    wage: "$35,000-80,000+/year",
    responsibilities: ["Business management", "Client relations", "Project coordination", "Specialized services"],
    skills: ["Business operations", "Customer service", "Advanced specializations"]
  }
]

const industryApplications = [
  {
    sector: "Residential Construction", 
    applications: ["Driveways", "Patios", "Walkways", "Basement floors"],
    growth: "+12% annually"
  },
  {
    sector: "Commercial Construction",
    applications: ["Office buildings", "Retail spaces", "Warehouses", "Parking structures"],
    growth: "+15% annually"
  },
  {
    sector: "Industrial",
    applications: ["Manufacturing floors", "Processing plants", "Distribution centers", "Heavy equipment pads"],
    growth: "+18% annually"
  },
  {
    sector: "Infrastructure", 
    applications: ["Roads", "Bridges", "Sidewalks", "Public facilities"],
    growth: "+20% annually"
  }
]

export default function ConcreteFinisherPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="space-y-4">
        <Link href="/programs/apprenticeships/construction-trades">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Construction Trades
          </Button>
        </Link>
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            {concreteFinisherOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {concreteFinisherOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {concreteFinisherOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {concreteFinisherOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {concreteFinisherOverview.wage}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {concreteFinisherOverview.demand} Demand
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
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Finishing Techniques
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {finishingTechniques.map((technique, index) => (
            <Card 
              key={technique.technique}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {technique.icon}
                  <div>
                    <CardTitle className="text-lg">{technique.technique}</CardTitle>
                    <CardDescription>{technique.description}</CardDescription>
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-600">
                  Difficulty: {technique.difficulty}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tools Required:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {tool}
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
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Techniques:</h4>
                    <div className="flex flex-wrap gap-1">
                      {spec.techniques.map((tech) => (
                        <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Project Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {spec.projects.map((project) => (
                        <span key={project} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {project}
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
          Concrete Types & Applications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {concreteTypes.map((concrete, index) => (
            <Card 
              key={concrete.type}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{concrete.type}</CardTitle>
                <div className="text-sm font-medium text-blue-600">
                  Strength: {concrete.strengthPSI}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Mix Ratio:</h4>
                    <p className="text-sm">{concrete.mixRatio}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Cure Time:</h4>
                    <p className="text-sm">{concrete.cureTime}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {concrete.applications.map((app) => (
                        <span key={app} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
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
          Quality Control Factors
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {qualityFactors.map((factor, index) => (
            <Card 
              key={factor.factor}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{factor.factor}</CardTitle>
                <CardDescription className="text-orange-600 font-medium">
                  {factor.importance}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Techniques:</h4>
                    <div className="flex flex-wrap gap-1">
                      {factor.techniques.map((tech) => (
                        <span key={tech} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Measurement:</h4>
                    <p className="text-sm text-gray-600">{factor.measurement}</p>
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
                    <div className="flex flex-wrap gap-1">
                      {env.conditions.map((condition) => (
                        <span key={condition} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {condition}
                        </span>
                      ))}
                    </div>
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Typical Projects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {env.projects.map((project) => (
                        <span key={project} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {project}
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
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
          Build Your Foundation in Concrete Finishing
        </h2>
        <p className="text-lg text-muted-foreground">
          Master the art and science of concrete finishing - essential skills for construction, excellent job security, and opportunities for creative and technical growth
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