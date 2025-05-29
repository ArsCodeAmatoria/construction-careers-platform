'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import Link from "next/link"
import { 
  Users, 
  Share2, 
  MessageSquare, 
  GitBranch, 
  Cloud, 
  RotateCcw,
  Settings,
  CheckCircle,
  ArrowLeft,
  Building,
  Clock,
  Shield,
  Globe,
  FileText,
  AlertCircle,
  Eye,
  Lock,
  Workflow
} from "lucide-react"

const collaborationFeatures = [
  {
    title: "Real-Time Collaboration",
    description: "Simultaneous multi-user editing and coordination",
    features: [
      "Live multi-user model editing",
      "Real-time change propagation",
      "Instant conflict resolution",
      "Synchronized project views",
      "Live cursor tracking and user presence"
    ],
    specifications: {
      users: "Unlimited concurrent users",
      latency: "<100ms sync time",
      availability: "99.9% uptime guarantee"
    },
    icon: <Users className="h-12 w-12 text-blue-500 float" />
  },
  {
    title: "Version Control",
    description: "Advanced version management and change tracking",
    features: [
      "Automated version checkpoints",
      "Intelligent merge algorithms",
      "Change history visualization",
      "Branch and merge workflows",
      "Rollback and recovery tools"
    ],
    specifications: {
      history: "Unlimited version history",
      branching: "Advanced branching strategy",
      recovery: "Point-in-time restoration"
    },
    icon: <GitBranch className="h-12 w-12 text-green-500 float" />
  },
  {
    title: "Communication Hub",
    description: "Integrated communication and review tools",
    features: [
      "3D model annotations",
      "Voice and video collaboration",
      "Issue tracking and resolution",
      "Review and approval workflows",
      "Mobile collaboration support"
    ],
    specifications: {
      annotations: "Unlimited 3D markups",
      integration: "Microsoft Teams/Slack",
      mobile: "Full mobile functionality"
    },
    icon: <MessageSquare className="h-12 w-12 text-purple-500 float" />
  },
  {
    title: "Access Control",
    description: "Granular permissions and security management",
    features: [
      "Role-based access control",
      "Project-level permissions",
      "Discipline-specific access",
      "Audit trail logging",
      "Enterprise authentication"
    ],
    specifications: {
      roles: "Custom role definitions",
      security: "Enterprise-grade encryption",
      compliance: "SOX/GDPR compliant"
    },
    icon: <Shield className="h-12 w-12 text-orange-500 float" />
  }
]

const coordinationWorkflows = [
  {
    title: "Design Coordination",
    description: "Multi-discipline design coordination and clash detection",
    capabilities: [
      "Automated clash detection",
      "Cross-discipline coordination",
      "Design review workflows",
      "Issue resolution tracking"
    ],
    benefits: [
      "90% reduction in design conflicts",
      "Faster design iterations",
      "Improved coordination quality"
    ],
    icon: <Workflow className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Change Management",
    description: "Systematic change control and impact analysis",
    capabilities: [
      "Change impact assessment",
      "Approval workflow automation",
      "Cost and schedule analysis",
      "Stakeholder notification"
    ],
    benefits: [
      "70% faster change processing",
      "Better change visibility",
      "Reduced change order disputes"
    ],
    icon: <RotateCcw className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Quality Assurance",
    description: "Automated quality checks and validation",
    capabilities: [
      "Model quality validation",
      "Standard compliance checking",
      "Automated report generation",
      "Performance optimization"
    ],
    benefits: [
      "95% improvement in model quality",
      "Automated compliance verification",
      "Reduced QA time"
    ],
    icon: <CheckCircle className="h-8 w-8 text-purple-500 float" />
  }
]

const platforms = [
  {
    title: "Cloud Collaboration",
    description: "Global accessibility and scalability",
    features: [
      "Global cloud infrastructure",
      "Unlimited storage capacity",
      "Automatic synchronization",
      "Cross-platform compatibility"
    ],
    icon: <Cloud className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Mobile Access",
    description: "Full collaboration on mobile devices",
    features: [
      "Native mobile applications",
      "Offline capability",
      "Field data collection",
      "Real-time updates"
    ],
    icon: <Globe className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Integration APIs",
    description: "Seamless integration with existing tools",
    features: [
      "RESTful API access",
      "Webhook notifications",
      "Third-party integrations",
      "Custom workflow automation"
    ],
    icon: <Settings className="h-8 w-8 text-purple-500 float" />
  }
]

const applications = [
  {
    title: "Large-Scale Projects",
    description: "Complex multi-stakeholder project coordination",
    benefits: [
      "Hundreds of concurrent users",
      "Multi-site coordination",
      "International team management",
      "24/7 global collaboration"
    ],
    metrics: "500+ users supported simultaneously",
    icon: <Building className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Design-Build Teams",
    description: "Integrated design and construction workflows",
    benefits: [
      "Seamless handoff processes",
      "Construction feedback loops",
      "Real-time constructability review",
      "Integrated project delivery"
    ],
    metrics: "60% faster design-to-construction transition",
    icon: <Users className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Remote Collaboration",
    description: "Distributed team coordination and management",
    benefits: [
      "Remote work enablement",
      "Virtual design sessions",
      "Digital review processes",
      "Cloud-based coordination"
    ],
    metrics: "99% remote work efficiency",
    icon: <Globe className="h-8 w-8 text-purple-500 float" />
  }
]

const integrations = [
  {
    title: "Microsoft 365",
    features: ["Teams integration", "SharePoint sync", "Outlook calendar"],
    description: "Complete Microsoft ecosystem integration"
  },
  {
    title: "Autodesk Construction Cloud",
    features: ["Model coordination", "Document management", "Field management"],
    description: "Comprehensive construction platform"
  },
  {
    title: "Procore",
    features: ["Project management", "Field operations", "Financial tracking"],
    description: "Construction management integration"
  },
  {
    title: "Slack",
    features: ["Real-time messaging", "Workflow automation", "File sharing"],
    description: "Team communication platform"
  }
]

const benefits = [
  "95% reduction in coordination errors",
  "70% faster design review cycles",
  "Real-time global collaboration",
  "Automated change management",
  "Enhanced project transparency",
  "Improved stakeholder communication"
]

export default function CollaborationPage() {
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
          Collaboration & Coordination
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Advanced collaboration platform enabling seamless multi-user coordination, real-time communication, and intelligent project management for distributed construction teams.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Collaboration Features
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2" stagger={0.08}>
          {collaborationFeatures.map((feature, index) => (
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
          Coordination Workflows
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {coordinationWorkflows.map((workflow, index) => (
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
          Platform Capabilities
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {platforms.map((platform, index) => (
            <Card 
              key={platform.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  {platform.icon}
                  <h3 className="font-semibold">{platform.title}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                  <ul className="space-y-1 text-sm">
                    {platform.features.map((feature) => (
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
          Application Scenarios
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
          Platform Integrations
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {integrations.map((integration, index) => (
            <Card 
              key={integration.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-3">
                  <Share2 className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-sm">{integration.title}</h3>
                  <p className="text-xs text-muted-foreground">{integration.description}</p>
                  <ul className="space-y-1 text-xs">
                    {integration.features.map((feature) => (
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
          Enhance Team Collaboration
        </h2>
        <p className="text-lg text-muted-foreground">
          Transform your project coordination with advanced collaboration tools and seamless team communication
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button size="lg" className="button-glow pulse-glow">
              <Users className="mr-2 h-5 w-5" />
              Start Collaboration
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