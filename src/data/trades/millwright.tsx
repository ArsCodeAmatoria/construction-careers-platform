import { Shield, Cog, Wrench } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Industrial safety protocols",
      "Lock-out procedures",
      "PPE requirements",
      "Confined space safety"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Mechanical systems",
      "Hydraulics & pneumatics",
      "Precision measurement",
      "Equipment alignment"
    ],
    icon: <Cog className="h-12 w-12 text-indigo-500" />
  },
  {
    title: "Advanced Maintenance",
    items: [
      "Preventive maintenance",
      "Troubleshooting",
      "System optimization",
      "Equipment installation"
    ],
    icon: <Wrench className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "36 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Industrial Mechanic (Millwright) Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Math & physics fundamentals",
    "Mechanical aptitude",
    "Safety orientation completion"
  ]
} 