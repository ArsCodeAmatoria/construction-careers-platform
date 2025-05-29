'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Hammer, 
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
  Square,
  Triangle,
  TreePine,
  Ruler
} from "lucide-react"

const carpenterOverview = {
  name: "Carpenter",
  code: "403A",
  duration: "4 years",
  wage: "$18-35/hour",
  journeyWage: "$25-42/hour",
  demand: "Very High",
  description: "Construct, install, and repair structures and fixtures made of wood and other materials in residential, commercial, and industrial construction",
  icon: <Hammer className="h-16 w-16 text-amber-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Hand tool usage", "Measuring & layout", "Basic framing", "Safety procedures", "Material identification"],
    wage: "$16-20/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Framing systems", "Concrete forms", "Power tools", "Blueprint reading", "Building codes"],
    wage: "$18-24/hour",
    focus: "Structural Work"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 8 weeks school", 
    topics: ["Finish carpentry", "Trim installation", "Cabinet work", "Stairs & railings", "Precision work"],
    wage: "$20-28/hour",
    focus: "Finish Work"
  },
  {
    year: "Year 4",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["Complex projects", "Project supervision", "Estimating", "Custom work", "Business skills"],
    wage: "$22-32/hour",
    focus: "Specialization & Leadership"
  }
]

const specializations = [
  {
    title: "Rough Carpentry",
    description: "Structural framing and foundation work",
    applications: ["House framing", "Commercial structures", "Concrete forming", "Structural repairs"],
    demand: "Very High",
    salary: "$20-38/hour",
    icon: <Building className="h-6 w-6 text-gray-500 float" />
  },
  {
    title: "Finish Carpentry",
    description: "Interior trim and detail work", 
    applications: ["Crown molding", "Custom trim", "Door & window casing", "Built-in cabinets"],
    demand: "High",
    salary: "$22-40/hour",
    icon: <Square className="h-6 w-6 text-amber-500 float" />
  },
  {
    title: "Cabinet Making",
    description: "Custom cabinetry and millwork",
    applications: ["Kitchen cabinets", "Built-in furniture", "Custom millwork", "Furniture making"],
    demand: "High", 
    salary: "$24-42/hour",
    icon: <Triangle className="h-6 w-6 text-brown-500 float" />
  },
  {
    title: "Restoration Carpentry",
    description: "Heritage and restoration work",
    applications: ["Historic restoration", "Matching old work", "Repair techniques", "Traditional methods"],
    demand: "Medium",
    salary: "$26-45/hour",
    icon: <TreePine className="h-6 w-6 text-green-500 float" />
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Hammers", "Chisels", "Hand saws", "Levels", "Squares", "Measuring tapes"],
    cost: "$800-1,200"
  },
  {
    category: "Power Tools", 
    items: ["Circular saw", "Miter saw", "Router", "Nail gun", "Drill", "Jigsaw"],
    cost: "$2,500-4,000"
  },
  {
    category: "Specialized Tools",
    items: ["Table saw", "Planer", "Jointer", "Band saw", "Mortiser", "Domino joiner"],
    cost: "$3,000-8,000"
  },
  {
    category: "Safety Equipment",
    items: ["Hard hat", "Safety glasses", "Hearing protection", "Work gloves", "Dust masks", "Fall protection"],
    cost: "$300-600"
  }
]

