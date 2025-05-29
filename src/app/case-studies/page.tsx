'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Building, 
  TrendingUp, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  Target,
  Brain,
  Eye,
  Search
} from "lucide-react"

const caseStudies = [
  {
    title: "AI-Powered Site Safety Implementation",
    company: "Metro Construction Ltd.",
    category: "AI & Computer Vision",
    description: "Reduced safety incidents by 60% using computer vision for real-time safety monitoring",
    results: [
      "60% reduction in safety incidents",
      "40% faster incident response",
      "95% PPE compliance rate",
      "$2.5M saved in insurance costs"
    ],
    technologies: ["Computer Vision", "AI Analytics", "IoT Sensors"],
    duration: "8 months",
    icon: <Eye className="h-6 w-6 text-green-500" />
  },
  {
    title: "Predictive Analytics for Project Planning",
    company: "Pacific Infrastructure Group",
    category: "Predictive Analytics",
    description: "Improved project delivery times by 35% using machine learning for schedule optimization",
    results: [
      "35% faster project delivery",
      "25% reduction in cost overruns",
      "90% schedule accuracy",
      "Enhanced resource utilization"
    ],
    technologies: ["Machine Learning", "Data Analytics", "Project Management AI"],
    duration: "12 months",
    icon: <Brain className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Digital Skills Transformation Program",
    company: "Fraser Valley Contractors",
    category: "Workforce Development",
    description: "Upskilled 200+ workers in digital construction technologies, improving productivity by 40%",
    results: [
      "200+ workers trained",
      "40% productivity increase",
      "95% employee retention",
      "15% salary increases"
    ],
    technologies: ["BIM Training", "Digital Tools", "VR Learning"],
    duration: "6 months",
    icon: <Users className="h-6 w-6 text-purple-500" />
  },
  {
    title: "Automated Quality Control System",
    company: "Vancouver Housing Corp",
    category: "Quality Assurance",
    description: "Implemented ML-based quality inspection reducing defects by 50% and inspection time by 70%",
    results: [
      "50% reduction in defects",
      "70% faster inspections",
      "99% accuracy rate",
      "$1.8M cost savings"
    ],
    technologies: ["Machine Learning", "Image Recognition", "Automated Reporting"],
    duration: "10 months",
    icon: <Search className="h-6 w-6 text-red-500" />
  },
  {
    title: "Green Technology Integration",
    company: "EcoBuilders BC",
    category: "Sustainability",
    description: "Achieved net-zero construction through advanced green technologies and training programs",
    results: [
      "100% renewable energy",
      "30% material waste reduction",
      "LEED Platinum certification",
      "50% lower operating costs"
    ],
    technologies: ["Solar Integration", "Energy Modeling", "Waste Management"],
    duration: "18 months",
    icon: <Target className="h-6 w-6 text-green-600" />
  },
  {
    title: "Crane Operations Excellence Program",
    company: "Coastal Heavy Lifting",
    category: "Specialized Training",
    description: "Zero-incident crane operations for 24 months through comprehensive training and technology",
    results: [
      "24 months zero incidents",
      "30% efficiency improvement",
      "100% certification rate",
      "Industry safety award"
    ],
    technologies: ["Simulator Training", "IoT Monitoring", "Safety Systems"],
    duration: "4 months",
    icon: <Shield className="h-6 w-6 text-orange-500" />
  }
]

const metrics = [
  {
    title: "Projects Completed",
    value: "500+",
    description: "Successful technology implementations",
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Workers Trained",
    value: "10,000+",
    description: "Professionals upskilled and certified",
    icon: <Users className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Cost Savings",
    value: "$50M+",
    description: "Total savings across all projects",
    icon: <DollarSign className="h-8 w-8 text-purple-500 float" />
  },
  {
    title: "Safety Improvement",
    value: "65%",
    description: "Average incident reduction",
    icon: <Shield className="h-8 w-8 text-red-500 float" />
  }
]

const categories = [
  "All",
  "AI & Computer Vision",
  "Predictive Analytics", 
  "Workforce Development",
  "Quality Assurance",
  "Sustainability",
  "Specialized Training"
]

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Success Stories
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Discover how our training programs and technology solutions are transforming the construction industry across British Columbia.
        </p>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Impact by the Numbers
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {metrics.map((metric, index) => (
            <Card 
              key={metric.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {metric.icon}
                  <div className="text-3xl font-bold text-primary">{metric.value}</div>
                  <h3 className="font-semibold">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="button-glow"
            >
              {category}
            </Button>
          ))}
        </div>

        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {caseStudies.map((study, index) => (
            <Card 
              key={study.title}
              delay={index * 0.08}
              className="h-full hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {study.icon}
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {study.category}
                  </span>
                </div>
                <CardTitle className="text-lg">{study.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {study.company}
                </CardDescription>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {study.duration}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Learn More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Ready to Create Your Success Story?
        </h2>
        <p className="text-lg text-muted-foreground">
          Join the leading construction companies that are transforming their operations with our solutions
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Building className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
          </Link>
          <Link href="/programs">
            <Button variant="outline" size="lg" className="button-glow">
              <Users className="mr-2 h-5 w-5" />
              Explore Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 