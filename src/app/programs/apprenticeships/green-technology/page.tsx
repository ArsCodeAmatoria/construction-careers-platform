'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Zap, 
  Leaf, 
  Sun, 
  Wind, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  ArrowLeft,
  Star,
  Globe,
  Award,
  Lightbulb,
  HardHat,
  Building,
  Wrench,
  Settings,
  Home,
  Shield,
  Briefcase,
  BookOpen,
  Users,
  Activity,
  Cpu,
  Factory
} from "lucide-react"

const greenTrades = [
  {
    name: "Solar Panel Installer",
    duration: "2-3 years",
    wage: "$20-38/hour",
    description: "Install and maintain solar photovoltaic systems on residential and commercial buildings",
    technologies: ["Photovoltaic systems", "Battery storage", "Grid-tie systems", "Mounting hardware"],
    certifications: ["NABCEP certification", "Electrical safety", "Fall protection", "System design"],
    demand: "Very High",
    growth: "+52% by 2030",
    icon: <Sun className="h-8 w-8 text-yellow-500 float" />
  },
  {
    name: "Energy Auditor",
    duration: "3 years", 
    wage: "$19-35/hour",
    description: "Assess building energy efficiency and recommend improvements",
    technologies: ["Thermal imaging", "Blower door testing", "Energy modeling", "HVAC analysis"],
    certifications: ["BPI certification", "Energy modeling", "Building science", "HVAC systems"],
    demand: "High",
    growth: "+38% by 2030",
    icon: <Activity className="h-8 w-8 text-green-500 float" />
  },
  {
    name: "Green Roofer",
    duration: "3-4 years",
    wage: "$21-36/hour", 
    description: "Install living roofs, cool roofs, and sustainable roofing materials",
    technologies: ["Living roof systems", "Cool roof materials", "Solar integration", "Drainage systems"],
    certifications: ["Green roof certification", "Waterproofing", "Plant systems", "Structural analysis"],
    demand: "High",
    growth: "+31% by 2030",
    icon: <Home className="h-8 w-8 text-emerald-500 float" />
  },
  {
    name: "Sustainable Builder",
    duration: "4 years",
    wage: "$22-40/hour",
    description: "Construct buildings using sustainable materials and green building techniques",
    technologies: ["Sustainable materials", "Passive design", "Green certifications", "Energy systems"],
    certifications: ["LEED certification", "Passive House", "Green building", "Sustainable construction"],
    demand: "Very High", 
    growth: "+44% by 2030",
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    name: "Geothermal Technician",
    duration: "3-4 years",
    wage: "$24-42/hour",
    description: "Install and maintain geothermal heating and cooling systems",
    technologies: ["Ground source heat pumps", "Loop systems", "Heat exchangers", "Control systems"],
    certifications: ["Geothermal certification", "HVAC systems", "Piping systems", "Heat pump technology"],
    demand: "Medium",
    growth: "+27% by 2030",
    icon: <Cpu className="h-8 w-8 text-orange-500 float" />
  },
  {
    name: "Wind Technician",
    duration: "2-3 years",
    wage: "$23-45/hour",
    description: "Maintain and repair wind turbines and wind energy systems",
    technologies: ["Wind turbines", "Electrical systems", "Hydraulic systems", "Control software"],
    certifications: ["Wind safety training", "Electrical certification", "Hydraulic systems", "Rescue training"],
    demand: "High",
    growth: "+68% by 2030",
    icon: <Wind className="h-8 w-8 text-cyan-500 float" />
  }
]

