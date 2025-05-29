'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Layers, 
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
  Users,
  AlertTriangle,
  Eye,
  Square,
  Home,
  Building
} from "lucide-react"

const glazierOverview = {
  name: "Glazier",
  duration: "4 years",
  wage: "$20-36/hour",
  journeyWage: "$30-48/hour",
  demand: "Medium",
  description: "Install windows, glass doors, skylights, and glass curtain walls in residential and commercial buildings",
  icon: <Layers className="h-16 w-16 text-cyan-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Glass types and properties", "Basic cutting techniques", "Safety procedures", "Tool usage", "Installation basics"],
    wage: "$18-26/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Window installation", "Frame systems", "Weathersealing", "Measurements", "Quality control"],
    wage: "$20-30/hour",
    focus: "Installation Techniques"
  },
  {
    year: "Year 3",
    hours: "1,500 work hours + 150 classroom hours", 
    topics: ["Complex installations", "Curtain walls", "Specialty glass", "Problem solving", "Advanced sealing"],
    wage: "$22-34/hour",
    focus: "Advanced Systems"
  },
  {
    year: "Year 4",
    hours: "1,500 work hours + 150 classroom hours", 
    topics: ["Project leadership", "Estimating", "Supervision", "Business practices", "Specialty applications"],
    wage: "$24-36/hour",
    focus: "Mastery & Leadership"
  }
]

const glassTypes = [
  {
    type: "Float Glass",
    description: "Standard clear glass for general applications",
    thickness: "3mm - 19mm",
    applications: ["Windows", "Doors", "Shelving", "Tables"],
    properties: ["Clear", "Economical", "Easy to cut", "Standard strength"]
  },
  {
    type: "Tempered Glass",
    description: "Heat-treated safety glass with increased strength",
    thickness: "4mm - 19mm", 
    applications: ["Doors", "Shower enclosures", "Safety glazing", "Commercial"],
    properties: ["4x stronger", "Safety breakage", "Heat resistant", "Cannot be cut after tempering"]
  },
  {
    type: "Laminated Glass",
    description: "Two or more glass layers with interlayer for safety",
    thickness: "6mm - 76mm",
    applications: ["Security glazing", "Sound reduction", "Hurricane protection", "Skylights"],
    properties: ["Safety retention", "Sound dampening", "UV protection", "Security"]
  },
  {
    type: "Insulated Glass",
    description: "Double or triple pane units for energy efficiency",
    thickness: "12mm - 50mm overall",
    applications: ["Energy-efficient windows", "Commercial glazing", "Cold climates", "Sound control"],
    properties: ["Energy efficient", "Condensation control", "Sound reduction", "Custom configurations"]
  }
]

const installationTechniques = [
  {
    technique: "Dry Glazing",
    description: "Installing glass using gaskets and mechanical fixings",
    applications: ["Curtain walls", "Commercial windows", "Storefronts", "Modern systems"],
    advantages: ["Clean appearance", "Easy maintenance", "Weather resistant", "Modern look"],
    process: ["Frame preparation", "Gasket installation", "Glass placement", "Compression sealing"]
  },
  {
    technique: "Wet Glazing",
    description: "Traditional glazing using putty or sealant compounds",
    applications: ["Historic restoration", "Residential windows", "Traditional buildings", "Repair work"],
    advantages: ["Traditional appearance", "Cost effective", "Field repairable", "Historic authenticity"],
    process: ["Frame preparation", "Putty application", "Glass setting", "Finish glazing"]
  },
  {
    technique: "Structural Glazing",
    description: "Glass bonded directly to frame structure",
    applications: ["Curtain walls", "Modern architecture", "Commercial buildings", "Architectural features"],
    advantages: ["Seamless appearance", "Large spans", "Modern aesthetic", "Weather performance"],
    process: ["Surface preparation", "Structural adhesive", "Glass positioning", "Curing process"]
  },
  {
    technique: "Point Support",
    description: "Glass supported by individual fixing points",
    applications: ["Architectural glazing", "Display windows", "Modern facades", "Specialty installations"],
    advantages: ["Minimal framework", "Modern appearance", "Design flexibility", "Maximum transparency"],
    process: ["Drilling preparation", "Hardware installation", "Glass mounting", "Adjustment"]
  }
]

