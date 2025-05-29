'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Palette, 
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
  Brush,
  Droplets,
  Eye,
  Home,
  Building
} from "lucide-react"

const painterOverview = {
  name: "Painter",
  duration: "3 years",
  wage: "$17-30/hour",
  journeyWage: "$25-40/hour",
  demand: "High",
  description: "Apply paint, stain, and coatings to buildings and structures, creating protective and decorative finishes",
  icon: <Palette className="h-16 w-16 text-purple-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Surface preparation", "Basic paint application", "Tool usage", "Safety procedures", "Color theory"],
    wage: "$15-22/hour",
    focus: "Foundation Skills"
  },
  {
    year: "Year 2", 
    hours: "1,500 work hours + 150 classroom hours",
    topics: ["Advanced techniques", "Specialty finishes", "Spray application", "Problem solving", "Quality control"],
    wage: "$18-26/hour",
    focus: "Advanced Techniques"
  },
  {
    year: "Year 3",
    hours: "1,500 work hours + 150 classroom hours", 
    topics: ["Decorative finishes", "Restoration work", "Supervision skills", "Estimating", "Business practices"],
    wage: "$20-30/hour",
    focus: "Mastery & Leadership"
  }
]

const paintingTechniques = [
  {
    technique: "Brush Application",
    description: "Traditional brush painting for detail work and small areas",
    applications: ["Trim work", "Detail finishing", "Touch-ups", "Artistic work"],
    tools: ["Various brushes", "Paint", "Primer", "Drop cloths"],
    advantages: ["Precision control", "Smooth finish", "Good coverage", "Versatile"],
    icon: <Brush className="h-6 w-6 text-blue-500 float" />
  },
  {
    technique: "Roller Application",
    description: "Efficient roller application for large flat surfaces", 
    applications: ["Walls", "Ceilings", "Large surfaces", "Production work"],
    tools: ["Roller frames", "Roller covers", "Paint trays", "Extension poles"],
    advantages: ["Fast application", "Even coverage", "Cost effective", "Easy to learn"],
    icon: <Droplets className="h-6 w-6 text-green-500 float" />
  },
  {
    technique: "Spray Application",
    description: "Professional spray equipment for smooth, fast coverage",
    applications: ["New construction", "Cabinet finishing", "Furniture", "Industrial"],
    tools: ["Spray guns", "Compressors", "Spray booths", "Masks"],
    advantages: ["Smooth finish", "Fast coverage", "Professional results", "Even coating"],
    icon: <Target className="h-6 w-6 text-purple-500 float" />
  },
  {
    technique: "Specialty Finishes",
    description: "Decorative and artistic painting techniques",
    applications: ["Faux finishes", "Murals", "Textures", "Restoration"],
    tools: ["Specialty brushes", "Glazes", "Stencils", "Artistic tools"],
    advantages: ["Creative expression", "High value", "Unique results", "Premium pricing"],
    icon: <Eye className="h-6 w-6 text-orange-500 float" />
  }
]

const specializations = [
  {
    title: "Residential Painting",
    description: "Interior and exterior home painting services",
    projects: ["New homes", "Renovations", "Color consulting", "Maintenance"],
    techniques: ["Wall painting", "Trim work", "Ceiling painting", "Exterior finishes"],
    salary: "$20-32/hour",
    demand: "Very High"
  },
  {
    title: "Commercial Painting",
    description: "Large-scale commercial and institutional projects",
    projects: ["Office buildings", "Schools", "Hospitals", "Retail spaces"],
    techniques: ["Production painting", "Spray application", "Industrial coatings", "Safety systems"],
    salary: "$24-38/hour",
    demand: "High"
  },
  {
    title: "Decorative Finishing",
    description: "High-end decorative and artistic painting",
    projects: ["Luxury homes", "Hotels", "Restaurants", "Custom finishes"],
    techniques: ["Faux finishing", "Murals", "Gilding", "Textural effects"],
    salary: "$28-45/hour",
    demand: "Medium"
  },
  {
    title: "Industrial Coatings",
    description: "Protective and specialized industrial coatings",
    projects: ["Factories", "Bridges", "Marine structures", "Equipment"],
    techniques: ["Protective coatings", "Anti-corrosion", "High-performance paints", "Surface preparation"],
    salary: "$26-42/hour",
    demand: "High"
  }
]

