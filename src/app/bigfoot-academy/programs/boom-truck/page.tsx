import { ProgramLayout } from "@/components/academy/program-layout"

export default function BoomTruckPage() {
  return (
    <ProgramLayout
      title="Boom Truck Operator Program"
      description="Get certified to operate boom trucks and folding boom cranes. This comprehensive program covers both driving and crane operation skills, preparing you for ITA certification."
      duration="8 weeks"
      certification="ITA Certification"
      features={[
        "Combined driving and crane operation training",
        "Folding boom and stiff boom operation",
        "Load chart and capacity calculations",
        "Proper outrigger setup and stabilization",
        "Safe rigging and lifting techniques",
        "Truck positioning and setup",
        "Pre-operational inspections"
      ]}
      modules={[
        {
          title: "Safety and Fundamentals",
          description: "Master essential safety protocols and basic operations.",
          topics: [
            "Workplace safety regulations",
            "Risk assessment procedures",
            "Communication protocols",
            "Basic rigging principles",
            "Equipment inspection requirements"
          ]
        },
        {
          title: "Vehicle Operations",
          description: "Learn proper truck operation and positioning techniques.",
          topics: [
            "Vehicle pre-trip inspections",
            "Truck positioning strategies",
            "Stabilizer and outrigger setup",
            "Site assessment and setup",
            "Transportation regulations"
          ]
        },
        {
          title: "Crane Operations",
          description: "Develop core boom truck operation skills.",
          topics: [
            "Load chart interpretation",
            "Boom extension and angle",
            "Load control techniques",
            "Lift planning and execution",
            "Power line safety"
          ]
        },
        {
          title: "Certification Preparation",
          description: "Prepare for ITA certification requirements.",
          topics: [
            "Theory exam preparation",
            "Practical skills assessment",
            "Load chart calculations",
            "Safety regulations review",
            "Documentation requirements"
          ]
        }
      ]}
    />
  )
} 