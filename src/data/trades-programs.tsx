import { Hammer } from "lucide-react"
import { TradeProgram } from "@/types/trades"

export const tradesPrograms: TradeProgram[] = [
  {
    title: "Carpentry",
    description: "Master fundamental carpentry skills",
    features: [
      "Residential and commercial construction",
      "Blueprint reading",
      "Safety certifications",
      "Tool mastery"
    ],
    icon: <Hammer className="h-12 w-12 text-orange-500" />,
    href: "/programs/trades/carpentry"
  },
  // ... other trades
]

export const commonCertifications = [
  "Red Seal Certification",
  "WHMIS",
  "First Aid Level 1",
  "Fall Protection",
  "Construction Safety Training"
] 