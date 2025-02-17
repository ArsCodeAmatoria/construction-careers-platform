import { ProgramLayout } from "@/components/academy/program-layout"

export default function CraneOperatorPage() {
  return (
    <ProgramLayout
      title="Crane Operator Programs"
      description="Comprehensive crane operator training from Bigfoot Crane Academy. Our programs cover tower cranes, mobile cranes, boom trucks, and overhead cranes, preparing you for industry certification and successful career advancement."
      duration="2-16 weeks"
      certification="Red Seal & ITA"
      features={[
        "Programs for all crane types and skill levels",
        "Red Seal certification preparation",
        "Hands-on practical training",
        "Safety certification included",
        "Load chart interpretation",
        "Rigging fundamentals",
        "Industry-leading instructors"
      ]}
      modules={[
        {
          title: "Tower Crane Program",
          description: "Master high-rise construction crane operations.",
          topics: [
            "16-week comprehensive training",
            "Red Seal certification path",
            "Complex lift planning",
            "High-rise construction expertise",
            "Advanced safety protocols"
          ]
        },
        {
          title: "Mobile Crane Program",
          description: "Learn hydraulic crane operations and transportation.",
          topics: [
            "12-week intensive training",
            "Class 3 license included",
            "Hydraulic system operations",
            "Site setup and planning",
            "Multiple crane coordination"
          ]
        },
        {
          title: "Boom Truck Program",
          description: "Specialized training for boom truck operations.",
          topics: [
            "8-week certification program",
            "Folding boom operations",
            "Truck positioning skills",
            "Load chart calculations",
            "Safety and stabilization"
          ]
        },
        {
          title: "Bridge/Overhead Program",
          description: "Industrial crane operations training.",
          topics: [
            "2-week focused training",
            "Indoor/outdoor operations",
            "Precise load control",
            "Multiple crane coordination",
            "Fulford certification"
          ]
        }
      ]}
    />
  )
} 