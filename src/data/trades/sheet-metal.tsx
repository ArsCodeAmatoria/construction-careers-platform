import { Shield, Ruler, Wrench } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Workshop safety",
      "Material handling",
      "PPE requirements",
      "Tool safety"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Pattern development",
      "Metal fabrication",
      "Precision measurement",
      "Blueprint reading"
    ],
    icon: <Ruler className="h-12 w-12 text-zinc-500" />
  },
  {
    title: "Advanced Systems",
    items: [
      "HVAC systems",
      "Ventilation design",
      "Installation techniques",
      "Quality control"
    ],
    icon: <Wrench className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "34 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Sheet Metal Worker Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Math & geometry skills",
    "Physical dexterity",
    "Safety orientation completion"
  ]
} 