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
  Wind,
  Snowflake,
  Flame,
  Zap,
  Gauge
} from "lucide-react"

const sheetMetalOverview = {
  name: "Sheet Metal Worker",
  code: "308A",
  duration: "4 years",
  wage: "$20-42/hour",
  journeyWage: "$26-50/hour",
  demand: "High",
  description: "Fabricate, install, and maintain sheet metal products for HVAC, roofing, architectural, and industrial applications",
  icon: <Square className="h-16 w-16 text-silver-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Sheet metal basics", "Hand tools", "Safety procedures", "Pattern development", "Basic fabrication"],
    wage: "$18-24/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Ductwork systems", "Power tools", "Forming techniques", "Installation methods", "Blueprint reading"],
    wage: "$20-28/hour",
    focus: "System Installation"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 8 weeks school", 
    topics: ["Complex fabrication", "Architectural work", "Specialized systems", "Quality control", "Project coordination"],
    wage: "$22-32/hour",
    focus: "Advanced Techniques"
  },
  {
    year: "Year 4",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Custom work", "System design", "Supervision skills", "Estimating", "Business practices"],
    wage: "$24-36/hour",
    focus: "Specialization & Leadership"
  }
]

const specializations = [
  {
    title: "HVAC Ductwork",
    description: "Heating, ventilation, and air conditioning systems",
    work: ["Ductwork fabrication", "System installation", "Air balancing", "Energy efficiency"],
    demand: "Very High",
    salary: "$22-45/hour",
    icon: <Wind className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Roofing Systems",
    description: "Metal roofing and waterproofing systems", 
    work: ["Standing seam roofs", "Flat roof systems", "Gutters & downspouts", "Flashing installation"],
    demand: "High",
    salary: "$24-42/hour",
    icon: <Home className="h-6 w-6 text-gray-500 float" />
  },
  {
    title: "Architectural Sheet Metal",
    description: "Decorative and structural building elements",
    work: ["Building facades", "Decorative panels", "Custom metalwork", "Historic restoration"],
    demand: "Medium",
    salary: "$26-48/hour",
    icon: <Star className="h-6 w-6 text-gold-500 float" />
  },
  {
    title: "Industrial Applications",
    description: "Manufacturing and processing equipment",
    work: ["Industrial ductwork", "Equipment enclosures", "Ventilation systems", "Process equipment"],
    demand: "High",
    salary: "$25-50/hour",
    icon: <Factory className="h-6 w-6 text-orange-500 float" />
  }
]

const fabricationTechniques = [
  {
    technique: "Pattern Development",
    methods: ["Parallel line", "Radial line", "Triangulation", "Computer aided design"],
    applications: ["Complex shapes", "Transitions", "Reducers", "Custom fittings"],
    tools: ["Layout tools", "Compass", "Dividers", "CAD software"]
  },
  {
    technique: "Forming Methods",
    methods: ["Brake forming", "Roll forming", "Stretch forming", "Deep drawing"],
    applications: ["Ductwork", "Panels", "Cylinders", "Complex curves"],
    tools: ["Press brake", "Slip rolls", "Stretcher", "Deep draw press"]
  },
  {
    technique: "Joining Methods",
    methods: ["Soldering", "Welding", "Riveting", "Mechanical fasteners"],
    applications: ["Permanent joints", "Removable connections", "Sealing", "Structural connections"],
    tools: ["Soldering iron", "Welding machine", "Rivet gun", "Fastening tools"]
  },
  {
    technique: "Finishing Processes",
    methods: ["Grinding", "Polishing", "Coating", "Painting"],
    applications: ["Surface preparation", "Corrosion protection", "Appearance", "Weather resistance"],
    tools: ["Grinders", "Polishers", "Spray equipment", "Brushes"]
  }
]

