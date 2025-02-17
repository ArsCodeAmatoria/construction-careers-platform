import { ProgramLayout } from "@/components/academy/program-layout"

export default function RiggerCertificationsPage() {
  return (
    <ProgramLayout
      title="Rigger Certifications"
      description="Essential rigging and hoisting skills certification programs from basic to advanced levels. Our comprehensive training prepares you for safe and efficient rigging operations in construction and industrial settings."
      duration="1-2 weeks"
      certification="Level 1 & 2 Certified"
      features={[
        "Comprehensive rigging techniques",
        "Load weight calculations",
        "Sling angle and tension principles",
        "Hardware selection and inspection",
        "Complex rigging configurations",
        "Critical lift planning",
        "Industry-standard documentation",
        "Hands-on practical training"
      ]}
      modules={[
        {
          title: "Level 1 Rigger Certification",
          description: "Fundamental rigging principles and practices.",
          topics: [
            "Basic rigging principles",
            "Sling and hardware types",
            "Load weight estimation",
            "Center of gravity determination",
            "Safe working load limits"
          ]
        },
        {
          title: "Level 2 Advanced Rigging",
          description: "Complex rigging operations and specialized techniques.",
          topics: [
            "Multiple crane lifts",
            "Advanced load calculations",
            "Critical lift planning",
            "Complex hardware systems",
            "Load turning procedures"
          ]
        },
        {
          title: "Civil Rigging Training",
          description: "Specialized rigging for civil construction projects.",
          topics: [
            "Concrete element rigging",
            "Steel structure handling",
            "Underground component lifting",
            "Site-specific requirements",
            "Project coordination"
          ]
        },
        {
          title: "Specialized Applications",
          description: "Advanced techniques for specific industries.",
          topics: [
            "Load turning and drifting",
            "Marine rigging applications",
            "Industrial plant operations",
            "High-angle rigging",
            "Custom lifting solutions"
          ]
        }
      ]}
    />
  )
} 