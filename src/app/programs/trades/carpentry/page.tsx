import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/carpentry"
import { commonCertifications } from "@/data/trades-programs"

export default function CarpentryPage() {
  return (
    <ProgramLayout
      title="Carpentry Program"
      description="Master the fundamentals of construction carpentry"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 