'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Building2, 
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
  Zap,
  Anchor,
  Mountain,
  Move
} from "lucide-react"

const ironworkerOverview = {
  name: "Ironworker",
  code: "420A",
  duration: "3 years",
  wage: "$22-45/hour",
  journeyWage: "$28-55/hour",
  demand: "High",
  description: "Install, erect, and repair structural steel and iron frameworks for buildings, bridges, and other construction projects",
  icon: <Building2 className="h-16 w-16 text-gray-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 6 weeks school",
    topics: ["Steel handling", "Basic rigging", "Safety procedures", "Tools and equipment", "Structural connections"],
    wage: "$20-26/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 6 weeks school",
    topics: ["Advanced rigging", "Welding techniques", "Blueprint reading", "Crane operations", "Structural installation"],
    wage: "$22-32/hour",
    focus: "Advanced Techniques"
  },
  {
    year: "Year 3",
    hours: "1,500 work hours + 6 weeks school", 
    topics: ["Complex assemblies", "Specialized equipment", "Quality control", "Supervision skills", "Project coordination"],
    wage: "$24-38/hour",
    focus: "Specialization & Leadership"
  }
]

const specializations = [
  {
    title: "Structural Ironworker",
    description: "Building frameworks and structural steel erection",
    work: ["High-rise construction", "Bridge building", "Industrial structures", "Steel frame assembly"],
    demand: "Very High",
    salary: "$24-48/hour",
    icon: <Building2 className="h-6 w-6 text-gray-500 float" />
  },
  {
    title: "Reinforcing Ironworker",
    description: "Installing reinforcing steel in concrete structures", 
    work: ["Rebar placement", "Concrete reinforcement", "Foundation work", "Post-tensioning"],
    demand: "High",
    salary: "$22-42/hour",
    icon: <Anchor className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Ornamental Ironworker",
    description: "Decorative metalwork and architectural features",
    work: ["Railings", "Staircases", "Decorative panels", "Architectural metalwork"],
    demand: "Medium",
    salary: "$26-45/hour",
    icon: <Star className="h-6 w-6 text-gold-500 float" />
  },
  {
    title: "Rigger/Crane Operator",
    description: "Specialized lifting and material handling",
    work: ["Heavy lifting", "Load positioning", "Crane operations", "Rigging design"],
    demand: "High",
    salary: "$28-55/hour",
    icon: <Move className="h-6 w-6 text-orange-500 float" />
  }
]

const structuralKnowledge = [
  {
    component: "Steel Beams",
    types: ["I-beams", "H-beams", "Wide flange", "Standard beams"],
    applications: ["Building frames", "Bridge structures", "Industrial platforms", "Support systems"],
    connections: ["Bolted", "Welded", "Riveted", "Hybrid"]
  },
  {
    component: "Columns",
    types: ["Standard columns", "Built-up columns", "Composite columns", "Pipe columns"],
    applications: ["Vertical support", "Load bearing", "Architectural features", "Industrial supports"],
    connections: ["Base plates", "Cap plates", "Splice connections", "Moment connections"]
  },
  {
    component: "Reinforcing Steel",
    types: ["Rebar", "Wire mesh", "Post-tensioning", "Prestressed cable"],
    applications: ["Concrete reinforcement", "Foundation support", "Seismic resistance", "Load distribution"],
    connections: ["Tie wire", "Mechanical splices", "Welded connections", "Coupling systems"]
  },
  {
    component: "Decking Systems",
    types: ["Metal decking", "Composite systems", "Precast units", "Form systems"],
    applications: ["Floor systems", "Roof decking", "Composite slabs", "Temporary platforms"],
    connections: ["Welded studs", "Mechanical fasteners", "Interlocking systems", "Support frames"]
  }
]

const riggingEquipment = [
  {
    category: "Lifting Equipment",
    items: ["Mobile cranes", "Tower cranes", "Come-alongs", "Chain hoists", "Wire rope", "Lifting slings"],
    safety: ["Load calculations", "Inspection procedures", "Rigging plans", "Signal communications"]
  },
  {
    category: "Hand Tools", 
    items: ["Spud wrenches", "Sleever bars", "Drift pins", "Bull pins", "Connecting bars", "Tag lines"],
    safety: ["Tool inspection", "Proper use", "Fall protection", "Secure storage"]
  },
  {
    category: "Cutting/Welding",
    items: ["Torch sets", "Welding machines", "Grinders", "Cutting machines", "Plasma cutters", "Band saws"],
    safety: ["Hot work permits", "Fire watch", "Ventilation", "PPE requirements"]
  },
  {
    category: "Measuring Tools",
    items: ["Transit levels", "Plumb bobs", "Steel tapes", "Squares", "Levels", "Alignment tools"],
    safety: ["Accuracy checks", "Calibration", "Environmental factors", "Setup procedures"]
  }
]

