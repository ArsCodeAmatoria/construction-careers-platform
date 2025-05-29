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
  FileCheck,
  HardHat,
  Wrench,
  Users,
  AlertTriangle,
  Square,
  Layers,
  Home,
  Building
} from "lucide-react"

const flooringOverview = {
  name: "Flooring Installer",
  duration: "2 years",
  wage: "$18-32/hour",
  journeyWage: "$26-40/hour",
  demand: "High",
  description: "Install various types of flooring materials in residential and commercial spaces, creating beautiful and functional floor surfaces",
  icon: <Settings className="h-16 w-16 text-orange-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Material identification", "Basic installation", "Tool usage", "Surface preparation", "Safety procedures"],
    wage: "$16-24/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Advanced techniques", "Complex patterns", "Problem solving", "Quality control", "Business practices"],
    wage: "$20-32/hour",
    focus: "Advanced Techniques"
  }
]

const flooringTypes = [
  {
    type: "Hardwood Flooring",
    description: "Solid and engineered wood flooring installation",
    materials: ["Solid hardwood", "Engineered wood", "Bamboo", "Cork"],
    installation: ["Nail-down", "Glue-down", "Floating", "Staple-down"],
    durability: "25-100+ years",
    applications: ["Living spaces", "Bedrooms", "Dining rooms", "Offices"],
    maintenance: "Medium"
  },
  {
    type: "Laminate Flooring",
    description: "Synthetic flooring with wood-look surface",
    materials: ["HDF core", "Decorative layer", "Wear layer", "Backing"],
    installation: ["Click-lock", "Glue-down", "Floating system", "Underlayment"],
    durability: "15-25 years",
    applications: ["Residential", "Light commercial", "Basements", "Apartments"],
    maintenance: "Low"
  },
  {
    type: "Vinyl Flooring",
    description: "Resilient vinyl flooring in various formats",
    materials: ["Luxury vinyl plank", "Sheet vinyl", "Vinyl tile", "WPC core"],
    installation: ["Glue-down", "Click-lock", "Loose lay", "Peel-and-stick"],
    durability: "10-20 years",
    applications: ["Kitchens", "Bathrooms", "Commercial", "High-traffic areas"],
    maintenance: "Very low"
  },
  {
    type: "Carpet Installation",
    description: "Residential and commercial carpet installation",
    materials: ["Broadloom carpet", "Carpet tiles", "Padding", "Tack strips"],
    installation: ["Stretch-in", "Glue-down", "Double-stick", "Tile installation"],
    durability: "5-15 years",
    applications: ["Bedrooms", "Living rooms", "Offices", "Stairs"],
    maintenance: "High"
  }
]

const installationTechniques = [
  {
    technique: "Floating Installation",
    description: "Floor installed without attachment to subfloor",
    materials: ["Laminate", "Engineered wood", "Luxury vinyl", "Some hardwood"],
    advantages: ["Easy installation", "Quick", "Removable", "Less prep work"],
    process: ["Subfloor prep", "Underlayment", "Click-lock assembly", "Trim installation"],
    difficulty: "Beginner"
  },
  {
    technique: "Nail-Down Installation",
    description: "Securing flooring with nails or staples",
    materials: ["Solid hardwood", "Engineered wood", "Bamboo flooring"],
    advantages: ["Very secure", "Traditional method", "Long-lasting", "Stable"],
    process: ["Subfloor prep", "Moisture barrier", "Nail gun installation", "Sanding/finishing"],
    difficulty: "Intermediate"
  },
  {
    technique: "Glue-Down Installation",
    description: "Adhering flooring directly to subfloor",
    materials: ["Vinyl", "Some hardwood", "Carpet tiles", "Parquet"],
    advantages: ["Stable", "Good for concrete", "No expansion gaps", "Quiet"],
    process: ["Surface prep", "Adhesive application", "Material placement", "Rolling/pressing"],
    difficulty: "Advanced"
  },
  {
    technique: "Stretch-In Carpet",
    description: "Traditional carpet installation with tack strips",
    materials: ["Broadloom carpet", "Carpet padding", "Tack strips"],
    advantages: ["Comfortable", "Easy replacement", "Good appearance", "Industry standard"],
    process: ["Tack strip installation", "Padding placement", "Carpet stretching", "Trimming"],
    difficulty: "Intermediate"
  }
]

const specializations = [
  {
    title: "Residential Installation",
    description: "Home flooring projects and renovations",
    projects: ["New construction", "Renovations", "Room updates", "Repairs"],
    salary: "$20-34/hour",
    demand: "Very High"
  },
  {
    title: "Commercial Installation",
    description: "Large-scale commercial and institutional projects",
    projects: ["Office buildings", "Retail spaces", "Hospitals", "Schools"],
    salary: "$24-38/hour",
    demand: "High"
  },
  {
    title: "Specialty Flooring",
    description: "High-end and unique flooring materials",
    projects: ["Custom hardwood", "Natural stone", "Terrazzo", "Decorative concrete"],
    salary: "$28-45/hour",
    demand: "Medium"
  },
  {
    title: "Floor Refinishing",
    description: "Restoration and refinishing of existing floors",
    projects: ["Hardwood refinishing", "Concrete polishing", "Restoration", "Repairs"],
    salary: "$22-36/hour",
    demand: "High"
  }
]

