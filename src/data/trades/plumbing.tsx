import { Shield, Droplets, Wrench } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "Plumbing safety protocols",
      "PPE requirements",
      "Gas safety",
      "Confined space safety"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Pipe fitting techniques",
      "Drainage systems",
      "Venting systems",
      "Water distribution"
    ],
    icon: <Droplets className="h-12 w-12 text-blue-500" />
  },
  {
    title: "Advanced Systems",
    items: [
      "Commercial plumbing",
      "Hot water systems",
      "Code compliance",
      "System testing"
    ],
    icon: <Wrench className="h-12 w-12 text-green-500" />
  }
]

export const details: ProgramDetails = {
  duration: "36 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Red Seal Plumbing Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Physical capability",
    "Manual dexterity",
    "Safety orientation completion"
  ]
} 