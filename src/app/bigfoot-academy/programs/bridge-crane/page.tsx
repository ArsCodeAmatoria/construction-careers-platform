import { ProgramLayout } from "@/components/academy/program-layout"

export default function BridgeCranePage() {
  return (
    <ProgramLayout
      title="Bridge & Overhead Crane Program"
      description="Learn to safely operate bridge, gantry, and overhead cranes in industrial settings. This program provides comprehensive training in accordance with WorkSafeBC regulations and Fulford certification standards."
      duration="2 weeks"
      certification="Fulford Certified"
      features={[
        "Hands-on training with multiple crane types",
        "Indoor and outdoor crane operations",
        "Load control and precise positioning",
        "Radio and hand signal communication",
        "Emergency response procedures",
        "Equipment inspection and maintenance",
        "WorkSafeBC compliance training"
      ]}
      modules={[
        {
          title: "Safety Fundamentals",
          description: "Learn essential safety protocols for overhead crane operations.",
          topics: [
            "Workplace safety regulations",
            "Hazard identification and control",
            "Personal protective equipment",
            "Emergency stop procedures",
            "Accident prevention techniques"
          ]
        },
        {
          title: "Basic Operations",
          description: "Master fundamental crane control and movement.",
          topics: [
            "Crane controls familiarization",
            "Basic movement patterns",
            "Load attachment methods",
            "Precise load positioning",
            "Speed and control techniques"
          ]
        },
        {
          title: "Advanced Operations",
          description: "Develop skills for complex lifting scenarios.",
          topics: [
            "Multiple crane coordination",
            "Restricted space operation",
            "Critical lift procedures",
            "Tandem lift operations",
            "Specialized attachment usage"
          ]
        },
        {
          title: "Maintenance & Inspection",
          description: "Learn essential equipment care and safety checks.",
          topics: [
            "Pre-operational inspections",
            "Equipment maintenance checks",
            "Wire rope inspection",
            "Hook and attachment inspection",
            "Documentation requirements"
          ]
        }
      ]}
    />
  )
} 