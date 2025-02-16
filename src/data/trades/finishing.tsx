import { Shield, Paintbrush, Ruler } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Workplace safety",
      "Material handling",
      "PPE requirements",
      "Environmental protection"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Drywall installation",
      "Taping and finishing",
      "Surface preparation",
      "Painting techniques"
    ],
    icon: <Paintbrush className="h-12 w-12 text-purple-500" />
  },
  {
    title: "Advanced Finishing",
    items: [
      "Texture applications",
      "Specialty finishes",
      "Quality control",
      "Project planning"
    ],
    icon: <Ruler className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "24 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Finishing Trades Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Color vision requirements",
    "Physical stamina",
    "Safety orientation completion"
  ]
} 