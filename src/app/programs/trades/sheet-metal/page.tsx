import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/sheet-metal"
import { commonCertifications } from "@/data/trades-programs"

export default function SheetMetalPage() {
  return (
    <ProgramLayout
      title="Sheet Metal Worker Program"
      description="Specialize in metal fabrication and HVAC systems"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 