const paintTypes = [
  {
    type: "Latex Paint",
    description: "Water-based paint for interior and exterior use",
    advantages: ["Easy cleanup", "Low odor", "Quick drying", "Durable"],
    applications: ["Interior walls", "Ceilings", "Exterior siding", "General use"],
    coverage: "350-400 sq ft/gallon"
  },
  {
    type: "Oil-Based Paint",
    description: "Solvent-based paint for high-durability applications",
    advantages: ["Hard finish", "Smooth application", "Long-lasting", "Washable"],
    applications: ["Trim work", "Doors", "Cabinets", "High-wear areas"],
    coverage: "300-350 sq ft/gallon"
  },
  {
    type: "Specialty Coatings",
    description: "High-performance coatings for specific applications",
    advantages: ["Specialized properties", "Problem-solving", "Long-term protection", "Value-added"],
    applications: ["Primers", "Sealers", "Anti-rust", "Fire-retardant"],
    coverage: "Varies by product"
  },
  {
    type: "Stains & Varnishes",
    description: "Transparent and semi-transparent wood finishes",
    advantages: ["Natural appearance", "Wood protection", "Enhancement", "Penetrating"],
    applications: ["Decks", "Siding", "Furniture", "Interior wood"],
    coverage: "150-250 sq ft/gallon"
  }
]

const surfacePreparation = [
  {
    surface: "New Drywall",
    preparation: ["Prime all surfaces", "Sand smooth", "Fill nail holes", "Clean thoroughly"],
    challenges: ["Absorption rates", "Texture matching", "Joint visibility", "Flash marks"],
    timeRequired: "40% of project time"
  },
  {
    surface: "Previously Painted",
    preparation: ["Clean surfaces", "Scrape loose paint", "Sand rough areas", "Spot prime"],
    challenges: ["Paint compatibility", "Adhesion issues", "Color bleeding", "Surface defects"],
    timeRequired: "30% of project time"
  },
  {
    surface: "Wood Surfaces",
    preparation: ["Sand to smooth", "Fill grain/holes", "Prime knots", "Clean dust"],
    challenges: ["Grain raising", "Knot bleeding", "Moisture content", "Weathering"],
    timeRequired: "50% of project time"
  },
  {
    surface: "Metal Surfaces",
    preparation: ["Remove rust", "Prime metal", "Sand smooth", "Degrease"],
    challenges: ["Corrosion prevention", "Primer adhesion", "Flash rusting", "Environmental"],
    timeRequired: "60% of project time"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$15-22/hour",
    responsibilities: ["Surface preparation", "Basic application", "Tool maintenance", "Safety compliance"],
    skills: ["Brush techniques", "Basic prep", "Color mixing"]
  },
  {
    level: "Senior Apprentice", 
    years: "Years 2-3",
    wage: "$18-30/hour",
    responsibilities: ["Quality finishing", "Spray application", "Problem solving", "Training helpers"],
    skills: ["All techniques", "Advanced prep", "Troubleshooting"]
  },
  {
    level: "Journeyperson Painter",
    years: "3+ years", 
    wage: "$25-40/hour",
    responsibilities: ["Project leadership", "Quality control", "Estimating", "Client interaction"],
    skills: ["All specialties", "Supervision", "Business skills"]
  },
  {
    level: "Contractor/Specialist",
    years: "5+ years",
    wage: "$40,000-85,000+/year",
    responsibilities: ["Business management", "Team leadership", "Specialized services", "Growth"],
    skills: ["Business operations", "Advanced specializations", "Customer service"]
  }
]

export default function PainterPage() {
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
            {painterOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {painterOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {painterOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {painterOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {painterOverview.wage}
            </span>
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {painterOverview.demand} Demand
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
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Painting Techniques
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {paintingTechniques.map((technique, index) => (
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tools:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Advantages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.advantages.map((adv) => (
                        <span key={adv} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {adv}
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
          Paint Types & Materials
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {paintTypes.map((paint, index) => (
            <Card 
              key={paint.type}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{paint.type}</CardTitle>
                <CardDescription>{paint.description}</CardDescription>
                <div className="text-sm font-medium text-blue-600">
                  Coverage: {paint.coverage}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Advantages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {paint.advantages.map((adv) => (
                        <span key={adv} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {adv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Best Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {paint.applications.map((app) => (
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
          Surface Preparation
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {surfacePreparation.map((surface, index) => (
            <Card 
              key={surface.surface}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{surface.surface}</CardTitle>
                <div className="text-sm font-medium text-orange-600">
                  Time Required: {surface.timeRequired}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Preparation Steps:</h4>
                    <ul className="space-y-1">
                      {surface.preparation.map((step) => (
                        <li key={step} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Common Challenges:</h4>
                    <div className="flex flex-wrap gap-1">
                      {surface.challenges.map((challenge) => (
                        <span key={challenge} className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          {challenge}
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
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
          Master the Art of Painting
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform spaces with color and protection - creative expression meets technical skill, excellent job security, and opportunities for artistic specialization
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