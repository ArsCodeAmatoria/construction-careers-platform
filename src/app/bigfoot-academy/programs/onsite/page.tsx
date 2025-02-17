import { ProgramLayout } from "@/components/academy/program-layout"

export default function OnSiteTrainingPage() {
  return (
    <ProgramLayout
      title="On-Site Training Programs"
      description="Customized training programs delivered at your location. Our expert instructors bring comprehensive crane operations, rigging, and safety courses directly to your workplace."
      duration="Flexible"
      certification="Various Available"
      features={[
        "Training at your facility",
        "Customized program content",
        "Equipment-specific training",
        "Group training options",
        "Flexible scheduling",
        "Real workplace scenarios",
        "Immediate skill application",
        "Cost-effective solutions"
      ]}
      modules={[
        {
          title: "Supervisor Training",
          description: "Crane and rigging awareness for supervisory personnel.",
          topics: [
            "Risk assessment and management",
            "Regulatory compliance",
            "Lift planning oversight",
            "Safety protocol implementation",
            "Emergency response coordination"
          ]
        },
        {
          title: "Overhead Crane & Rigging",
          description: "Comprehensive training for overhead crane operations.",
          topics: [
            "Safe operating procedures",
            "Load chart interpretation",
            "Rigging techniques",
            "Equipment inspection",
            "Workplace-specific applications"
          ]
        },
        {
          title: "Construction Hoist",
          description: "Site-specific hoist operation training.",
          topics: [
            "Operational procedures",
            "Safety requirements",
            "Emergency protocols",
            "Maintenance checks",
            "Site integration practices"
          ]
        },
        {
          title: "Assessment Preparation",
          description: "Targeted training for certification assessments.",
          topics: [
            "Theory review sessions",
            "Practical skills preparation",
            "Documentation requirements",
            "Assessment strategies",
            "Industry standards review"
          ]
        }
      ]}
    />
  )
} 