const specializations = [
  {
    title: "Residential Glazing",
    description: "Home windows, doors, and glass installations",
    projects: ["Window replacement", "New construction", "Storm doors", "Glass repairs"],
    salary: "$22-34/hour",
    demand: "High"
  },
  {
    title: "Commercial Glazing", 
    description: "Large-scale commercial and institutional projects",
    projects: ["Office buildings", "Storefronts", "Curtain walls", "Commercial doors"],
    salary: "$26-40/hour",
    demand: "Medium"
  },
  {
    title: "Architectural Glazing",
    description: "High-end architectural and custom glass installations",
    projects: ["Custom facades", "Architectural features", "Specialty installations", "Designer projects"],
    salary: "$30-48/hour",
    demand: "Medium"
  },
  {
    title: "Auto Glass",
    description: "Vehicle windshield and window replacement",
    projects: ["Windshield replacement", "Side windows", "Mobile service", "Commercial vehicles"],
    salary: "$20-32/hour",
    demand: "High"
  }
]

const safetyRequirements = [
  {
    title: "Cut Protection",
    requirements: ["Cut-resistant gloves", "Proper handling", "Sharp edge awareness", "First aid knowledge"],
    certification: "Glass Handling Safety"
  },
  {
    title: "Lifting Safety",
    requirements: ["Team lifting", "Mechanical aids", "Back protection", "Weight distribution"],
    certification: "Material Handling"
  },
  {
    title: "Height Safety",
    requirements: ["Fall protection", "Scaffolding safety", "Ladder safety", "Working at height"],
    certification: "Fall Protection Training"
  },
  {
    title: "Tool Safety",
    requirements: ["Power tool operation", "Hand tool maintenance", "Cutting safety", "Equipment inspection"],
    certification: "Tool Safety Course"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$18-26/hour",
    responsibilities: ["Basic installations", "Material handling", "Site preparation", "Safety compliance"],
    skills: ["Glass cutting", "Basic installation", "Safety procedures"]
  },
  {
    level: "Intermediate Apprentice",
    years: "Years 2-3",
    wage: "$20-34/hour", 
    responsibilities: ["Complex installations", "Quality control", "Problem solving", "Training helpers"],
    skills: ["All glass types", "Advanced techniques", "System knowledge"]
  },
  {
    level: "Senior Apprentice",
    years: "Year 4",
    wage: "$24-36/hour",
    responsibilities: ["Project leadership", "Supervision", "Estimating", "Client interaction"],
    skills: ["All specializations", "Leadership", "Business understanding"]
  },
  {
    level: "Journeyperson Glazier",
    years: "4+ years",
    wage: "$30-48/hour",
    responsibilities: ["Master craftsperson", "Quality assurance", "Complex projects", "Apprentice training"],
    skills: ["Expert level", "All techniques", "Supervision"]
  }
]

export default function GlazierPage() {
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
            {glazierOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {glazierOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {glazierOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {glazierOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {glazierOverview.wage}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {glazierOverview.demand} Demand
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
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Glass Types & Properties
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {glassTypes.map((glass, index) => (
            <Card 
              key={glass.type}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{glass.type}</CardTitle>
                <CardDescription>{glass.description}</CardDescription>
                <div className="text-sm font-medium text-blue-600">
                  Thickness: {glass.thickness}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {glass.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Properties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {glass.properties.map((prop) => (
                        <span key={prop} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {prop}
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
          Installation Techniques
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {installationTechniques.map((technique, index) => (
            <Card 
              key={technique.technique}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{technique.technique}</CardTitle>
                <CardDescription>{technique.description}</CardDescription>
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Advantages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.advantages.map((adv) => (
                        <span key={adv} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {adv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Process:</h4>
                    <div className="space-y-1">
                      {technique.process.map((step, idx) => (
                        <div key={step} className="flex items-center text-sm">
                          <span className="bg-cyan-100 text-cyan-800 text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
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
                  <span className={`font-medium ${spec.demand === 'High' ? 'text-orange-500' : 'text-yellow-500'}`}>
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
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Project Types:</h4>
                  <div className="flex flex-wrap gap-1">
                    {spec.projects.map((project) => (
                      <span key={project} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                        {project}
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
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Master Glass Installation & Glazing
        </h2>
        <p className="text-lg text-muted-foreground">
          Work with precision and artistry in glass installation - specialized skills, good earning potential, and opportunities in both traditional and modern construction
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