'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Database, 
  Server, 
  FileText, 
  Archive, 
  Search, 
  Filter,
  Settings,
  CheckCircle,
  ArrowLeft,
  Building,
  Clock,
  Shield,
  Globe,
  BarChart3,
  Tags,
  Link2,
  Download,
  Upload,
  HardDrive,
  Layers
} from "lucide-react"

const dataManagementFeatures = [
  {
    title: "Centralized Asset Database",
    description: "Comprehensive digital asset repository and management system",
    features: [
      "Unified asset information storage",
      "Manufacturer data integration",
      "Performance specification tracking",
      "Maintenance history logging",
      "Asset lifecycle management"
    ],
    specifications: {
      capacity: "Unlimited asset storage",
      integration: "Real-time manufacturer feeds",
      access: "Role-based data access"
    },
    icon: <Database className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Document Management",
    description: "Intelligent document control and version management",
    features: [
      "Automated document linking",
      "Version control workflows",
      "Digital approval processes",
      "Cross-reference tracking",
      "Metadata management"
    ],
    specifications: {
      formats: "All major file formats",
      versioning: "Unlimited version history",
      search: "AI-powered content search"
    },
    icon: <FileText className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Analytics & Reporting",
    description: "Advanced analytics and automated reporting capabilities",
    features: [
      "Real-time project dashboards",
      "Custom report generation",
      "Performance analytics",
      "Cost tracking and analysis",
      "Predictive insights"
    ],
    specifications: {
      analytics: "Real-time data processing",
      reports: "Custom report templates",
      visualization: "Interactive dashboards"
    },
    icon: <BarChart3 className="h-12 w-12 text-purple-500 float" />
  },
  {
    title: "Integration Platform",
    description: "Seamless integration with enterprise systems",
    features: [
      "ERP system connectivity",
      "API-based integrations",
      "Data synchronization",
      "Workflow automation",
      "Cloud platform support"
    ],
    specifications: {
      apis: "RESTful API architecture",
      sync: "Real-time data sync",
      platforms: "Multi-cloud support"
    },
    icon: <Link2 className="h-12 w-12 text-orange-500 float" />
  }
]

const dataWorkflows = [
  {
    title: "Data Collection",
    description: "Automated data capture and validation",
    capabilities: [
      "IoT sensor integration",
      "Mobile data collection",
      "Barcode/QR scanning",
      "Photo documentation"
    ],
    benefits: [
      "95% reduction in manual entry",
      "Real-time data validation",
      "Enhanced data accuracy"
    ],
    icon: <Upload className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Data Processing",
    description: "Intelligent data processing and enrichment",
    capabilities: [
      "Automated data cleansing",
      "AI-powered classification",
      "Data enrichment services",
      "Quality assurance checks"
    ],
    benefits: [
      "99% data accuracy",
      "Automated quality control",
      "Enhanced data insights"
    ],
    icon: <Server className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Data Distribution",
    description: "Controlled data access and distribution",
    capabilities: [
      "Role-based access control",
      "Automated data delivery",
      "Mobile synchronization",
      "Offline data access"
    ],
    benefits: [
      "Secure data access",
      "Improved field productivity",
      "Real-time information delivery"
    ],
    icon: <Download className="h-8 w-8 text-purple-500 float" />
  }
]

const storageOptions = [
  {
    title: "Cloud Storage",
    description: "Scalable cloud-based data storage",
    features: [
      "Unlimited storage capacity",
      "Global accessibility",
      "Automatic backups",
      "Disaster recovery"
    ],
    icon: <Globe className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Hybrid Storage",
    description: "Combined cloud and on-premises storage",
    features: [
      "Local data control",
      "Cloud synchronization",
      "Performance optimization",
      "Compliance support"
    ],
    icon: <HardDrive className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Archive Management",
    description: "Long-term data archiving and retrieval",
    features: [
      "Automated archiving policies",
      "Compliance documentation",
      "Historical data access",
      "Legal hold management"
    ],
    icon: <Archive className="h-8 w-8 text-purple-500 float" />
  }
]