const sustainabilityFocus = [
  {
    title: "Renewable Energy Systems",
    description: "Master the installation and maintenance of clean energy technologies",
    technologies: ["Solar photovoltaic", "Wind power", "Geothermal systems", "Energy storage"],
    impact: "Reduce carbon emissions by 40-60%"
  },
  {
    title: "Energy Efficiency Specialization", 
    description: "Learn to optimize building performance and reduce energy consumption",
    technologies: ["Building envelope", "HVAC optimization", "Smart controls", "Energy modeling"],
    impact: "Achieve 30-50% energy savings"
  },
  {
    title: "Smart Building Technology",
    description: "Integrate IoT and automation for intelligent building management",
    technologies: ["IoT sensors", "Building automation", "Smart grids", "Data analytics"],
    impact: "Improve operational efficiency by 25-35%"
  },
  {
    title: "Sustainable Materials",
    description: "Work with eco-friendly and recycled building materials",
    technologies: ["Recycled materials", "Bio-based products", "Low-impact materials", "Circular design"],
    impact: "Reduce material waste by 50-70%"
  }
]

const environmentalCertifications = [
  {
    name: "LEED Green Associate",
    description: "Leadership in Energy and Environmental Design certification",
    duration: "6 months",
    benefits: ["Industry recognition", "Higher wages", "Career advancement", "Global mobility"]
  },
  {
    name: "BPI Building Analyst",
    description: "Building Performance Institute professional certification",
    duration: "4 months",
    benefits: ["Energy auditing credentials", "Technical expertise", "Professional network", "Specialized skills"]
  },
  {
    name: "NABCEP Solar Certification",
    description: "North American Board of Certified Energy Practitioners",
    duration: "8 months", 
    benefits: ["Solar industry standard", "Premium wages", "Job security", "Technical credibility"]
  },
  {
    name: "Passive House Certification",
    description: "Ultra-low energy building design and construction",
    duration: "6 months",
    benefits: ["Cutting-edge skills", "Premium projects", "International recognition", "Innovation leadership"]
  }
]

const innovationProjects = [
  {
    title: "Smart Grid Integration",
    description: "Participate in next-generation electrical grid projects",
    technologies: ["Smart meters", "Grid automation", "Energy storage", "Demand response"],
    partners: ["BC Hydro", "Technology companies", "Research institutions"]
  },
  {
    title: "Carbon Neutral Buildings",
    description: "Work on net-zero and carbon neutral construction projects",
    technologies: ["Carbon capture", "Renewable energy", "Energy efficiency", "Green materials"],
    partners: ["Government projects", "Private developers", "Environmental organizations"]
  },
  {
    title: "Circular Construction",
    description: "Implement waste reduction and material reuse strategies",
    technologies: ["Material recovery", "Modular design", "3D printing", "Recycling systems"],
    partners: ["Construction companies", "Material suppliers", "Waste management"]
  }
]

const careerPathways = [
  {
    level: "Green Apprentice",
    years: "0-2 years",
    wage: "$19-25/hour",
    responsibilities: ["Learn green technologies", "Basic installations", "Environmental awareness", "Safety protocols"],
    opportunities: ["Foundation training", "Technology exposure", "Mentorship", "Skill development"]
  },
  {
    level: "Certified Green Technician",
    years: "2-4 years", 
    wage: "$25-35/hour",
    responsibilities: ["Independent installations", "System commissioning", "Quality assurance", "Client education"],
    opportunities: ["Specialization choices", "Certification pursuit", "Team leadership", "Project management"]
  },
  {
    level: "Green Systems Specialist",
    years: "4-7 years",
    wage: "$32-45/hour",
    responsibilities: ["Complex system design", "Training delivery", "Innovation projects", "Technical consulting"],
    opportunities: ["Advanced certifications", "Consulting roles", "Training positions", "Research projects"]
  },
  {
    level: "Sustainability Consultant",
    years: "7+ years",
    wage: "$45,000-80,000+/year",
    responsibilities: ["Strategic planning", "Business development", "Industry leadership", "Policy influence"],
    opportunities: ["Business ownership", "Consulting firm", "Policy development", "Industry leadership"]
  }
]

