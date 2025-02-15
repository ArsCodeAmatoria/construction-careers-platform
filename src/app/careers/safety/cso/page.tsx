import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Shield, 
  Clipboard, 
  HardHat, 
  Book, 
  Target, 
  Users,
  FileCheck,
  Megaphone
} from "lucide-react"

const responsibilities = [
  {
    title: "Safety Program Management",
    items: [
      "Develop and implement site safety programs",
      "Conduct regular safety meetings and toolbox talks",
      "Maintain safety documentation and records",
      "Monitor compliance with safety regulations"
    ],
    icon: <Clipboard className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Site Inspections",
    items: [
      "Perform regular site safety inspections",
      "Identify and assess workplace hazards",
      "Recommend corrective actions",
      "Follow up on safety concerns"
    ],
    icon: <HardHat className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Training & Education",
    items: [
      "Deliver safety orientation and training",
      "Develop training materials",
      "Track certification requirements",
      "Promote safety awareness"
    ],
    icon: <Book className="h-12 w-12 text-green-500" />
  }
]

const requirements = [
  {
    title: "Certifications",
    items: [
      "Construction Safety Officer (CSO) certification",
      "First Aid Level 1 or higher",
      "WHMIS certification",
      "Fall protection certification"
    ]
  },
  {
    title: "Experience",
    items: [
      "3+ years construction experience",
      "Safety program implementation",
      "Incident investigation",
      "Risk assessment"
    ]
  },
  {
    title: "Skills",
    items: [
      "Strong communication abilities",
      "Detail-oriented mindset",
      "Leadership capabilities",
      "Computer proficiency"
    ]
  }
]

export default function CSOPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Construction Safety Officer (CSO)
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Lead safety initiatives and ensure workplace compliance in construction projects
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

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Requirements
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {requirements.map((req) => (
            <div 
              key={req.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center">{req.title}</h3>
                <ul className="space-y-2 text-sm">
                  {req.items.map((item) => (
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

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Safety Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Join our team and make a difference in construction safety
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              <FileCheck className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </Link>
          <Link href="/programs/safety">
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-5 w-5" />
              View Training Programs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 