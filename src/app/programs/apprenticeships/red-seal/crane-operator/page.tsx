'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  ArrowUp, 
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
  Truck,
  Anchor,
  Move,
  Gauge,
  Eye,
  Radio,
  MapPin
} from "lucide-react"

const craneOperatorOverview = {
  name: "Crane Operator",
  code: "7371",
  duration: "3 years",
  wage: "$25-55/hour",
  journeyWage: "$35-75/hour",
  demand: "Very High",
  description: "Operate various types of cranes to lift, move, position, and place materials and equipment in construction, industrial, and marine environments",
  icon: <ArrowUp className="h-16 w-16 text-blue-500 float" />
}

const trainingCurriculum = [
  {
    year: "Year 1",
    hours: "1,800 work hours + 6 weeks school",
    topics: ["Crane fundamentals", "Safety protocols", "Basic rigging", "Load calculations", "Equipment inspection"],
    wage: "$22-32/hour",
    focus: "Foundation & Safety"
  },
  {
    year: "Year 2", 
    hours: "1,800 work hours + 6 weeks school",
    topics: ["Advanced rigging", "Multi-crane operations", "Specialized equipment", "Site coordination", "Weather considerations"],
    wage: "$26-40/hour",
    focus: "Advanced Operations"
  },
  {
    year: "Year 3",
    hours: "1,800 work hours + 6 weeks school", 
    topics: ["Complex lifts", "Supervision skills", "Equipment maintenance", "Emergency procedures", "Regulatory compliance"],
    wage: "$30-50/hour",
    focus: "Expertise & Leadership"
  }
]

const craneTypes = [
  {
    type: "Tower Crane",
    description: "Fixed position cranes for high-rise construction",
    applications: ["High-rise buildings", "Residential towers", "Commercial construction", "Infrastructure projects"],
    features: ["Maximum height reach", "Precise positioning", "Heavy lifting capacity", "Long reach radius"],
    operation: ["Cab operation", "Remote control", "Load planning", "Assembly/disassembly"],
    salary: "$35-70/hour",
    demand: "Very High",
    icon: <Building className="h-6 w-6 text-blue-500 float" />
  },
  {
    type: "Mobile Crane",
    description: "Truck-mounted cranes for versatile lifting operations", 
    applications: ["Construction sites", "Infrastructure work", "Industrial maintenance", "Emergency response"],
    features: ["High mobility", "Quick setup", "Variable capacity", "All-terrain capability"],
    operation: ["Road travel", "Outrigger setup", "Load charts", "Site positioning"],
    salary: "$30-65/hour",
    demand: "Very High",
    icon: <Truck className="h-6 w-6 text-green-500 float" />
  },
  {
    type: "Marine Crane",
    description: "Shipboard and dockside cranes for maritime operations",
    applications: ["Port operations", "Ship loading", "Offshore platforms", "Marine construction"],
    features: ["Corrosion resistance", "Dynamic positioning", "Wave compensation", "Maritime certification"],
    operation: ["Vessel stability", "Cargo handling", "Weather monitoring", "Safety protocols"],
    salary: "$40-80/hour",
    demand: "High",
    icon: <Anchor className="h-6 w-6 text-blue-600 float" />
  },
  {
    type: "Overhead Crane",
    description: "Fixed installation cranes for industrial facilities",
    applications: ["Manufacturing plants", "Warehouses", "Steel mills", "Assembly facilities"],
    features: ["Precise control", "High cycle rates", "Automated systems", "Indoor operation"],
    operation: ["Bridge movement", "Hoist operation", "Load positioning", "Maintenance coordination"],
    salary: "$28-55/hour",
    demand: "High",
    icon: <Move className="h-6 w-6 text-orange-500 float" />
  }
]

const specializations = [
  {
    title: "Heavy Lift Specialist",
    description: "Complex and oversized load operations",
    requirements: ["Advanced rigging certification", "Engineering coordination", "Multi-crane experience", "Critical lift procedures"],
    projects: ["Industrial equipment", "Bridge construction", "Power plant work", "Refinery maintenance"],
    salary: "$45-80/hour",
    demand: "High"
  },
  {
    title: "High-Rise Construction",
    description: "Tower crane operations for tall buildings",
    requirements: ["Tower crane certification", "Height experience", "Precision control", "Site coordination"],
    projects: ["Residential towers", "Office buildings", "Hotels", "Mixed-use developments"],
    salary: "$40-75/hour",
    demand: "Very High"
  },
  {
    title: "Marine Operations",
    description: "Maritime and offshore crane work",
    requirements: ["Marine certification", "Vessel stability knowledge", "Weather assessment", "Maritime safety"],
    projects: ["Port operations", "Ship repair", "Offshore platforms", "Marine construction"],
    salary: "$45-85/hour",
    demand: "Medium"
  },
  {
    title: "Industrial Maintenance",
    description: "Plant and facility maintenance operations",
    requirements: ["Facility knowledge", "Shutdown coordination", "Safety protocols", "Equipment expertise"],
    projects: ["Plant turnarounds", "Equipment replacement", "Facility upgrades", "Emergency repairs"],
    salary: "$35-65/hour",
    demand: "High"
  }
]

