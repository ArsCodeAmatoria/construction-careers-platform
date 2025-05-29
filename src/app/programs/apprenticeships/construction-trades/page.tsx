'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Wrench, 
  HardHat, 
  Building, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  ArrowLeft,
  Star,
  Briefcase,
  Shield,
  Hammer,
  Settings,
  Palette,
  Home,
  Square,
  Grid,
  Layers
} from "lucide-react"

const constructionTrades = [
  {
    name: "Concrete Finisher",
    duration: "3 years",
    wage: "$18-32/hour",
    description: "Smooth and finish surfaces of poured concrete floors, walls, and sidewalks",
    skills: ["Surface finishing", "Texture application", "Quality control", "Tool mastery"],
    demand: "High",
    icon: <Square className="h-8 w-8 text-gray-500 float" />,
    slug: "concrete-finisher"
  },
  {
    name: "Roofer",
    duration: "3 years", 
    wage: "$19-35/hour",
    description: "Install and repair roofs using various materials and techniques",
    skills: ["Material installation", "Weather sealing", "Safety procedures", "Repair techniques"],
    demand: "Very High",
    icon: <Home className="h-8 w-8 text-red-500 float" />,
    slug: "roofer"
  },
  {
    name: "Drywall Installer",
    duration: "2 years",
    wage: "$16-28/hour", 
    description: "Install and finish drywall panels in residential and commercial buildings",
    skills: ["Panel installation", "Taping and mudding", "Texture finishing", "Quality assurance"],
    demand: "High",
    icon: <Grid className="h-8 w-8 text-blue-500 float" />,
    slug: "drywall-installer"
  },
  {
    name: "Painter",
    duration: "3 years",
    wage: "$17-30/hour",
    description: "Apply paint, stain, and coatings to buildings and structures",
    skills: ["Surface preparation", "Color matching", "Application techniques", "Equipment maintenance"],
    demand: "High", 
    icon: <Palette className="h-8 w-8 text-purple-500 float" />,
    slug: "painter"
  },
  {
    name: "Glazier",
    duration: "4 years",
    wage: "$20-36/hour",
    description: "Install windows, glass doors, skylights, and glass curtain walls",
    skills: ["Glass cutting", "Frame installation", "Sealing techniques", "Safety protocols"],
    demand: "Medium",
    icon: <Layers className="h-8 w-8 text-cyan-500 float" />,
    slug: "glazier"
  },
  {
    name: "Flooring Installer",
    duration: "2 years", 
    wage: "$18-32/hour",
    description: "Install various types of flooring materials in residential and commercial spaces",
    skills: ["Material preparation", "Installation techniques", "Pattern layout", "Finishing work"],
    demand: "High",
    icon: <Settings className="h-8 w-8 text-orange-500 float" />,
    slug: "flooring-installer"
  }
]

const trainingFeatures = [
  {
    title: "Hands-on Project Experience",
    description: "Work on real construction projects from day one",
    benefits: ["Live project exposure", "Skill application", "Portfolio building", "Industry networking"]
  },
  {
    title: "Modern Equipment Training",
    description: "Learn with the latest tools and technology",
    benefits: ["Current industry standards", "Equipment certification", "Efficiency techniques", "Technology integration"]
  },
  {
    title: "Safety Certifications Included",
    description: "Comprehensive safety training and certifications",
    benefits: ["WHMIS certification", "Fall protection", "First aid training", "Site safety protocols"]
  },
  {
    title: "Direct Employer Partnerships",
    description: "Strong connections with leading construction companies",
    benefits: ["Job placement assistance", "Mentorship programs", "Career advancement", "Industry insights"]
  },
  {
    title: "Flexible Scheduling Options",
    description: "Training schedules that accommodate various needs",
    benefits: ["Evening classes", "Weekend workshops", "Online modules", "Part-time options"]
  }
]

const careerPathways = [
  {
    level: "Entry-Level Apprentice",
    years: "0-1 years",
    wage: "$16-20/hour",
    responsibilities: ["Basic skill development", "Safety training", "Tool familiarization", "Helper duties"],
    icon: <Star className="h-6 w-6 text-yellow-500 float" />
  },
  {
    level: "Intermediate Apprentice",
    years: "1-2 years", 
    wage: "$18-25/hour",
    responsibilities: ["Independent work tasks", "Quality control", "Team coordination", "Skill specialization"],
    icon: <Wrench className="h-6 w-6 text-blue-500 float" />
  },
  {
    level: "Skilled Journeyperson",
    years: "3-5 years",
    wage: "$25-35/hour", 
    responsibilities: ["Project leadership", "Apprentice mentoring", "Quality assurance", "Problem solving"],
    icon: <Award className="h-6 w-6 text-green-500 float" />
  },
  {
    level: "Specialist/Supervisor",
    years: "5+ years",
    wage: "$30-45/hour",
    responsibilities: ["Team management", "Project coordination", "Training development", "Business operations"],
    icon: <Users className="h-6 w-6 text-purple-500 float" />
  }
]

