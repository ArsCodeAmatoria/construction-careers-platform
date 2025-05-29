'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Factory, 
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
  Users,
  BookOpen,
  AlertTriangle,
  Flame,
  Zap,
  Wind,
  Cpu
} from "lucide-react"

const welderOverview = {
  name: "Welder",
  code: "456A",
  duration: "3 years",
  wage: "$20-42/hour",
  journeyWage: "$28-50/hour",
  demand: "High",
  description: "Join metals using various welding techniques and equipment in structural, industrial, and fabrication applications",
  icon: <Factory className="h-16 w-16 text-orange-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 8 weeks school",
    topics: ["SMAW (Stick) welding", "Safety procedures", "Metallurgy basics", "Blueprint reading", "Joint preparation"],
    wage: "$18-24/hour",
    focus: "Foundation Welding"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 8 weeks school",
    topics: ["GMAW (MIG) welding", "GTAW (TIG) welding", "Aluminum welding", "Position welding", "Quality control"],
    wage: "$20-28/hour",
    focus: "Advanced Processes"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 8 weeks school", 
    topics: ["Specialized processes", "Pressure vessel welding", "CWB certification", "Inspection techniques", "Business skills"],
    wage: "$22-36/hour",
    focus: "Specialization & Certification"
  }
]

const weldingProcesses = [
  {
    process: "SMAW (Stick Welding)",
    description: "Shielded Metal Arc Welding",
    applications: ["Structural steel", "Repair work", "Outdoor welding", "Heavy construction"],
    advantages: ["Portable", "Wind resistant", "Versatile", "Low cost"],
    materials: ["Carbon steel", "Stainless steel", "Cast iron", "Low alloy steel"],
    icon: <Zap className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "GMAW (MIG Welding)",
    description: "Gas Metal Arc Welding", 
    applications: ["Automotive", "Manufacturing", "Sheet metal", "Production welding"],
    advantages: ["High speed", "Clean welds", "Easy to learn", "Minimal cleanup"],
    materials: ["Steel", "Aluminum", "Stainless steel", "Copper alloys"],
    icon: <Wind className="h-6 w-6 text-green-500 float" />
  },
  {
    process: "GTAW (TIG Welding)",
    description: "Gas Tungsten Arc Welding",
    applications: ["Aerospace", "Food industry", "Art work", "Critical joints"],
    advantages: ["High quality", "Precise control", "Clean process", "No spatter"],
    materials: ["Aluminum", "Stainless steel", "Exotic alloys", "Thin materials"],
    icon: <Flame className="h-6 w-6 text-purple-500 float" />
  },
  {
    process: "FCAW (Flux Core)",
    description: "Flux Cored Arc Welding",
    applications: ["Structural work", "Shipbuilding", "Bridge construction", "Heavy industry"],
    advantages: ["High deposition", "Deep penetration", "Outdoor capability", "Fast welding"],
    materials: ["Carbon steel", "Low alloy steel", "Weather resistant steel", "High strength steel"],
    icon: <Cpu className="h-6 w-6 text-orange-500 float" />
  }
]

const specializations = [
  {
    title: "Structural Welding",
    description: "Building and bridge construction welding",
    requirements: ["CWB Level 1", "Position qualification", "Visual inspection", "Code knowledge"],
    salary: "$22-40/hour",
    demand: "Very High"
  },
  {
    title: "Pressure Vessel Welding",
    description: "Tanks, boilers, and pressure systems", 
    requirements: ["ASME certification", "RT/UT qualified", "Precise technique", "Quality standards"],
    salary: "$28-50/hour",
    demand: "High"
  },
  {
    title: "Pipeline Welding",
    description: "Oil and gas pipeline construction",
    requirements: ["API certification", "Travel availability", "Root pass expertise", "Field experience"],
    salary: "$30-55/hour",
    demand: "High"
  },
  {
    title: "Underwater Welding",
    description: "Marine and offshore welding",
    requirements: ["Commercial diving", "Hyperbaric welding", "Safety certification", "Physical fitness"],
    salary: "$35-80/hour",
    demand: "Medium"
  }
]

const toolsEquipment = [
  {
    category: "Welding Machines",
    items: ["Stick welder", "MIG welder", "TIG welder", "Multi-process welder", "Plasma cutter"],
    cost: "$1,500-8,000"
  },
  {
    category: "Hand Tools", 
    items: ["Welding helmet", "Angle grinder", "Wire brush", "Chipping hammer", "Measuring tools"],
    cost: "$500-1,200"
  },
  {
    category: "Safety Equipment",
    items: ["Welding leathers", "Safety glasses", "Respirator", "Gloves", "Ventilation equipment"],
    cost: "$800-1,500"
  },
  {
    category: "Accessories",
    items: ["Welding rods", "Wire feeders", "Gas regulators", "Torches", "Positioners"],
    cost: "$1,000-3,000"
  }
]