const toolsEquipment = [
  {
    category: "Hand Tools",
    items: ["Measuring tools", "Utility knives", "Hammers", "Chisels", "Hand saws"],
    cost: "$200-500"
  },
  {
    category: "Power Tools",
    items: ["Miter saws", "Circular saws", "Nail guns", "Sanders", "Drills"],
    cost: "$1,500-4,000"
  },
  {
    category: "Specialty Tools",
    items: ["Floor sanders", "Knee pads", "Tapping blocks", "Pull bars", "Spacers"],
    cost: "$500-2,000"
  },
  {
    category: "Installation Equipment",
    items: ["Carpet stretchers", "Seaming irons", "Tile spacers", "Adhesive spreaders"],
    cost: "$800-3,000"
  }
]

const safetyRequirements = [
  {
    title: "Respiratory Protection",
    requirements: ["Dust masks", "Ventilation", "Fume extraction", "Air quality monitoring"],
    certification: "Respiratory Safety"
  },
  {
    title: "Ergonomic Safety",
    requirements: ["Knee protection", "Back safety", "Lifting techniques", "Repetitive motion"],
    certification: "Ergonomic Training"
  },
  {
    title: "Tool Safety",
    requirements: ["Power tool operation", "Blade safety", "Equipment maintenance", "Electrical safety"],
    certification: "Tool Safety Course"
  },
  {
    title: "Chemical Safety",
    requirements: ["Adhesive handling", "Solvent safety", "MSDS knowledge", "Ventilation"],
    certification: "WHMIS Training"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$16-24/hour",
    responsibilities: ["Basic installation", "Material prep", "Site cleanup", "Helper duties"],
    skills: ["Tool operation", "Material handling", "Basic techniques"]
  },
  {
    level: "2nd Year Apprentice",
    years: "Year 2",
    wage: "$20-32/hour", 
    responsibilities: ["Complex installation", "Quality control", "Problem solving", "Training helpers"],
    skills: ["All materials", "Advanced techniques", "Pattern work"]
  },
  {
    level: "Journeyperson Installer",
    years: "2+ years",
    wage: "$26-40/hour",
    responsibilities: ["Project leadership", "Quality assurance", "Estimating", "Client interaction"],
    skills: ["All specializations", "Supervision", "Business skills"]
  },
  {
    level: "Contractor/Specialist",
    years: "4+ years",
    wage: "$35,000-80,000+/year",
    responsibilities: ["Business management", "Team leadership", "Specialized services", "Growth"],
    skills: ["Business operations", "Customer service", "Advanced specializations"]
  }
]

const industryApplications = [
  {
    sector: "Residential Construction", 
    applications: ["New homes", "Renovations", "Room updates", "Repairs"],
    growth: "+15% annually"
  },
  {
    sector: "Commercial Construction",
    applications: ["Office buildings", "Retail spaces", "Hospitality", "Healthcare"],
    growth: "+12% annually"
  },
  {
    sector: "Renovation Market",
    applications: ["Home improvements", "Remodeling", "Upgrades", "Maintenance"],
    growth: "+18% annually"
  },
  {
    sector: "Specialty Applications", 
    applications: ["Custom installations", "Historic restoration", "High-end finishes", "Sustainable materials"],
    growth: "+20% annually"
  }
]

export default function FlooringInstallerPage() {
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
            {flooringOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {flooringOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {flooringOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {flooringOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {flooringOverview.wage}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {flooringOverview.demand} Demand
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
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Flooring Types & Materials
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {flooringTypes.map((flooring, index) => (
            <Card 
              key={flooring.type}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{flooring.type}</CardTitle>
                <CardDescription>{flooring.description}</CardDescription>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Durability:</span>
                  <span className="font-medium text-blue-600">{flooring.durability}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Maintenance:</span>
                  <span className="font-medium text-green-600">{flooring.maintenance}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Materials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {flooring.materials.map((material) => (
                        <span key={material} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Installation Methods:</h4>
                    <div className="flex flex-wrap gap-1">
                      {flooring.installation.map((method) => (
                        <span key={method} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {flooring.applications.map((app) => (
                        <span key={app} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
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
                <div className="text-sm font-medium text-blue-600">
                  Difficulty: {technique.difficulty}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Suitable Materials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.materials.map((material) => (
                        <span key={material} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {material}
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
                          <span className="bg-orange-100 text-orange-800 text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">
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
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
          Master Flooring Installation
        </h2>
        <p className="text-lg text-muted-foreground">
          Create beautiful and functional floor surfaces - diverse materials and techniques, excellent job security, and opportunities for creativity and specialization
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