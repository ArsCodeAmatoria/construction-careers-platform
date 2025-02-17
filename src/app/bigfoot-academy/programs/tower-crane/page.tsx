import { ProgramLayout } from "@/components/academy/program-layout"

export default function TowerCranePage() {
  return (
    <ProgramLayout
      title="Tower Crane Operator Program"
      description="Master the operation of tower cranes for high-rise construction projects. Our comprehensive program combines classroom instruction with hands-on training to prepare you for Red Seal certification."
      duration="16 weeks"
      certification="Red Seal Certification"
      features={[
        "Comprehensive safety training and certification",
        "Hands-on experience with modern tower crane equipment",
        "Load calculation and lift planning",
        "Weather condition assessment",
        "Communication and signaling protocols",
        "Emergency procedures and risk management",
        "Maintenance and inspection procedures"
      ]}
      modules={[
        {
          title: "Safety Fundamentals",
          description: "Master essential safety protocols and regulations for tower crane operations.",
          topics: [
            "Personal protective equipment (PPE)",
            "Site safety requirements",
            "Emergency procedures",
            "Risk assessment and management",
            "Safety documentation and reporting"
          ]
        },
        {
          title: "Crane Operations",
          description: "Learn core operational skills and techniques for tower crane operation.",
          topics: [
            "Pre-operational inspections",
            "Start-up and shutdown procedures",
            "Load charts and capacity calculations",
            "Lift planning and execution",
            "Multiple crane operations"
          ]
        },
        {
          title: "Advanced Skills",
          description: "Develop expertise in complex lifting operations and specialized techniques.",
          topics: [
            "Blind lifts and critical picks",
            "Wind load management",
            "Complex load control",
            "Multiple crane coordination",
            "Night operations"
          ]
        },
        {
          title: "Certification Preparation",
          description: "Prepare for Red Seal certification examinations and assessments.",
          topics: [
            "Theory examination preparation",
            "Practical skills assessment",
            "Documentation requirements",
            "Industry standards review",
            "Final certification requirements"
          ]
        }
      ]}
    />
  )
} 