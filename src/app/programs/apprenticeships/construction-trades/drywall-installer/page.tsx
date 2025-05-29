'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Grid, 
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
  Layers,
  Square,
  Settings,
  Home,
  Building,
  Factory
} from "lucide-react"

const drywallOverview = {
  name: "Drywall Installer",
  duration: "2 years",
  wage: "$16-28/hour",
  journeyWage: "$24-35/hour",
  demand: "High",
  description: "Install and finish drywall panels in residential and commercial buildings, creating smooth wall and ceiling surfaces",
  icon: <Grid className="h-16 w-16 text-blue-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Panel installation basics", "Measuring and cutting", "Fastening techniques", "Safety procedures", "Basic finishing"],
    wage: "$15-22/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Advanced finishing", "Texture application", "Complex installations", "Problem solving", "Quality control"],
    wage: "$18-28/hour",
    focus: "Advanced Techniques"
  }
]

const installationTechniques = [
  {
    technique: "Panel Installation",
    description: "Proper mounting and securing of drywall panels",
    steps: ["Measuring and marking", "Cutting to fit", "Lifting and positioning", "Fastening securely"],
    tools: ["Measuring tape", "Utility knife", "Drill", "Screws/nails"],
    difficulty: "Basic",
    icon: <Square className="h-6 w-6 text-blue-500 float" />
  },
  {
    technique: "Taping",
    description: "Applying tape to joints between drywall panels", 
    steps: ["Joint preparation", "Tape application", "Initial compound", "Smoothing"],
    tools: ["Joint tape", "Mud pan", "6-inch knife", "Joint compound"],
    difficulty: "Intermediate",
    icon: <Layers className="h-6 w-6 text-green-500 float" />
  },
  {
    technique: "Mudding",
    description: "Applying joint compound for smooth finish",
    steps: ["First coat", "Second coat", "Final coat", "Sanding"],
    tools: ["8-inch knife", "10-inch knife", "Joint compound", "Sanding tools"],
    difficulty: "Advanced",
    icon: <Settings className="h-6 w-6 text-purple-500 float" />
  },
  {
    technique: "Texture Application",
    description: "Creating decorative surface textures",
    steps: ["Surface preparation", "Texture mixing", "Application", "Pattern creation"],
    tools: ["Texture sprayer", "Rollers", "Brushes", "Texture compounds"],
    difficulty: "Advanced",
    icon: <Grid className="h-6 w-6 text-orange-500 float" />
  }
]

const specializations = [
  {
    title: "Residential Drywall",
    description: "Home construction and renovation drywall work",
    projects: ["New homes", "Renovations", "Basements", "Additions"],
    techniques: ["Standard installation", "Repair work", "Smooth finishes", "Basic textures"],
    salary: "$18-30/hour",
    demand: "Very High"
  },
  {
    title: "Commercial Drywall",
    description: "Large-scale commercial building projects",
    projects: ["Office buildings", "Retail spaces", "Schools", "Hospitals"],
    techniques: ["Metal framing", "Fire-rated systems", "Acoustic panels", "Complex layouts"],
    salary: "$22-35/hour",
    demand: "High"
  },
  {
    title: "Specialty Finishes",
    description: "High-end decorative and custom finishes",
    projects: ["Luxury homes", "Designer spaces", "Architectural features", "Custom textures"],
    techniques: ["Venetian plaster", "Decorative textures", "Curved surfaces", "Artistic finishes"],
    salary: "$25-40/hour",
    demand: "Medium"
  },
  {
    title: "Repair Specialist",
    description: "Drywall repair and restoration work",
    projects: ["Damage repair", "Water damage", "Hole patching", "Texture matching"],
    techniques: ["Patch installation", "Texture matching", "Blend finishing", "Color matching"],
    salary: "$20-32/hour",
    demand: "High"
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Utility knives", "Measuring tape", "T-square", "Chalk line", "Hand saws"],
    cost: "$150-400"
  },
  {
    category: "Finishing Tools", 
    items: ["Joint knives", "Mud pans", "Corner tools", "Sanding blocks", "Texture tools"],
    cost: "$200-600"
  },
  {
    category: "Power Tools",
    items: ["Screw guns", "Cut-out tools", "Sanders", "Mixers", "Lifts"],
    cost: "$800-2,500"
  },
  {
    category: "Safety Equipment",
    items: ["Safety glasses", "Dust masks", "Knee pads", "Work gloves", "Hard hats"],
    cost: "$100-300"
  }
]

