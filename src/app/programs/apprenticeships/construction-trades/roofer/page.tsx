'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Home, 
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
  Wrench,
  Factory,
  Users,
  AlertTriangle,
  Layers,
  Cloud,
  Hammer,
  Settings,
  Gauge,
  Thermometer,
  Wind,
  Droplets,
  Sun
} from "lucide-react"

const rooferOverview = {
  name: "Roofer",
  duration: "3 years",
  wage: "$19-35/hour",
  journeyWage: "$28-45/hour",
  demand: "Very High",
  description: "Install, repair, and maintain roofs using various materials and techniques to protect buildings from weather elements",
  icon: <Home className="h-16 w-16 text-red-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Basic roofing principles", "Safety procedures", "Material identification", "Tool operation", "Simple repairs"],
    wage: "$17-24/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Advanced installation", "Multiple materials", "Ventilation systems", "Insulation", "Weather sealing"],
    wage: "$20-30/hour",
    focus: "Advanced Techniques"
  },
  {
    year: "Year 3",
    hours: "1,500 work hours + 150 classroom hours", 
    topics: ["Complex systems", "Problem diagnosis", "Supervision skills", "Estimating", "Business practices"],
    wage: "$23-35/hour",
    focus: "Mastery & Leadership"
  }
]

const roofingMaterials = [
  {
    material: "Asphalt Shingles",
    description: "Most common residential roofing material",
    lifespan: "15-30 years",
    applications: ["Residential homes", "Small commercial", "Garages", "Sheds"],
    advantages: ["Cost-effective", "Easy installation", "Wide color selection", "Good durability"],
    techniques: ["Overlap installation", "Nail placement", "Ridge capping", "Flashing integration"],
    icon: <Layers className="h-6 w-6 text-blue-500 float" />
  },
  {
    material: "Metal Roofing",
    description: "Durable steel, aluminum, or copper roofing systems", 
    lifespan: "40-70 years",
    applications: ["Commercial buildings", "Industrial facilities", "High-end residential", "Agricultural"],
    advantages: ["Long-lasting", "Weather resistant", "Energy efficient", "Recyclable"],
    techniques: ["Panel fastening", "Seam sealing", "Thermal expansion", "Snow guards"],
    icon: <Settings className="h-6 w-6 text-gray-500 float" />
  },
  {
    material: "Membrane Roofing",
    description: "Single-ply membrane systems for flat/low-slope roofs",
    lifespan: "20-30 years",
    applications: ["Commercial buildings", "Industrial facilities", "Warehouses", "Apartment buildings"],
    advantages: ["Waterproof", "UV resistant", "Lightweight", "Energy efficient"],
    techniques: ["Heat welding", "Adhesive application", "Mechanical fastening", "Seam testing"],
    icon: <Cloud className="h-6 w-6 text-purple-500 float" />
  },
  {
    material: "Tile Roofing",
    description: "Clay or concrete tiles for decorative and functional roofing",
    lifespan: "50-100 years",
    applications: ["Mediterranean style homes", "High-end residential", "Historical buildings", "Architectural features"],
    advantages: ["Very durable", "Fire resistant", "Attractive appearance", "Low maintenance"],
    techniques: ["Tile laying", "Mortar application", "Ridge installation", "Underlayment"],
    icon: <Home className="h-6 w-6 text-orange-500 float" />
  }
]

const specializations = [
  {
    title: "Residential Roofing",
    description: "Traditional home roofing installation and repair",
    materials: ["Asphalt shingles", "Wood shakes", "Metal panels", "Tile systems"],
    projects: ["New homes", "Roof replacements", "Storm repairs", "Additions"],
    salary: "$22-38/hour",
    demand: "Very High"
  },
  {
    title: "Commercial Roofing",
    description: "Large-scale commercial and industrial roofing systems",
    materials: ["EPDM membrane", "TPO systems", "Modified bitumen", "Built-up roofing"],
    projects: ["Office buildings", "Warehouses", "Shopping centers", "Factories"],
    salary: "$26-42/hour",
    demand: "High"
  },
  {
    title: "Green Roofing",
    description: "Environmentally sustainable roofing systems",
    materials: ["Living systems", "Solar integration", "Cool roof materials", "Recycled products"],
    projects: ["LEED buildings", "Urban agriculture", "Energy efficient", "Stormwater management"],
    salary: "$28-45/hour",
    demand: "Growing"
  },
  {
    title: "Historical Restoration",
    description: "Restoration of heritage and historical building roofs",
    materials: ["Traditional materials", "Slate", "Cedar shakes", "Clay tiles"],
    projects: ["Heritage buildings", "Churches", "Government buildings", "Historic homes"],
    salary: "$30-48/hour",
    demand: "Medium"
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Roofing hammers", "Utility knives", "Measuring tools", "Chalk lines", "Pry bars"],
    cost: "$200-600"
  },
  {
    category: "Power Tools", 
    items: ["Nail guns", "Circular saws", "Heat guns", "Drills", "Air compressors"],
    cost: "$1,500-5,000"
  },
  {
    category: "Safety Equipment",
    items: ["Safety harnesses", "Hard hats", "Non-slip boots", "Safety glasses", "Knee pads"],
    cost: "$300-800"
  },
  {
    category: "Specialized Tools",
    items: ["Roofing jacks", "Ladder hooks", "Material hoists", "Seaming tools", "Membrane welders"],
    cost: "$1,000-3,000"
  }
]

