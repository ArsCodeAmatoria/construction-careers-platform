import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ShieldCheck, 
  FileText, 
  HardHat, 
  Users, 
  Target, 
  Book,
  FileCheck,
  Building,
  Briefcase,
  CheckCircle
} from "lucide-react"

const responsibilities = [
  {
    title: "Safety Program Development",
    items: [
      "Design comprehensive safety management systems",
      "Establish safety policies and procedures",
      "Develop emergency response plans",
      "Create safety training programs"
    ],
    icon: <FileText className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Leadership & Supervision",
    items: [
      "Lead safety team operations",
      "Mentor junior safety personnel",
      "Coordinate with project management",
      "Manage safety initiatives"
    ],
    icon: <Users className="h-12 w-12 text-green-500" />
  },
  {
    title: "Compliance Management",
    items: [
      "Ensure regulatory compliance",
      "Conduct compliance audits",
      "Manage safety certifications",
      "Liaison with regulatory bodies"
    ],
    icon: <CheckCircle className="h-12 w-12 text-purple-500" />
  }
]

const qualifications = [
  {
    title: "Required Certifications",
    items: [
      "NCSO designation",
      "Advanced First Aid",
      "Auditor certification",
      "Leadership training"
    ],
    icon: <ShieldCheck className="h-12 w-12 text-red-500" />
  },
  {
    title: "Experience Requirements",
    items: [
      "5+ years safety experience",
      "Construction industry knowledge",
      "Project management experience",
      "Training delivery expertise"
    ],
    icon: <Briefcase className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Advanced Knowledge",
    items: [
      "OHS legislation",
      "Risk management",
      "Incident investigation",
      "Safety management systems"
    ],
    icon: <Book className="h-12 w-12 text-blue-500" />
  }
]

const benefits = [
  {
    title: "Career Growth",
    description: "Opportunities for advancement to senior safety roles",
    icon: <Target className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Industry Recognition",
    description: "Nationally recognized safety certification",
    icon: <ShieldCheck className="h-6 w-6 text-green-500" />
  },
  {
    title: "Professional Development",
    description: "Ongoing training and certification opportunities",
    icon: <Book className="h-6 w-6 text-purple-500" />
  }
]

export default function NCSOPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          National Construction Safety Officer (NCSO)
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Lead advanced safety initiatives and develop comprehensive safety programs
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
          Qualifications
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
          Career Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="p-6 border border-border rounded-lg"
            >
              <div className="flex flex-col items-center space-y-3">
                {benefit.icon}
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Advance Your Safety Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Take your construction safety career to the next level with NCSO certification
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <FileCheck className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </Link>
          <Link href="/programs/safety/ncso">
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-5 w-5" />
              NCSO Program Details
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 