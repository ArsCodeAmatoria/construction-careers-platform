import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/boilermaker"
import { commonCertifications } from "@/data/trades-programs"

export default function BoilermakerPage() {
  return (
    <ProgramLayout
      title="Boilermaker Program"
      description="Specialize in pressure vessel construction and repair"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 