import { Shield, Flame, Wrench } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Confined space safety",
      "High temperature work",
      "PPE requirements",
      "Fall protection"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Vessel fabrication",
      "Welding techniques",
      "Blueprint reading",
      "Material testing"
    ],
    icon: <Flame className="h-12 w-12 text-rose-500" />
  },
  {
    title: "Advanced Systems",
    items: [
      "Pressure systems",
      "Quality control",
      "System testing",
      "Maintenance procedures"
    ],
    icon: <Wrench className="h-12 w-12 text-blue-500" />
  }
]

export const details: ProgramDetails = {
  duration: "36 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Boilermaker Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Physical stamina",
    "Mechanical aptitude",
    "Safety orientation completion"
  ]
} 