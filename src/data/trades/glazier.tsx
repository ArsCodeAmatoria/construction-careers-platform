import { Shield, Boxes, Ruler } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Height safety",
      "Glass handling",
      "PPE requirements",
      "Site safety protocols"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Glass installation",
      "Curtain wall systems",
      "Window systems",
      "Measurement techniques"
    ],
    icon: <Boxes className="h-12 w-12 text-sky-500" />
  },
  {
    title: "Advanced Installation",
    items: [
      "Storefront systems",
      "Specialty glazing",
      "Sealant application",
      "Quality inspection"
    ],
    icon: <Ruler className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "30 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Glazier Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Physical stamina",
    "No fear of heights",
    "Safety orientation completion"
  ]
} 