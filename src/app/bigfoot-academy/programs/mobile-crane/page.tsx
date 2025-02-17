import { ProgramLayout } from "@/components/academy/program-layout"

export default function MobileCranePage() {
  return (
    <ProgramLayout
      title="Mobile Crane Operator Program"
      description="Become a certified mobile crane operator with comprehensive training in hydraulic crane operations. Our program includes Class 3 driver's license training and prepares you for Red Seal certification."
      duration="12 weeks"
      certification="Red Seal Certification"
      features={[
        "Class 3 driver's license training included",
        "Hands-on training with various mobile crane types",
        "Load chart interpretation and lift planning",
        "Ground pressure and outrigger setup",
        "Hydraulic systems operation and maintenance",
        "Multiple crane lift coordination",
        "Safety protocols and risk management"
      ]}
      modules={[
        {
          title: "Safety and Fundamentals",
          description: "Learn essential safety protocols and basic crane operations.",
          topics: [
            "Site safety and hazard assessment",
            "Personal protective equipment",
            "Hand signals and communication",
            "Basic rigging principles",
            "Load chart interpretation"
          ]
        },
        {
          title: "Driver Training",
          description: "Prepare for Class 3 driver's license certification.",
          topics: [
            "Pre-trip inspection procedures",
            "Air brake certification",
            "Vehicle control and maneuvering",
            "Road safety regulations",
            "Transportation of equipment"
          ]
        },
        {
          title: "Crane Operations",
          description: "Master mobile crane setup and operation techniques.",
          topics: [
            "Crane setup and positioning",
            "Outrigger placement and ground bearing",
            "Load control and precision lifting",
            "Multiple crane operations",
            "Critical lift planning"
          ]
        },
        {
          title: "Advanced Skills",
          description: "Develop expertise in complex lifting scenarios.",
          topics: [
            "Telescopic boom operation",
            "Lattice boom assembly",
            "Complex lift calculations",
            "Wind load considerations",
            "Emergency procedures"
          ]
        }
      ]}
    />
  )
} 