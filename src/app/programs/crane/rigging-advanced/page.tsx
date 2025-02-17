import { 
  Shield,
  Clock,
  CheckCircle,
  Container,
  Calculator,
  Building2,
  FileCheck
} from "lucide-react"

const courseContent = [
  {
    title: "Advanced Safety",
    items: [
      "Critical lift planning",
      "Multi-crane operations",
      "High-risk environments",
      "Emergency procedures"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Complex Operations",
    items: [
      "Advanced load calculations",
      "Multi-point lifting",
      "Engineered lifts",
      "Specialized equipment"
    ],
    icon: <Container className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Technical Mastery",
    items: [
      "Advanced rigging techniques",
      "Lift plan development",
      "Load testing procedures",
      "Documentation requirements"
    ],
    icon: <Calculator className="h-12 w-12 text-green-500" />
  }
]

const modules = [
  {
    title: "Advanced Safety",
    icon: <Shield className="h-6 w-6 text-red-500" />,
    items: [
      "Critical lift planning",
      "Multi-crane operations",
      "High-risk environments",
      "Emergency procedures"
    ]
  },
  {
    title: "Complex Operations",
    icon: <Building2 className="h-6 w-6 text-blue-500" />,
    items: [
      "Advanced load calculations",
      "Multi-point lifting",
      "Engineered lifts",
      "Specialized equipment"
    ]
  },
  {
    title: "Technical Requirements",
    icon: <FileCheck className="h-6 w-6 text-green-500" />,
    items: [
      "Advanced rigging techniques",
      "Lift plan development",
      "Load testing procedures",
      "Documentation requirements"
    ]
  }
]

const programDetails = {
  duration: "1 day (8 hours)",
  schedule: "Monday to Friday, 8:00 AM - 4:00 PM",
  location: "Abbotsford Campus",
  certification: "Advanced Rigging Certification",
  prerequisites: [
    "Basic Rigging Certification",
    "Minimum 2 years rigging experience",
    "Valid Basic First Aid",
    "Physical capability to perform rigging tasks"
  ]
}

export default function RiggingAdvancedPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Advanced Rigging
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Fulford certified advanced rigging and lift planning
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>8 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span>Expert Level</span>
          </div>
        </div>
      </section>

      {/* Course Content section */}
      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Advanced Course Content
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {courseContent.map((module) => (
            <div 
              key={module.title}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {module.icon}
                <h3 className="text-xl font-semibold">{module.title}</h3>
                <ul className="w-full space-y-2 text-sm">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Details section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">Program Details</h2>
        <dl className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <dt className="font-medium">Duration</dt>
            <dd className="text-muted-foreground">{programDetails.duration}</dd>
          </div>
          <div className="space-y-2">
            <dt className="font-medium">Schedule</dt>
            <dd className="text-muted-foreground">{programDetails.schedule}</dd>
          </div>
          <div className="space-y-2">
            <dt className="font-medium">Location</dt>
            <dd className="text-muted-foreground">{programDetails.location}</dd>
          </div>
          <div className="space-y-2">
            <dt className="font-medium">Certification</dt>
            <dd className="text-muted-foreground">{programDetails.certification}</dd>
          </div>
          <div className="space-y-2 md:col-span-2">
            <dt className="font-medium">Prerequisites</dt>
            <dd>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {programDetails.prerequisites.map((prereq) => (
                  <li key={prereq}>{prereq}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </section>

      {/* Program Highlights section */}
      {/* Call to Action section */}
    </div>
  )
} 