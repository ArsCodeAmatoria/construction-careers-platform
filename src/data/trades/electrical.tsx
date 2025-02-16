import { Shield, Zap, Wrench } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Electrical safety protocols",
      "PPE requirements",
      "Lock-out procedures",
      "Arc flash protection"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Circuit installation",
      "Wiring methods",
      "Code compliance",
      "Testing procedures"
    ],
    icon: <Zap className="h-12 w-12 text-yellow-500" />
  },
  {
    title: "Advanced Systems",
    items: [
      "Control systems",
      "Industrial automation",
      "Power distribution",
      "Troubleshooting"
    ],
    icon: <Wrench className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "40 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Electrical Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Math & physics fundamentals",
    "Color vision requirements",
    "Safety orientation completion"
  ]
} 