const finishingStages = [
  {
    stage: "First Coat (Tape Coat)",
    purpose: "Embed tape and cover fasteners",
    coverage: "Joints and screw holes",
    dryTime: "24 hours",
    tools: ["6-inch knife", "Joint compound", "Paper tape"],
    techniques: ["Tape embedding", "Screw covering", "Corner installation"]
  },
  {
    stage: "Second Coat (Fill Coat)",
    purpose: "Fill and smooth joints",
    coverage: "Wider joint coverage",
    dryTime: "24 hours", 
    tools: ["8-inch knife", "Joint compound", "Corner beads"],
    techniques: ["Joint filling", "Edge feathering", "Tool mark removal"]
  },
  {
    stage: "Third Coat (Finish Coat)",
    purpose: "Final smoothing and blending",
    coverage: "Full joint blending",
    dryTime: "24 hours",
    tools: ["10-12 inch knife", "Fine compound", "Sanding tools"],
    techniques: ["Final smoothing", "Texture blending", "Quality inspection"]
  },
  {
    stage: "Sanding & Prep",
    purpose: "Surface preparation for painting",
    coverage: "All finished surfaces",
    dryTime: "Complete cure",
    tools: ["Sanding blocks", "Vacuum", "Lights", "Primer"],
    techniques: ["Light sanding", "Dust removal", "Surface inspection", "Primer application"]
  }
]

const qualityStandards = [
  {
    level: "Level 1 - Basic",
    description: "Basic installation behind tile or paneling",
    requirements: ["Joints taped", "Screw heads covered", "No sanding required"],
    applications: ["Behind tile", "Utility areas", "Temporary walls"]
  },
  {
    level: "Level 3 - Standard",
    description: "Standard residential and light commercial",
    requirements: ["All joints finished", "Smooth surface", "Ready for texture"],
    applications: ["Residential homes", "Apartments", "Light commercial"]
  },
  {
    level: "Level 4 - High Quality",
    description: "Premium residential and commercial",
    requirements: ["Perfect joints", "No tool marks", "Consistent texture"],
    applications: ["High-end homes", "Office buildings", "Retail spaces"]
  },
  {
    level: "Level 5 - Premium",
    description: "Highest quality decorative finish",
    requirements: ["Flawless surface", "Uniform appearance", "Critical lighting"],
    applications: ["Luxury homes", "Museums", "High-end commercial"]
  }
]

const workEnvironments = [
  {
    environment: "New Construction",
    conditions: ["Open framing", "Team coordination", "Sequential work", "Volume production"],
    challenges: ["Schedule pressure", "Quality standards", "Material coordination", "Weather protection"],
    projects: ["Residential subdivisions", "Commercial buildings", "Multi-family housing"]
  },
  {
    environment: "Renovation Projects",
    conditions: ["Occupied spaces", "Dust control", "Limited access", "Existing conditions"],
    challenges: ["Dust containment", "Noise control", "Schedule flexibility", "Matching existing"],
    projects: ["Home renovations", "Office remodels", "Retail updates", "Institutional upgrades"]
  },
  {
    environment: "Repair Work",
    conditions: ["Damage assessment", "Quick turnaround", "Insurance work", "Emergency response"],
    challenges: ["Matching textures", "Time constraints", "Documentation", "Customer relations"],
    projects: ["Water damage", "Impact damage", "Settlement cracks", "Wear repair"]
  },
  {
    environment: "Commercial Construction",
    conditions: ["Large scale", "Metal framing", "Fire ratings", "Acoustic requirements"],
    challenges: ["Complex systems", "Coordination", "Code compliance", "Quality control"],
    projects: ["Office towers", "Schools", "Hospitals", "Industrial facilities"]
  }
]

