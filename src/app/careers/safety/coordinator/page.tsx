import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield, 
  FileCheck,
  Briefcase,
  Users
} from "lucide-react"

const responsibilities = [
  {
    title: "Safety Documentation",
    items: [
      "Maintain safety records and logs",
      "Process incident reports",
      "Track safety metrics",
      "Prepare safety reports"
    ],
    icon: <FileText className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Training Support",
    items: [
      "Assist with safety orientations",
      "Schedule training sessions",
      "Maintain training records",
      "Support toolbox talks"
    ],
    icon: <Book className="h-12 w-12 text-green-500" />
  },
  {
    title: "Field Support",
    items: [
      "Assist with site inspections",
      "Monitor safety compliance",
      "Support hazard assessments",
      "Track corrective actions"
    ],
    icon: <HardHat className="h-12 w-12 text-orange-500" />
  }
]

const qualifications = [
  {
    title: "Required Certifications",
    items: [
      "Safety certification",
      "First Aid Level 1",
      "WHMIS certification",
      "Construction safety training"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Experience",
    items: [
      "2+ years construction experience",
      "Safety program support",
      "Documentation management",
      "Team coordination"
    ],
    icon: <Briefcase className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Key Skills",
    items: [
      "Computer proficiency",
      "Communication skills",
      "Attention to detail",
      "Organization abilities"
    ],
    icon: <CheckSquare className="h-12 w-12 text-green-500" />
  }
]

const growth = [
  {
    title: "Career Development",
    description: "Path to CSO and NCSO certifications",
    icon: <Target className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Skill Enhancement",
    description: "Ongoing safety training and certifications",
    icon: <Book className="h-6 w-6 text-green-500" />
  },
  {
    title: "Leadership Growth",
    description: "Progress to senior safety roles",
    icon: <Users className="h-6 w-6 text-purple-500" />
  }
]

export default function SafetyCoordinatorPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Safety Coordinator
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Support construction safety programs and ensure workplace compliance
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Key Responsibilities
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
          Requirements
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
          Growth Opportunities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {growth.map((opportunity) => (
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
          Start Your Safety Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your journey in construction safety with hands-on experience
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <FileCheck className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </Link>
          <Link href="/programs/safety/coordinator">
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-5 w-5" />
              Training Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 