const materialKnowledge = [
  {
    material: "Galvanized Steel",
    properties: ["Corrosion resistant", "Cost effective", "Good formability", "Standard material"],
    applications: ["HVAC ductwork", "Roofing", "General fabrication", "Outdoor applications"],
    working: ["Standard tools", "Easy to form", "Weldable", "Paintable"]
  },
  {
    material: "Stainless Steel",
    properties: ["Highly corrosion resistant", "Hygienic", "Heat resistant", "Attractive finish"],
    applications: ["Food service", "Medical facilities", "Chemical processing", "Architectural work"],
    working: ["Special tools required", "Work hardening", "TIG welding preferred", "Careful handling"]
  },
  {
    material: "Aluminum",
    properties: ["Lightweight", "Corrosion resistant", "Good conductivity", "Recyclable"],
    applications: ["Architectural panels", "HVAC systems", "Transportation", "Marine applications"],
    working: ["Soft material", "Special cutting tools", "TIG welding", "No spark hazard"]
  },
  {
    material: "Copper",
    properties: ["Excellent conductivity", "Antimicrobial", "Malleable", "Attractive patina"],
    applications: ["Roofing", "Gutters", "Electrical enclosures", "Decorative work"],
    working: ["Expensive material", "Easy to form", "Soldering preferred", "Theft prevention"]
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Snips", "Seamers", "Folders", "Punches", "Hammers", "Stakes"],
    cost: "$800-1,500"
  },
  {
    category: "Power Tools", 
    items: ["Shears", "Notchers", "Punches", "Brakes", "Rolls", "Slitters"],
    cost: "$3,000-8,000"
  },
  {
    category: "Fabrication Equipment",
    items: ["Press brake", "Slip rolls", "Turning machine", "Beading machine", "Folder", "Shear"],
    cost: "$5,000-25,000"
  },
  {
    category: "Measuring Tools",
    items: ["Rules", "Squares", "Dividers", "Compass", "Levels", "Gauges"],
    cost: "$300-800"
  }
]

const safetyRequirements = [
  {
    title: "Cut Protection",
    requirements: ["Sharp edge awareness", "Proper handling", "Cut-resistant gloves", "Safe storage"],
    certification: "Sheet Metal Safety Training"
  },
  {
    title: "Machine Safety",
    requirements: ["Guards in place", "Lockout procedures", "Proper training", "Emergency stops"],
    certification: "Machine Operation Safety"
  },
  {
    title: "Chemical Safety",
    requirements: ["Soldering fumes", "Coating materials", "Cleaning solvents", "Proper ventilation"],
    certification: "WHMIS Training"
  },
  {
    title: "Height Safety",
    requirements: ["Fall protection", "Ladder safety", "Roof work", "Scaffolding"],
    certification: "Working at Heights certification"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$18-24/hour",
    responsibilities: ["Basic fabrication", "Helper duties", "Material handling", "Safety compliance"],
    skills: ["Hand tool usage", "Pattern basics", "Safety awareness"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-4",
    wage: "$20-36/hour", 
    responsibilities: ["Complex fabrication", "Installation work", "Quality control", "Training others"],
    skills: ["Machine operation", "Advanced patterns", "System knowledge"]
  },
  {
    level: "Journeyperson Sheet Metal Worker",
    years: "4+ years",
    wage: "$26-50/hour",
    responsibilities: ["Project leadership", "Custom work", "Problem solving", "Client consultation"],
    skills: ["Full trade competency", "Supervision", "Estimating"]
  },
  {
    level: "Shop Supervisor/Contractor",
    years: "8+ years",
    wage: "$45,000-120,000+/year",
    responsibilities: ["Business ownership", "Project management", "Staff supervision", "Contract bidding"],
    skills: ["Business management", "Cost control", "Customer relations"]
  }
]

const industryApplications = [
  {
    sector: "HVAC Construction", 
    applications: ["Commercial ductwork", "Residential systems", "Industrial ventilation", "Clean room systems"],
    growth: "+20% annually"
  },
  {
    sector: "Roofing & Cladding",
    applications: ["Metal roofing", "Building facades", "Waterproofing", "Insulation systems"],
    growth: "+18% annually"
  },
  {
    sector: "Industrial Manufacturing",
    applications: ["Equipment enclosures", "Process ductwork", "Ventilation systems", "Custom fabrication"],
    growth: "+15% annually"
  },
  {
    sector: "Architectural Metalwork", 
    applications: ["Decorative panels", "Building restoration", "Custom millwork", "Artistic installations"],
    growth: "+12% annually"
  }
]

export default function SheetMetalWorkerPage() {
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
            {sheetMetalOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {sheetMetalOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {sheetMetalOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {sheetMetalOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {sheetMetalOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {sheetMetalOverview.wage}
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
                <div className="bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Fabrication Techniques
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {fabricationTechniques.map((technique, index) => (
            <Card 
              key={technique.technique}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Gauge className="h-5 w-5 mr-2 text-blue-500" />
                  {technique.technique}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Methods:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.methods.map((method) => (
                        <span key={method} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.applications.map((app) => (
                        <span key={app} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tools:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
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
          Material Knowledge
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {materialKnowledge.map((material, index) => (
            <Card 
              key={material.material}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{material.material}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Properties:</h4>
                    <ul className="space-y-1">
                      {material.properties.map((prop) => (
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
                      {material.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Working Considerations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.working.map((work) => (
                        <span key={work} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {work}
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
                  <div className="bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                    <span key={app} className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded">
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
          Shape Your Metal Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Form your future with Red Seal Sheet Metal Worker certification - precision craftsmanship, diverse applications, and excellent earning potential in the trades
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