const weatherConsiderations = [
  {
    condition: "High Winds",
    challenges: ["Material displacement", "Safety hazards", "Installation difficulty", "Quality issues"],
    solutions: ["Wind-resistant fastening", "Temporary bracing", "Work scheduling", "Enhanced securement"],
    techniques: ["Increased nail patterns", "Adhesive backing", "Clip systems", "Storm-rated materials"]
  },
  {
    condition: "Rain/Moisture",
    challenges: ["Work delays", "Safety risks", "Material damage", "Sealing issues"],
    solutions: ["Weather monitoring", "Temporary covering", "Moisture barriers", "Proper timing"],
    techniques: ["Quick installation", "Waterproof underlayment", "Tarping systems", "Drainage planning"]
  },
  {
    condition: "Temperature Extremes",
    challenges: ["Material behavior", "Worker safety", "Installation problems", "Thermal expansion"],
    solutions: ["Temperature monitoring", "Material adjustment", "Work timing", "Expansion joints"],
    techniques: ["Hot weather installation", "Cold weather sealing", "Thermal barriers", "Flexible materials"]
  },
  {
    condition: "Snow/Ice",
    challenges: ["Load calculations", "Ice dams", "Safety hazards", "Access problems"],
    solutions: ["Load assessment", "Ice protection", "Snow removal", "Access planning"],
    techniques: ["Snow guards", "Ice barriers", "Heating systems", "Load distribution"]
  }
]

const safetyRequirements = [
  {
    title: "Fall Protection",
    requirements: ["Safety harnesses", "Anchor points", "Guardrails", "Safety nets"],
    certification: "Fall Protection Training"
  },
  {
    title: "Ladder Safety",
    requirements: ["Proper setup", "Three-point contact", "Weight limits", "Inspection procedures"],
    certification: "Ladder Safety Course"
  },
  {
    title: "Tool Safety",
    requirements: ["Power tool operation", "Hand tool maintenance", "Pneumatic safety", "Equipment inspection"],
    certification: "Tool Safety Training"
  },
  {
    title: "Weather Safety",
    requirements: ["Wind monitoring", "Lightning awareness", "Heat stress prevention", "Cold weather protection"],
    certification: "Weather Safety Training"
  }
]

const workEnvironments = [
  {
    environment: "Residential Projects",
    conditions: ["Homeowner interaction", "Various roof slopes", "Limited access", "Aesthetic focus"],
    challenges: ["Customer satisfaction", "Property protection", "Noise considerations", "Schedule flexibility"],
    projects: ["New construction", "Re-roofing", "Repairs", "Additions"]
  },
  {
    environment: "Commercial Construction",
    conditions: ["Large-scale projects", "Team coordination", "Safety protocols", "Equipment access"],
    challenges: ["Project scheduling", "Safety compliance", "Quality standards", "Weather delays"],
    projects: ["Office buildings", "Retail centers", "Warehouses", "Industrial facilities"]
  },
  {
    environment: "Emergency Repairs",
    conditions: ["Urgent response", "Damaged structures", "Weather exposure", "Safety hazards"],
    challenges: ["Time pressure", "Hazardous conditions", "Temporary solutions", "Insurance coordination"],
    projects: ["Storm damage", "Leak repairs", "Structural issues", "Emergency coverage"]
  },
  {
    environment: "Specialty Applications",
    conditions: ["Unique requirements", "Specialized materials", "Technical expertise", "Custom solutions"],
    challenges: ["Technical complexity", "Material sourcing", "Skill requirements", "Quality precision"],
    projects: ["Green roofs", "Solar integration", "Historical restoration", "Architectural features"]
  }
]

