import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/finishing"
import { commonCertifications } from "@/data/trades-programs"

export default function FinishingPage() {
  return (
    <ProgramLayout
      title="Finishing Trades Program"
      description="Expert training in construction finishing work"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 