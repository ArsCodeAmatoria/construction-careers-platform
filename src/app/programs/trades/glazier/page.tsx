import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/glazier"
import { commonCertifications } from "@/data/trades-programs"

export default function GlazierPage() {
  return (
    <ProgramLayout
      title="Glazier Program"
      description="Expert installation of glass and architectural metals"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 