const materialTypes = [
  {
    material: "Softwood Lumber",
    types: ["Douglas fir", "Pine", "Spruce", "Cedar", "Hemlock"],
    applications: ["Framing", "Sheathing", "Decking", "General construction"],
    properties: ["Lightweight", "Easy to work", "Cost-effective", "Good strength-to-weight ratio"]
  },
  {
    material: "Hardwood Lumber",
    types: ["Oak", "Maple", "Cherry", "Walnut", "Mahogany"],
    applications: ["Finish work", "Cabinetry", "Flooring", "Furniture"],
    properties: ["Dense", "Durable", "Beautiful grain", "Premium finish"]
  },
  {
    material: "Engineered Products",
    types: ["Plywood", "OSB", "LVL", "Glulam", "I-joists"],
    applications: ["Structural components", "Subflooring", "Roof sheathing", "Beams"],
    properties: ["Consistent quality", "Stronger than solid wood", "Dimensional stability", "Cost-effective"]
  },
  {
    material: "Composite Materials",
    types: ["MDF", "Particleboard", "Melamine", "PVC trim", "Fiber cement"],
    applications: ["Trim work", "Cabinetry", "Exterior trim", "Weather resistance"],
    properties: ["Weather resistant", "No painting required", "Consistent appearance", "Low maintenance"]
  }
]

const safetyRequirements = [
  {
    title: "Power Tool Safety",
    requirements: ["Proper training", "Blade guards", "Eye protection", "Dust collection"],
    certification: "Power Tool Safety certification"
  },
  {
    title: "Fall Protection",
    requirements: ["Harness training", "Fall arrest systems", "Ladder safety", "Scaffolding protocols"],
    certification: "Working at Heights certification"
  },
  {
    title: "Material Handling",
    requirements: ["Lifting techniques", "Team lifting", "Machinery operation", "Back injury prevention"],
    certification: "Manual Handling Training"
  },
  {
    title: "Site Safety",
    requirements: ["WHMIS training", "First aid", "Hazard identification", "Emergency procedures"],
    certification: "Construction Safety Training"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$16-20/hour",
    responsibilities: ["Material handling", "Basic cutting", "Tool maintenance", "Safety compliance"],
    skills: ["Hand tool usage", "Measuring", "Basic construction"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-4",
    wage: "$18-32/hour", 
    responsibilities: ["Framing work", "Finish carpentry", "Quality control", "Training juniors"],
    skills: ["Advanced techniques", "Blueprint reading", "Problem solving"]
  },
  {
    level: "Journeyperson Carpenter",
    years: "4+ years",
    wage: "$25-42/hour",
    responsibilities: ["Project leadership", "Custom work", "Client consultation", "Quality assurance"],
    skills: ["Full trade competency", "Supervision", "Estimating"]
  },
  {
    level: "Carpentry Contractor",
    years: "8+ years",
    wage: "$50,000-180,000+/year",
    responsibilities: ["Business ownership", "Project management", "Staff supervision", "Contract bidding"],
    skills: ["Business management", "Customer relations", "Strategic planning"]
  }
]

const industryApplications = [
  {
    sector: "Residential Construction", 
    applications: ["New home construction", "Renovations", "Additions", "Custom homes"],
    growth: "+20% annually"
  },
  {
    sector: "Commercial Construction",
    applications: ["Office buildings", "Retail spaces", "Restaurants", "Healthcare facilities"],
    growth: "+15% annually"
  },
  {
    sector: "Industrial Construction",
    applications: ["Warehouses", "Manufacturing facilities", "Temporary structures", "Formwork"],
    growth: "+12% annually"
  },
  {
    sector: "Specialty Carpentry", 
    applications: ["Custom cabinetry", "Restoration work", "Millwork", "Artistic projects"],
    growth: "+18% annually"
  }
]

export default function CarpenterPage() {
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
            {carpenterOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {carpenterOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {carpenterOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {carpenterOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {carpenterOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {carpenterOverview.wage}
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
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Material Types & Properties
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {materialTypes.map((material, index) => (
            <Card 
              key={material.material}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TreePine className="h-5 w-5 mr-2 text-green-500" />
                  {material.material}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.types.map((type) => (
                        <span key={type} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.applications.map((app) => (
                        <span key={app} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
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
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                    <span key={app} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
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
          Build Your Carpentry Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Construct your future with Red Seal Carpenter certification - versatile skills, creative work, and strong demand across all construction sectors
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