const safetyRequirements = [
  {
    title: "Respiratory Protection",
    requirements: ["Dust masks", "Ventilation", "Silica protection", "Chemical awareness"],
    certification: "Respiratory Safety Training"
  },
  {
    title: "Ergonomic Safety",
    requirements: ["Lifting techniques", "Repetitive motion", "Back protection", "Tool ergonomics"],
    certification: "Ergonomic Training"
  },
  {
    title: "Tool Safety",
    requirements: ["Power tool operation", "Sharp tool handling", "Equipment maintenance", "Electrical safety"],
    certification: "Tool Safety Course"
  },
  {
    title: "Site Safety",
    requirements: ["Fall protection", "Eye protection", "Chemical handling", "Emergency procedures"],
    certification: "Construction Safety"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$15-22/hour",
    responsibilities: ["Basic installation", "Material handling", "Site cleanup", "Helper duties"],
    skills: ["Panel cutting", "Basic hanging", "Tool operation"]
  },
  {
    level: "2nd Year Apprentice",
    years: "Year 2",
    wage: "$18-28/hour", 
    responsibilities: ["Advanced finishing", "Quality control", "Complex installations", "Training helpers"],
    skills: ["All finish levels", "Texture application", "Problem solving"]
  },
  {
    level: "Journeyperson",
    years: "2+ years",
    wage: "$24-35/hour",
    responsibilities: ["Project leadership", "Quality assurance", "Estimating", "Client interaction"],
    skills: ["All techniques", "Supervision", "Business basics"]
  },
  {
    level: "Contractor/Specialist",
    years: "4+ years",
    wage: "$35,000-75,000+/year",
    responsibilities: ["Business management", "Project coordination", "Team leadership", "Specialized services"],
    skills: ["Business operations", "Customer service", "Advanced specializations"]
  }
]

const industryApplications = [
  {
    sector: "Residential Construction", 
    applications: ["New homes", "Renovations", "Additions", "Basement finishing"],
    growth: "+15% annually"
  },
  {
    sector: "Commercial Construction",
    applications: ["Office buildings", "Retail spaces", "Schools", "Healthcare facilities"],
    growth: "+12% annually"
  },
  {
    sector: "Renovation & Repair",
    applications: ["Home improvements", "Office remodels", "Damage repair", "Upgrades"],
    growth: "+18% annually"
  },
  {
    sector: "Specialty Applications", 
    applications: ["Luxury finishes", "Architectural features", "Artistic installations", "Custom work"],
    growth: "+20% annually"
  }
]

export default function DrywallInstallerPage() {
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
            {drywallOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {drywallOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {drywallOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {drywallOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {drywallOverview.wage}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {drywallOverview.demand} Demand
            </span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Training Curriculum
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {trainingCurriculum.map((year, index) => (
            <Card 
              key={year.year}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Process Steps:</h4>
                    <div className="space-y-1">
                      {technique.steps.map((step, idx) => (
                        <div key={step} className="flex items-center text-sm">
                          <span className="bg-blue-100 text-blue-800 text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Required Tools:</h4>
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
          Finishing Process Stages
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {finishingStages.map((stage, index) => (
            <Card 
              key={stage.stage}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{stage.stage}</CardTitle>
                <CardDescription>{stage.purpose}</CardDescription>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Dry Time:</span>
                  <span className="font-medium text-blue-600">{stage.dryTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Coverage:</h4>
                    <p className="text-sm">{stage.coverage}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tools:</h4>
                    <div className="flex flex-wrap gap-1">
                      {stage.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Techniques:</h4>
                    <div className="flex flex-wrap gap-1">
                      {stage.techniques.map((tech) => (
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
          Quality Levels & Standards
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {qualityStandards.map((level, index) => (
            <Card 
              key={level.level}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{level.level}</CardTitle>
                <CardDescription>{level.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {level.requirements.map((req) => (
                        <li key={req} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {level.applications.map((app) => (
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
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
          Master Drywall Installation & Finishing
        </h2>
        <p className="text-lg text-muted-foreground">
          Create smooth, professional wall and ceiling surfaces - essential skills for construction, excellent job security, and opportunities for specialization
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