const industrySupport = [
  {
    organization: "Clean Energy BC",
    type: "Industry Association",
    support: ["Networking events", "Training programs", "Job placement", "Industry advocacy"]
  },
  {
    organization: "Green Building Council",
    type: "Certification Body",
    support: ["LEED training", "Green building standards", "Professional development", "Industry connections"]
  },
  {
    organization: "Sustainable Technology Companies",
    type: "Employer Partners", 
    support: ["Direct hiring", "Equipment training", "Innovation projects", "Career advancement"]
  },
  {
    organization: "Government Initiatives",
    type: "Public Support",
    support: ["Funding programs", "Tax incentives", "Training grants", "Research opportunities"]
  }
]

export default function GreenTechnologyPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="space-y-4">
        <Link href="/programs/apprenticeships">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Apprenticeships
          </Button>
        </Link>
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <Zap className="h-16 w-16 text-emerald-500 float" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            Green Technology Trades
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Future-focused apprenticeships in sustainable construction with renewable energy training, smart building technology, and environmental certifications.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Green Technology Trades
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {greenTrades.map((trade, index) => (
            <Card 
              key={trade.name}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {trade.icon}
                </div>
                <CardTitle className="text-lg">{trade.name}</CardTitle>
                <CardDescription>{trade.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{trade.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Wage:</span>
                      <span className="font-medium text-green-600">{trade.wage}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Demand:</span>
                      <span className={`font-medium ${trade.demand === 'Very High' ? 'text-red-500' : trade.demand === 'High' ? 'text-orange-500' : 'text-yellow-500'}`}>
                        {trade.demand}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Growth:</span>
                      <span className="font-medium text-emerald-600">{trade.growth}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trade.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trade.certifications.map((cert) => (
                        <span key={cert} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {cert}
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
          Sustainability Focus Areas
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {sustainabilityFocus.map((focus, index) => (
            <Card 
              key={focus.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-green-500" />
                  {focus.title}
                </CardTitle>
                <CardDescription>{focus.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {focus.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Environmental Impact:</div>
                    <div className="text-sm text-green-700">{focus.impact}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Environmental Certifications
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {environmentalCertifications.map((cert, index) => (
            <Card 
              key={cert.name}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-500" />
                  {cert.name}
                </CardTitle>
                <CardDescription>{cert.description}</CardDescription>
                <div className="text-sm text-muted-foreground">
                  Duration: <span className="font-medium">{cert.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {cert.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Innovation Project Participation
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {innovationProjects.map((project, index) => (
            <Card 
              key={project.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="h-10 w-10 text-yellow-500 float" />
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Project Partners:</h4>
                    <ul className="space-y-1">
                      {project.partners.map((partner) => (
                        <li key={partner} className="flex items-center text-xs">
                          <Users className="h-2 w-2 mr-2 text-blue-500 flex-shrink-0" />
                          <span>{partner}</span>
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
          Green Career Progression
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {careerPathways.map((level, index) => (
            <Card 
              key={level.level}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{level.level}</h3>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience:</span>
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
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Opportunities:</h4>
                    <ul className="space-y-1 text-xs">
                      {level.opportunities.map((opp) => (
                        <li key={opp} className="flex items-center">
                          <Star className="h-2 w-2 mr-2 text-yellow-500 flex-shrink-0" />
                          <span>{opp}</span>
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
          Industry Support & Partners
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {industrySupport.map((partner, index) => (
            <Card 
              key={partner.organization}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{partner.organization}</CardTitle>
                <CardDescription>{partner.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {partner.support.map((service) => (
                    <li key={service} className="flex items-center text-sm">
                      <Target className="h-3 w-3 mr-2 text-emerald-500 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Shape the Future of Construction
        </h2>
        <p className="text-lg text-muted-foreground">
          Join the green revolution in construction with cutting-edge technology, environmental stewardship, and sustainable career growth
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
              <Globe className="mr-2 h-5 w-5" />
              Get Information
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 