const safetyRequirements = [
  {
    title: "Crane Safety",
    requirements: ["Daily inspections", "Load chart compliance", "Operator certification", "Signal person coordination"],
    certification: "Crane Operator Certification"
  },
  {
    title: "Rigging Safety",
    requirements: ["Proper sling selection", "Load calculations", "Rigging inspection", "Critical lift procedures"],
    certification: "Rigging Certification"
  },
  {
    title: "Site Safety",
    requirements: ["Hazard assessment", "Ground conditions", "Overhead clearances", "Personnel protection"],
    certification: "Construction Safety Training"
  },
  {
    title: "Emergency Procedures",
    requirements: ["Equipment failure response", "Weather protocols", "Evacuation procedures", "First aid/CPR"],
    certification: "Emergency Response Training"
  }
]

const toolsEquipment = [
  {
    category: "Control Systems",
    items: ["Joystick controls", "Load block", "Anti-two block systems", "Load moment indicators", "Radio controls"],
    cost: "$5,000-15,000"
  },
  {
    category: "Rigging Equipment", 
    items: ["Wire rope slings", "Chain slings", "Synthetic slings", "Shackles", "Hooks and blocks"],
    cost: "$2,000-8,000"
  },
  {
    category: "Safety Equipment",
    items: ["Hard hats", "Safety harnesses", "Fall protection", "High-visibility clothing", "Communication devices"],
    cost: "$800-2,000"
  },
  {
    category: "Measuring Tools",
    items: ["Load scales", "Inclinometers", "Wind gauges", "Measuring tapes", "Angle indicators"],
    cost: "$1,500-4,000"
  }
]

const operationalKnowledge = [
  {
    area: "Load Calculations",
    skills: ["Weight estimation", "Center of gravity", "Load charts", "Capacity derating", "Dynamic forces"],
    importance: "Critical for safe operations and equipment protection"
  },
  {
    area: "Weather Assessment",
    skills: ["Wind speed monitoring", "Visibility conditions", "Temperature effects", "Precipitation impact", "Storm protocols"],
    importance: "Essential for operational safety and equipment integrity"
  },
  {
    area: "Site Coordination",
    skills: ["Communication protocols", "Signal systems", "Personnel positioning", "Traffic control", "Emergency planning"],
    importance: "Vital for coordinated and safe lifting operations"
  },
  {
    area: "Equipment Maintenance",
    skills: ["Daily inspections", "Lubrication schedules", "Component replacement", "Troubleshooting", "Documentation"],
    importance: "Required for equipment reliability and safety compliance"
  }
]

const workEnvironments = [
  {
    environment: "Construction Sites",
    conditions: ["Outdoor work", "Variable terrain", "Multiple trades", "Changing layouts"],
    challenges: ["Weather exposure", "Site congestion", "Scheduling coordination", "Space limitations"],
    equipment: ["Mobile cranes", "Tower cranes", "Rough terrain cranes", "Carry deck cranes"]
  },
  {
    environment: "Industrial Facilities",
    conditions: ["Indoor/outdoor", "Process environments", "Confined spaces", "Hazardous materials"],
    challenges: ["Process constraints", "Shutdown schedules", "Safety protocols", "Precision requirements"],
    equipment: ["Overhead cranes", "Jib cranes", "Gantry cranes", "Bridge cranes"]
  },
  {
    environment: "Marine/Port",
    conditions: ["Waterfront locations", "Vessel operations", "Tidal changes", "Salt air exposure"],
    challenges: ["Weather dependency", "Vessel movement", "Cargo handling", "Maritime regulations"],
    equipment: ["Ship cranes", "Port cranes", "Floating cranes", "Dock cranes"]
  },
  {
    environment: "Infrastructure",
    conditions: ["Public spaces", "Traffic areas", "Utility corridors", "Environmental sensitivity"],
    challenges: ["Public safety", "Traffic management", "Utility conflicts", "Environmental protection"],
    equipment: ["All terrain cranes", "Crawler cranes", "Truck cranes", "Specialized equipment"]
  }
]

const certificationRequirements = [
  {
    certification: "National Crane Operator Certification",
    description: "Core competency certification for all crane types",
    requirements: ["Written examination", "Practical testing", "Vision/hearing tests", "Medical clearance"],
    validity: "5 years",
    cost: "$500-1,200"
  },
  {
    certification: "Mobile Crane Operator",
    description: "Specific certification for mobile crane operations",
    requirements: ["Equipment-specific training", "Capacity testing", "Site operation", "Load chart knowledge"],
    validity: "5 years",
    cost: "$800-1,500"
  },
  {
    certification: "Tower Crane Operator",
    description: "Specialized certification for tower crane operations",
    requirements: ["Height training", "Assembly knowledge", "Precision control", "Site coordination"],
    validity: "5 years",
    cost: "$1,000-2,000"
  },
  {
    certification: "Rigging Certification",
    description: "Complementary certification for rigging operations",
    requirements: ["Rigging theory", "Hardware knowledge", "Load calculations", "Safety procedures"],
    validity: "3 years",
    cost: "$400-800"
  }
]

