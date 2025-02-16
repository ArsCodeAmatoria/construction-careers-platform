import { Shield, Cable, Zap } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

export const courseContent: CourseModule[] = [
  {
    title: "Safety & Fundamentals",
    items: [
      "High voltage safety",
      "Fall protection",
      "Rescue techniques",
      "PPE requirements"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />
  },
  {
    title: "Technical Skills",
    items: [
      "Pole climbing techniques",
      "Equipment operation",
      "Line installation",
      "Transformer systems"
    ],
    icon: <Cable className="h-12 w-12 text-cyan-500" />
  },
  {
    title: "Advanced Systems",
    items: [
      "High voltage distribution",
      "Underground systems",
      "Storm response",
      "System maintenance"
    ],
    icon: <Zap className="h-12 w-12 text-yellow-500" />
  }
]

export const details: ProgramDetails = {
  duration: "30 weeks",
  schedule: "Full-time training",
  location: "BC Lower Mainland",
  certification: "Power Line Technician Certification",
  prerequisites: [
    "High school diploma or equivalent",
    "Physical fitness requirement",
    "No fear of heights",
    "Class 3 driver's license"
  ]
} 