import { Shield, Wrench, Cog } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Equipment safety",
      "Lock-out procedures",
      "PPE requirements",
      "Environmental protocols"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Diesel engines",
      "Hydraulic systems",
      "Power trains",
      "Electrical systems"
    ],
    icon: <Wrench className="h-12 w-12 text-amber-500" />
  },
  {
    title: "Advanced Systems",
    items: [
      "Electronic diagnostics",
      "Preventive maintenance",
      "System troubleshooting",
      "Equipment testing"
    ],
    icon: <Cog className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "40 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Heavy Duty Equipment Technician",
  prerequisites: [
    "High school diploma or equivalent",
    "Mechanical aptitude",
    "Physical capability",
    "Safety orientation completion"
  ]
} 