const careerProgression = [
  {
    level: "1st Year Apprentice",
    years: "Year 1",
    wage: "$22-32/hour",
    responsibilities: ["Basic crane operation", "Equipment inspection", "Safety compliance", "Ground support"],
    skills: ["Control familiarity", "Safety awareness", "Basic rigging"]
  },
  {
    level: "Senior Apprentice",
    years: "Years 2-3",
    wage: "$26-50/hour", 
    responsibilities: ["Complex operations", "Multi-crane coordination", "Training others", "Site leadership"],
    skills: ["Advanced rigging", "Load planning", "Weather assessment"]
  },
  {
    level: "Journeyperson Crane Operator",
    years: "3+ years",
    wage: "$35-75/hour",
    responsibilities: ["Critical lifts", "Project coordination", "Equipment selection", "Safety oversight"],
    skills: ["Full competency", "Supervision", "Problem solving"]
  },
  {
    level: "Lead Operator/Supervisor",
    years: "7+ years",
    wage: "$50,000-120,000+/year",
    responsibilities: ["Crew management", "Project planning", "Client relations", "Training coordination"],
    skills: ["Leadership", "Project management", "Business development"]
  }
]

const industryApplications = [
  {
    sector: "Construction", 
    applications: ["High-rise buildings", "Infrastructure projects", "Residential construction", "Commercial development"],
    growth: "+20% annually"
  },
  {
    sector: "Industrial",
    applications: ["Plant maintenance", "Equipment installation", "Facility construction", "Manufacturing support"],
    growth: "+15% annually"
  },
  {
    sector: "Energy & Utilities",
    applications: ["Power plants", "Wind farms", "Transmission lines", "Pipeline construction"],
    growth: "+25% annually"
  },
  {
    sector: "Marine & Ports", 
    applications: ["Container handling", "Ship construction", "Port operations", "Offshore platforms"],
    growth: "+18% annually"
  }
]

export default function CraneOperatorPage() {
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
            {craneOperatorOverview.icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            {craneOperatorOverview.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            {craneOperatorOverview.description}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <FileCheck className="h-4 w-4 mr-1" />
              Code: {craneOperatorOverview.code}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {craneOperatorOverview.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {craneOperatorOverview.wage}
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
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
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
          Crane Types & Applications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {craneTypes.map((crane, index) => (
            <Card 
              key={crane.type}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {crane.icon}
                  <div>
                    <CardTitle className="text-lg">{crane.type}</CardTitle>
                    <CardDescription>{crane.description}</CardDescription>
                  </div>
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <span className="text-muted-foreground">Demand:</span>
                  <span className={`font-medium ${crane.demand === 'Very High' ? 'text-red-500' : crane.demand === 'High' ? 'text-orange-500' : 'text-yellow-500'}`}>
                    {crane.demand}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Salary:</span>
                  <span className="font-medium text-green-600">{crane.salary}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {crane.applications.map((app) => (
                        <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {crane.features.map((feature) => (
                        <span key={feature} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Operations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {crane.operation.map((op) => (
                        <span key={op} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {op}
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {spec.requirements.map((req) => (
                        <li key={req} className="flex items-center text-xs">
                          <Target className="h-2 w-2 mr-2 text-blue-500 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Project Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {spec.projects.map((project) => (
                        <span key={project} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
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
          Operational Knowledge
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {operationalKnowledge.map((knowledge, index) => (
            <Card 
              key={knowledge.area}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{knowledge.area}</CardTitle>
                <CardDescription className="text-orange-600 font-medium">
                  {knowledge.importance}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {knowledge.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {skill}
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
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Equipment Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {env.equipment.map((equip) => (
                        <span key={equip} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {equip}
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
          Certification Requirements
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {certificationRequirements.map((cert, index) => (
            <Card 
              key={cert.certification}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{cert.certification}</CardTitle>
                <CardDescription>{cert.description}</CardDescription>
                <div className="flex justify-between text-sm mt-3">
                  <span className="text-muted-foreground">Validity:</span>
                  <span className="font-medium">{cert.validity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Cost:</span>
                  <span className="font-medium text-green-600">{cert.cost}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {cert.requirements.map((req) => (
                      <li key={req} className="flex items-center text-xs">
                        <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
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
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                    <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
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
          Lift Your Career to New Heights
        </h2>
        <p className="text-lg text-muted-foreground">
          Master precision, safety, and expertise with Red Seal Crane Operator certification - high-demand skills, excellent wages, and critical infrastructure operations
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