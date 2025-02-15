import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Award, 
  FileText, 
  Users, 
  Target, 
  Book,
  FileCheck,
  Building,
  Briefcase,
  ChartBar,
  Globe,
  Lightbulb,
  Shield
} from "lucide-react"

const responsibilities = [
  {
    title: "Strategic Leadership",
    items: [
      "Develop corporate safety strategies",
      "Lead organizational safety initiatives",
      "Establish safety performance metrics",
      "Drive continuous improvement"
    ],
    icon: <Lightbulb className="h-12 w-12 text-yellow-500" />
  },
  {
    title: "Program Management",
    items: [
      "Oversee multiple project safety programs",
      "Manage safety budgets and resources",
      "Direct safety personnel teams",
      "Evaluate program effectiveness"
    ],
    icon: <ChartBar className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Stakeholder Management",
    items: [
      "Advise senior management",
      "Liaise with regulatory bodies",
      "Coordinate with project teams",
      "Engage with industry partners"
    ],
    icon: <Users className="h-12 w-12 text-green-500" />
  }
]

const qualifications = [
  {
    title: "Professional Credentials",
    items: [
      "CRSP designation",
      "Bachelor's degree",
      "Advanced safety certifications",
      "Professional memberships"
    ],
    icon: <Award className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Senior Experience",
    items: [
      "7+ years safety experience",
      "Management experience",
      "Multi-project oversight",
      "Strategic planning"
    ],
    icon: <Briefcase className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Technical Expertise",
    items: [
      "Risk management systems",
      "Safety analytics",
      "Regulatory frameworks",
      "Industry best practices"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  }
]

const opportunities = [
  {
    title: "Executive Leadership",
    description: "Advance to senior safety management positions",
    icon: <Building className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Global Opportunities",
    description: "Access international safety management roles",
    icon: <Globe className="h-6 w-6 text-green-500" />
  },
  {
    title: "Industry Influence",
    description: "Shape safety standards and practices",
    icon: <Target className="h-6 w-6 text-purple-500" />
  }
]

export default function CRSPPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Canadian Registered Safety Professional (CRSP)
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Lead strategic safety initiatives and drive organizational excellence
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Strategic Responsibilities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {responsibilities.map((area) => (
            <div 
              key={area.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {area.icon}
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <ul className="w-full space-y-2 text-sm">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Professional Requirements
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {qualifications.map((qual) => (
            <div 
              key={qual.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {qual.icon}
                <h3 className="text-xl font-semibold">{qual.title}</h3>
                <ul className="w-full space-y-2 text-sm">
                  {qual.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          Career Opportunities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {opportunities.map((opportunity) => (
            <div 
              key={opportunity.title}
              className="p-6 border border-border rounded-lg"
            >
              <div className="flex flex-col items-center space-y-3">
                {opportunity.icon}
                <h3 className="font-semibold">{opportunity.title}</h3>
                <p className="text-sm text-muted-foreground">{opportunity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Elevate Your Safety Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Achieve the highest level of safety professional recognition in Canada
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <FileCheck className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </Link>
          <Link href="/programs/safety/crsp">
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-5 w-5" />
              CRSP Program Details
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 