const qualityFactors = [
  {
    factor: "Weather Sealing",
    importance: "Critical for building protection",
    techniques: ["Proper overlap", "Flashing installation", "Sealant application", "Membrane integrity"],
    measurement: "Water testing, visual inspection"
  },
  {
    factor: "Structural Integrity",
    importance: "Essential for safety and durability",
    techniques: ["Proper fastening", "Load distribution", "Support systems", "Material compatibility"],
    measurement: "Load testing, engineering review"
  },
  {
    factor: "Thermal Performance",
    importance: "Energy efficiency and comfort",
    techniques: ["Insulation installation", "Vapor barriers", "Ventilation systems", "Thermal bridging"],
    measurement: "Thermal imaging, energy testing"
  },
  {
    factor: "Aesthetic Appeal",
    importance: "Property value and owner satisfaction",
    techniques: ["Uniform appearance", "Color matching", "Clean lines", "Proper alignment"],
    measurement: "Visual inspection, owner approval"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$17-24/hour",
    responsibilities: ["Basic installation", "Material handling", "Safety compliance", "Site cleanup"],
    skills: ["Hand tool use", "Basic techniques", "Safety awareness"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-3",
    wage: "$20-35/hour", 
    responsibilities: ["Complex installation", "Quality control", "Equipment operation", "Training helpers"],
    skills: ["Multiple materials", "Problem solving", "Equipment operation"]
  },
  {
    level: "Journeyperson Roofer",
    years: "3+ years",
    wage: "$28-45/hour",
    responsibilities: ["Project leadership", "Quality assurance", "Complex repairs", "Apprentice training"],
    skills: ["All materials", "Supervision", "Estimating"]
  },
  {
    level: "Contractor/Specialist",
    years: "5+ years",
    wage: "$40,000-90,000+/year",
    responsibilities: ["Business management", "Client relations", "Project coordination", "Specialized services"],
    skills: ["Business operations", "Customer service", "Advanced specializations"]
  }
]

const industryApplications = [
  {
    sector: "Residential Construction", 
    applications: ["New homes", "Re-roofing", "Repairs", "Additions"],
    growth: "+18% annually"
  },
  {
    sector: "Commercial Construction",
    applications: ["Office buildings", "Retail spaces", "Warehouses", "Industrial facilities"],
    growth: "+15% annually"
  },
  {
    sector: "Green Building",
    applications: ["Solar roofs", "Living roofs", "Cool roofs", "Energy efficiency"],
    growth: "+25% annually"
  },
  {
    sector: "Maintenance & Repair", 
    applications: ["Storm damage", "Leak repairs", "Preventive maintenance", "Inspections"],
    growth: "+12% annually"
  }
]

export default function RooferPage() {
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
            {rooferOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {rooferOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {rooferOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {rooferOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {rooferOverview.wage}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {rooferOverview.demand} Demand
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
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Roofing Materials & Systems
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {roofingMaterials.map((material, index) => (
            <Card 
              key={material.material}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {material.icon}
                  <div>
                    <CardTitle className="text-lg">{material.material}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-600">
                  Lifespan: {material.lifespan}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Advantages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.advantages.map((adv) => (
                        <span key={adv} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {adv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Techniques:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.techniques.map((tech) => (
                        <span key={tech} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {tech}
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
          Weather Considerations
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {weatherConsiderations.map((weather, index) => (
            <Card 
              key={weather.condition}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Cloud className="h-5 w-5 mr-2 text-blue-500" />
                  {weather.condition}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Challenges:</h4>
                    <div className="flex flex-wrap gap-1">
                      {weather.challenges.map((challenge) => (
                        <span key={challenge} className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Solutions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {weather.solutions.map((solution) => (
                        <span key={solution} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Techniques:</h4>
                    <div className="flex flex-wrap gap-1">
                      {weather.techniques.map((tech) => (
                        <span key={tech} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tech}
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
                  <span className={`font-medium ${spec.demand === 'Very High' ? 'text-red-500' : spec.demand === 'High' ? 'text-orange-500' : spec.demand === 'Growing' ? 'text-green-500' : 'text-yellow-500'}`}>
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Materials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {spec.materials.map((material) => (
                        <span key={material} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {material}
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
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
          Build Your Career in Roofing
        </h2>
        <p className="text-lg text-muted-foreground">
          Protect buildings and create lasting structures - essential skills for construction, excellent job security, and opportunities in growing green building sector
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