const materialKnowledge = [
  {
    material: "Carbon Steel",
    properties: ["Good weldability", "Common material", "Various grades", "Heat treatment"],
    welding_considerations: ["Preheating requirements", "Cooling rates", "Hydrogen control", "Joint design"]
  },
  {
    material: "Stainless Steel",
    properties: ["Corrosion resistant", "Heat resistant", "Magnetic properties", "Work hardening"],
    welding_considerations: ["Heat input control", "Shielding gas selection", "Distortion control", "Interpass temperature"]
  },
  {
    material: "Aluminum",
    properties: ["Lightweight", "Oxide layer", "High conductivity", "No color change"],
    welding_considerations: ["AC welding", "Cleaning requirements", "Heat sink effects", "Porosity prevention"]
  },
  {
    material: "Cast Iron",
    properties: ["Brittle", "High carbon", "Machinable", "Good compression"],
    welding_considerations: ["Preheating needs", "Cooling control", "Nickel rods", "Stress relief"]
  }
]

const safetyRequirements = [
  {
    title: "Arc Eye Protection",
    requirements: ["Proper helmet shade", "Side shields", "UV protection", "Regular inspection"],
    certification: "Eye Protection Training"
  },
  {
    title: "Respiratory Protection",
    requirements: ["Fume extraction", "Respirator use", "Confined space protocols", "Air quality monitoring"],
    certification: "Respiratory Protection Program"
  },
  {
    title: "Fire Prevention",
    requirements: ["Hot work permits", "Fire watch", "Extinguisher access", "Burn prevention"],
    certification: "Hot Work Safety certification"
  },
  {
    title: "Electrical Safety",
    requirements: ["Dry conditions", "Proper grounding", "Insulation checks", "Shock prevention"],
    certification: "Electrical Safety Training"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$18-24/hour",
    responsibilities: ["Basic stick welding", "Material preparation", "Safety compliance", "Equipment maintenance"],
    skills: ["SMAW technique", "Safety awareness", "Blueprint basics"]
  },
  {
    level: "2nd & 3rd Year Apprentice",
    years: "Years 2-3",
    wage: "$20-36/hour", 
    responsibilities: ["Multi-process welding", "Position welding", "Quality control", "CWB testing"],
    skills: ["MIG/TIG welding", "Metallurgy knowledge", "Code compliance"]
  },
  {
    level: "Journeyperson Welder",
    years: "3+ years",
    wage: "$28-50/hour",
    responsibilities: ["Complex fabrication", "Inspection", "Training others", "Project leadership"],
    skills: ["All processes", "Supervision", "Quality assurance"]
  },
  {
    level: "Welding Supervisor/Inspector",
    years: "7+ years",
    wage: "$35-65/hour",
    responsibilities: ["Quality control", "Code compliance", "Team management", "Project coordination"],
    skills: ["Leadership", "Inspection", "Documentation"]
  }
]

const industryApplications = [
  {
    sector: "Construction", 
    applications: ["Structural steel", "Building frameworks", "Bridge work", "Reinforcement"],
    growth: "+18% annually"
  },
  {
    sector: "Manufacturing",
    applications: ["Automotive", "Machinery", "Equipment fabrication", "Production welding"],
    growth: "+15% annually"
  },
  {
    sector: "Oil & Gas",
    applications: ["Pipeline construction", "Refinery maintenance", "Offshore platforms", "Storage tanks"],
    growth: "+22% annually"
  },
  {
    sector: "Aerospace & Marine", 
    applications: ["Aircraft components", "Shipbuilding", "Submarine work", "Precision welding"],
    growth: "+12% annually"
  }
]

export default function WelderPage() {
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
            {welderOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {welderOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {welderOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {welderOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {welderOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {welderOverview.wage}
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
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Welding Processes
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {weldingProcesses.map((process, index) => (
            <Card 
              key={process.process}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {process.icon}
                  <div>
                    <CardTitle className="text-lg">{process.process}</CardTitle>
                    <CardDescription>{process.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {process.applications.map((app) => (
                        <span key={app} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Advantages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {process.advantages.map((adv) => (
                        <span key={adv} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {adv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Materials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {process.materials.map((mat) => (
                        <span key={mat} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {mat}
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
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {spec.requirements.map((req) => (
                      <li key={req} className="flex items-center text-sm">
                        <Target className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Welding Considerations:</h4>
                    <ul className="space-y-1">
                      {material.welding_considerations.map((consideration) => (
                        <li key={consideration} className="flex items-center text-xs">
                          <AlertTriangle className="h-2 w-2 mr-2 text-orange-500 flex-shrink-0" />
                          <span>{consideration}</span>
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
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                    <span key={app} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
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
          Forge Your Welding Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join metals and build your future with Red Seal Welder certification - high-demand skills, excellent wages, and opportunities worldwide
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