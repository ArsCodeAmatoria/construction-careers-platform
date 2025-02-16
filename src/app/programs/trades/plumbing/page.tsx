import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/plumbing"
import { commonCertifications } from "@/data/trades-programs"

export default function PlumbingPage() {
  return (
    <ProgramLayout
      title="Plumbing Program"
      description="Develop expertise in plumbing systems"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 