const industryConnections = [
  {
    name: "BC General Contractors Association",
    type: "Industry Association",
    opportunities: ["Job placements", "Networking events", "Continuing education", "Industry updates"]
  },
  {
    name: "Construction Labour Relations",
    type: "Labor Organization", 
    opportunities: ["Union pathways", "Benefit programs", "Safety training", "Career advancement"]
  },
  {
    name: "Provincial Construction Companies",
    type: "Employer Partners",
    opportunities: ["Direct hiring", "Apprenticeship sponsorship", "Mentorship programs", "Project experience"]
  },
  {
    name: "Specialized Trade Contractors",
    type: "Trade Specialists",
    opportunities: ["Niche specializations", "Advanced techniques", "Equipment training", "Business partnerships"]
  }
]

const programRequirements = [
  {
    category: "Basic Requirements",
    items: [
      "High school completion or equivalent",
      "Basic math and reading skills", 
      "Physical ability for trade demands",
      "Valid driver's license (preferred)"
    ]
  },
  {
    category: "Personal Qualities",
    items: [
      "Safety-conscious mindset",
      "Attention to detail",
      "Team collaboration skills",
      "Problem-solving abilities"
    ]
  },
  {
    category: "Pre-Training",
    items: [
      "Basic tool knowledge (helpful)",
      "Construction site familiarity", 
      "Physical fitness assessment",
      "Safety orientation"
    ]
  }
]

const programBenefits = [
  {
    title: "Immediate Employment",
    description: "Start working and earning from day one",
    value: "85% job placement rate",
    icon: <Briefcase className="h-6 w-6 text-green-500 float" />
  },
  {
    title: "Skill Development",
    description: "Comprehensive training in specialized trades", 
    value: "Industry-recognized skills",
    icon: <TrendingUp className="h-6 w-6 text-blue-500 float" />
  },
  {
    title: "Career Security",
    description: "High demand for skilled construction workers",
    value: "Growing job market",
    icon: <Shield className="h-6 w-6 text-purple-500 float" />
  },
  {
    title: "Advancement Opportunities",
    description: "Clear pathways to leadership and specialization",
    value: "Unlimited growth potential",
    icon: <Star className="h-6 w-6 text-orange-500 float" />
  }
]

export default function ConstructionTradesPage() {
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
            <Wrench className="h-16 w-16 text-blue-500 float" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
            Construction Trades
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Specialized training in high-demand construction trades with hands-on experience, modern equipment, and direct employer partnerships.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Available Construction Trades
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {constructionTrades.map((trade, index) => (
            <Link key={trade.name} href={`/programs/apprenticeships/construction-trades/${trade.slug}`}>
              <Card 
                delay={index * 0.08}
                className="h-full hover:shadow-lg transition-shadow cursor-pointer"
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
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Demand:</span>
                      <span className={`font-medium ${trade.demand === 'Very High' ? 'text-red-500' : trade.demand === 'High' ? 'text-orange-500' : 'text-yellow-500'}`}>
                        {trade.demand}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {trade.skills.map((skill) => (
                          <span key={skill} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <Button variant="ghost" size="sm" className="w-full">
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Training Features
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-1 lg:grid-cols-2" stagger={0.08}>
          {trainingFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
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

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Career Progression
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
                  {level.icon}
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
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Industry Connections
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {industryConnections.map((connection, index) => (
            <Card 
              key={connection.name}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg">{connection.name}</CardTitle>
                <CardDescription>{connection.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {connection.opportunities.map((opportunity) => (
                    <li key={opportunity} className="flex items-center text-sm">
                      <Target className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
                      <span>{opportunity}</span>
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
          Program Requirements
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {programRequirements.map((req, index) => (
            <Card 
              key={req.category}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg text-center">{req.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <Target className="h-3 w-3 mr-2 text-blue-500 flex-shrink-0" />
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
          Program Benefits
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {programBenefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {benefit.icon}
                  <h3 className="font-semibold text-sm">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  <div className="text-xs font-medium text-primary">{benefit.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Construction Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join the construction industry with specialized skills, hands-on training, and direct pathways to employment
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
              <Building className="mr-2 h-5 w-5" />
              Get Information
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 