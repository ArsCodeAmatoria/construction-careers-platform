import { Shield, Building, Ruler } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Fall protection",
      "High-rise safety",
      "PPE requirements",
      "Emergency procedures"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Structural steel erection",
      "Reinforcing steel",
      "Rigging and hoisting",
      "Welding basics"
    ],
    icon: <Building className="h-12 w-12 text-slate-500" />
  },
  {
    title: "Advanced Construction",
    items: [
      "Blueprint reading",
      "Layout and planning",
      "Post-tensioning",
      "Quality control"
    ],
    icon: <Ruler className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "36 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Ironworker Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Physical strength and stamina",
    "No fear of heights",
    "Safety orientation completion"
  ]
} 