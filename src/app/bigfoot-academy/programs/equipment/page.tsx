import { ProgramLayout } from "@/components/academy/program-layout"

export default function EquipmentTrainingPage() {
  return (
    <ProgramLayout
      title="Equipment Training Programs"
      description="IVES certified training for various construction equipment. Our comprehensive programs ensure operators are trained to the highest safety standards and industry requirements."
      duration="1-3 days"
      certification="IVES Certified"
      features={[
        "IVES certified instructors",
        "On-site training available",
        "Hands-on practical evaluation",
        "Theory and practical training",
        "Equipment-specific certification",
        "Safety protocols and procedures",
        "Compliance with WorkSafeBC",
        "Group training options"
      ]}
      modules={[
        {
          title: "Forklift Training",
          description: "Comprehensive forklift operator certification program.",
          topics: [
            "Pre-operation inspection",
            "Load handling techniques",
            "Stability and capacity",
            "Workplace hazards",
            "Safe operating procedures"
          ]
        },
        {
          title: "Telehandler Operation",
          description: "Specialized training for telehandler/variable reach equipment.",
          topics: [
            "Equipment familiarization",
            "Load charts and capacity",
            "Attachment usage",
            "Terrain assessment",
            "Safe lifting procedures"
          ]
        },
        {
          title: "Aerial Work Platforms",
          description: "Training for scissor lifts and boom-supported platforms.",
          topics: [
            "Fall protection requirements",
            "Platform limitations",
            "Emergency procedures",
            "Workplace inspection",
            "Setup and stabilization"
          ]
        },
        {
          title: "Safety and Compliance",
          description: "Essential safety training for equipment operation.",
          topics: [
            "WorkSafeBC regulations",
            "Site-specific requirements",
            "Documentation procedures",
            "Emergency protocols",
            "Maintenance requirements"
          ]
        }
      ]}
    />
  )
} 