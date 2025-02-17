import { ProgramLayout } from "@/components/academy/program-layout"

export default function SafetyProgramsPage() {
  return (
    <ProgramLayout
      title="Safety Certification Programs"
      description="Comprehensive safety training programs designed to meet WorkSafeBC requirements and industry standards. Our certifications prepare you for safe operations in construction and industrial environments."
      duration="1-5 days"
      certification="WorkSafeBC Compliant"
      features={[
        "Fall protection certification",
        "Confined space entry training",
        "WHMIS certification",
        "First aid certification",
        "Aerial work platform training",
        "Traffic control certification",
        "Lock-out/tag-out procedures"
      ]}
      modules={[
        {
          title: "Fall Protection",
          description: "Learn essential fall prevention and protection techniques.",
          topics: [
            "Fall protection equipment inspection",
            "Proper harness fitting and use",
            "Anchor point selection",
            "Rescue planning",
            "Equipment maintenance"
          ]
        },
        {
          title: "Confined Space",
          description: "Master safe confined space entry and rescue procedures.",
          topics: [
            "Hazard assessment",
            "Air quality monitoring",
            "Entry procedures",
            "Emergency response",
            "Ventilation requirements"
          ]
        },
        {
          title: "First Aid",
          description: "Develop emergency response and first aid skills.",
          topics: [
            "CPR and AED use",
            "Wound management",
            "Emergency response",
            "Patient assessment",
            "Documentation requirements"
          ]
        },
        {
          title: "Workplace Safety",
          description: "Comprehensive workplace safety training.",
          topics: [
            "WHMIS certification",
            "PPE requirements",
            "Safety documentation",
            "Hazard communication",
            "Emergency procedures"
          ]
        }
      ]}
    />
  )
} 