const applications = [
  {
    title: "Asset Management",
    description: "Complete building asset lifecycle management",
    benefits: [
      "Comprehensive asset tracking",
      "Maintenance optimization",
      "Performance monitoring",
      "Cost analysis and budgeting"
    ],
    metrics: "60% reduction in maintenance costs",
    icon: <Tags className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Compliance Reporting",
    description: "Automated regulatory compliance and reporting",
    benefits: [
      "Automated compliance checks",
      "Regulatory report generation",
      "Audit trail maintenance",
      "Standards verification"
    ],
    metrics: "90% faster compliance reporting",
    icon: <Shield className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Performance Analytics",
    description: "Data-driven performance optimization",
    benefits: [
      "Real-time performance tracking",
      "Predictive maintenance alerts",
      "Energy efficiency analysis",
      "ROI optimization"
    ],
    metrics: "40% improvement in operational efficiency",
    icon: <BarChart3 className="h-8 w-8 text-purple-500 float" />
  }
]

const searchCapabilities = [
  {
    title: "Advanced Search",
    features: ["Full-text search", "Metadata filtering", "Visual search", "AI-powered suggestions"],
    description: "Comprehensive search across all data types"
  },
  {
    title: "Smart Filtering",
    features: ["Dynamic filters", "Saved search queries", "Faceted navigation", "Custom views"],
    description: "Intelligent data filtering and organization"
  },
  {
    title: "Data Discovery",
    features: ["Automated tagging", "Relationship mapping", "Pattern recognition", "Anomaly detection"],
    description: "AI-powered data discovery and insights"
  },
  {
    title: "Export Tools",
    features: ["Custom report exports", "API data access", "Bulk data export", "Scheduled exports"],
    description: "Flexible data export and integration"
  }
]

const benefits = [
  "99% improvement in data accuracy",
  "80% reduction in data search time",
  "Real-time asset tracking",
  "Automated compliance reporting",
  "Enhanced decision-making capabilities",
  "Comprehensive audit trails"
]

export default function DataManagementPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Link href="/technologies/digital-construction/bim">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to BIM Integration
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Data Management
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Comprehensive construction data management platform providing centralized asset information, intelligent document control, and advanced analytics for data-driven decision making.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Data Management Features
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {dataManagementFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">Specifications:</h4>
                    <div className="space-y-1 text-xs">
                      {Object.entries(feature.specifications).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium capitalize">{key}:</span> {value}
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
          Data Workflows
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {dataWorkflows.map((workflow, index) => (
            <Card 
              key={workflow.title}
              delay={index * 0.08}
              className="text-center h-full"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {workflow.icon}
                  <h3 className="font-semibold">{workflow.title}</h3>
                  <p className="text-sm text-muted-foreground">{workflow.description}</p>
                  
                  <div className="w-full space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Capabilities:</h4>
                      <ul className="space-y-1 text-xs">
                        {workflow.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center">
                            <CheckCircle className="h-2 w-2 mr-2 text-green-500 flex-shrink-0" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-xs">
                        {workflow.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-primary">
                            <CheckCircle className="h-2 w-2 mr-2 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
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
          Storage Solutions
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {storageOptions.map((storage, index) => (
            <Card 
              key={storage.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {storage.icon}
                  <h3 className="font-semibold">{storage.title}</h3>
                  <p className="text-sm text-muted-foreground">{storage.description}</p>
                  <ul className="space-y-1 text-sm">
                    {storage.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
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
          Application Areas
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {applications.map((app, index) => (
            <Card 
              key={app.title}
              delay={index * 0.08}
              className="h-full"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {app.icon}
                  <h3 className="font-semibold">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                  <ul className="space-y-1 text-sm">
                    {app.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/10 p-2 rounded text-center">
                    <span className="text-sm font-medium text-primary">{app.metrics}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Search & Discovery
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {searchCapabilities.map((capability, index) => (
            <Card 
              key={capability.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-3">
                  <Search className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-sm">{capability.title}</h3>
                  <p className="text-xs text-muted-foreground">{capability.description}</p>
                  <ul className="space-y-1 text-xs">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-2 w-2 mr-1 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Key Benefits
        </h2>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Optimize Your Data Management
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your construction data into actionable insights with comprehensive data management and analytics
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Database className="mr-2 h-5 w-5" />
              Start Managing Data
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" size="lg" className="button-glow">
              <Building className="mr-2 h-5 w-5" />
              View Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 