const safetyRequirements = [
  {
    title: "Fall Protection",
    requirements: ["Harness systems", "Anchor points", "Fall arrest", "Rescue procedures"],
    certification: "Working at Heights certification"
  },
  {
    title: "Rigging Safety",
    requirements: ["Load calculations", "Equipment inspection", "Signal procedures", "Crane safety zones"],
    certification: "Rigging and Hoisting certification"
  },
  {
    title: "Structural Safety",
    requirements: ["Stability analysis", "Temporary bracing", "Connection integrity", "Weather considerations"],
    certification: "Structural Safety Training"
  },
  {
    title: "Hot Work Safety",
    requirements: ["Fire prevention", "Ventilation requirements", "Spark containment", "Emergency procedures"],
    certification: "Hot Work Safety certification"
  }
]

const toolsEquipment = [
  {
    category: "Personal Tools",
    items: ["Spud wrench", "Sleever bar", "Drift pin", "Bull pin", "Tool belt", "Safety harness"],
    cost: "$800-1,500"
  },
  {
    category: "Power Tools", 
    items: ["Impact wrench", "Grinder", "Cutting torch", "Welding machine", "Drill", "Reciprocating saw"],
    cost: "$2,500-5,000"
  },
  {
    category: "Rigging Gear",
    items: ["Wire rope slings", "Chain slings", "Shackles", "Come-alongs", "Turnbuckles", "Lifting clamps"],
    cost: "$1,500-3,000"
  },
  {
    category: "Safety Equipment",
    items: ["Hard hat", "Safety harness", "Steel-toed boots", "Safety glasses", "Gloves", "Respirator"],
    cost: "$600-1,200"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$20-26/hour",
    responsibilities: ["Material handling", "Basic connections", "Safety compliance", "Tool maintenance"],
    skills: ["Basic rigging", "Hand tool usage", "Safety awareness"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-3",
    wage: "$22-38/hour", 
    responsibilities: ["Structural assembly", "Rigging operations", "Quality control", "Training juniors"],
    skills: ["Advanced rigging", "Welding", "Blueprint reading"]
  },
  {
    level: "Journeyperson Ironworker",
    years: "3+ years",
    wage: "$28-55/hour",
    responsibilities: ["Project leadership", "Complex assemblies", "Safety supervision", "Client coordination"],
    skills: ["Full trade competency", "Supervision", "Problem solving"]
  },
  {
    level: "Foreman/Supervisor",
    years: "7+ years",
    wage: "$40,000-120,000+/year",
    responsibilities: ["Crew supervision", "Project management", "Safety compliance", "Quality assurance"],
    skills: ["Leadership", "Project management", "Cost control"]
  }
]

const industryApplications = [
  {
    sector: "High-Rise Construction", 
    applications: ["Skyscrapers", "Office towers", "Residential towers", "Mixed-use buildings"],
    growth: "+25% annually"
  },
  {
    sector: "Infrastructure",
    applications: ["Bridges", "Highways", "Airports", "Transit systems"],
    growth: "+20% annually"
  },
  {
    sector: "Industrial Construction",
    applications: ["Factories", "Power plants", "Refineries", "Processing facilities"],
    growth: "+18% annually"
  },
  {
    sector: "Specialty Structures", 
    applications: ["Sports stadiums", "Convention centers", "Artistic installations", "Historic restoration"],
    growth: "+15% annually"
  }
]

export default function IronworkerPage() {
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
            {ironworkerOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {ironworkerOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {ironworkerOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {ironworkerOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {ironworkerOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {ironworkerOverview.wage}
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
                <div className="bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Structural Components Knowledge
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {structuralKnowledge.map((component, index) => (
            <Card 
              key={component.component}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Mountain className="h-5 w-5 mr-2 text-gray-500" />
                  {component.component}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {component.types.map((type) => (
                        <span key={type} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {component.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Connection Methods:</h4>
                    <div className="flex flex-wrap gap-1">
                      {component.connections.map((conn) => (
                        <span key={conn} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {conn}
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
          Rigging Equipment & Safety
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {riggingEquipment.map((category, index) => (
            <Card 
              key={category.category}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Equipment:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.items.map((item) => (
                        <span key={item} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Safety Requirements:</h4>
                    <ul className="space-y-1">
                      {category.safety.map((req) => (
                        <li key={req} className="flex items-center text-xs">
                          <Shield className="h-2 w-2 mr-2 text-red-500 flex-shrink-0" />
                          <span>{req}</span>
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
                  <div className="bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
          Build Steel, Build Your Future
        </h2>
        <p className="text-lg text-muted-foreground">
          Rise to new heights with Red Seal Ironworker certification - work on iconic structures, earn excellent wages, and be part of building tomorrow's skyline
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