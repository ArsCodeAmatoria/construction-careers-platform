import { ProgramLayout } from "@/components/academy/program-layout"

export default function HoistOperatorPage() {
  return (
    <ProgramLayout
      title="Hoist Operator Training"
      description="Comprehensive 3-day construction hoist operator training program. Learn to safely and efficiently operate construction hoists while meeting all industry certification requirements."
      duration="3 days"
      certification="Industry Certified"
      features={[
        "Comprehensive safety training",
        "Hands-on equipment operation",
        "Emergency procedures",
        "Load handling techniques",
        "Equipment inspection protocols",
        "Industry best practices",
        "Certification preparation",
        "Maintenance awareness"
      ]}
      modules={[
        {
          title: "Safety Fundamentals",
          description: "Essential safety protocols and regulations for hoist operation.",
          topics: [
            "WorkSafeBC requirements",
            "Personal protective equipment",
            "Site safety procedures",
            "Emergency protocols",
            "Communication systems"
          ]
        },
        {
          title: "Equipment Operation",
          description: "Core operational skills and techniques.",
          topics: [
            "Pre-operational inspection",
            "Start-up procedures",
            "Load handling operations",
            "Speed control techniques",
            "Shutdown procedures"
          ]
        },
        {
          title: "Advanced Operations",
          description: "Complex operational scenarios and situations.",
          topics: [
            "Multiple floor operations",
            "Personnel transport",
            "Material handling",
            "Weather considerations",
            "Night operations"
          ]
        },
        {
          title: "Maintenance & Inspection",
          description: "Equipment care and maintenance procedures.",
          topics: [
            "Daily inspections",
            "Maintenance schedules",
            "Troubleshooting basics",
            "Documentation requirements",
            "Service coordination"
          ]
        }
      ]}
    />
  )
} 