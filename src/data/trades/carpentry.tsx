import { Shield, Hammer, Ruler } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Construction site safety",
      "Tool safety and maintenance",
      "PPE requirements",
      "Fall protection"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Blueprint reading",
      "Layout and measuring",
      "Framing techniques",
      "Finishing work"
    ],
    icon: <Hammer className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Advanced Construction",
    items: [
      "Complex structures",
      "Stair construction",
      "Roof systems",
      "Interior finishing"
    ],
    icon: <Ruler className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "32 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Carpentry Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Physical stamina",
    "Hand-eye coordination",
    "Safety orientation completion"
  ]
} 