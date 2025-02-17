import { ProgramLayout } from "@/components/academy/program-layout"

export default function HeavyEquipmentPage() {
  return (
    <ProgramLayout
      title="Heavy Equipment Programs"
      description="Master the operation of essential construction equipment. Our comprehensive training programs prepare you for safe and efficient operation of excavators, bulldozers, loaders, and other heavy machinery."
      duration="4-8 weeks"
      certification="ITA Certified"
      features={[
        "Hands-on equipment operation training",
        "Safety certification included",
        "Load handling and transportation",
        "Site preparation and grading",
        "Equipment maintenance procedures",
        "GPS and machine control systems",
        "Environmental protection practices"
      ]}
      modules={[
        {
          title: "Equipment Fundamentals",
          description: "Learn essential heavy equipment operation principles.",
          topics: [
            "Equipment types and applications",
            "Pre-operation inspections",
            "Basic maintenance procedures",
            "Safety protocols",
            "Site assessment skills"
          ]
        },
        {
          title: "Excavator Operations",
          description: "Master excavator control and earthmoving techniques.",
          topics: [
            "Trenching and excavation",
            "Grade checking and control",
            "Slope work and benching",
            "Utility location awareness",
            "Load placement and handling"
          ]
        },
        {
          title: "Loader Operations",
          description: "Develop expertise in loader operation and material handling.",
          topics: [
            "Material loading techniques",
            "Stockpile management",
            "Truck loading procedures",
            "Site cleanup operations",
            "Attachment utilization"
          ]
        },
        {
          title: "Advanced Skills",
          description: "Learn specialized techniques and technology integration.",
          topics: [
            "GPS machine control",
            "3D grade control systems",
            "Complex site preparation",
            "Production techniques",
            "Equipment coordination"
          ]
        }
      ]}
    />
  )
} 