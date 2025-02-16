import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/heavy-duty-mechanic"
import { commonCertifications } from "@/data/trades-programs"

export default function HeavyDutyMechanicPage() {
  return (
    <ProgramLayout
      title="Heavy Duty Equipment Technician Program"
      description="Maintain and repair heavy construction equipment"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 