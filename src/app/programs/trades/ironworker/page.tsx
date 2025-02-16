import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/ironworker"
import { commonCertifications } from "@/data/trades-programs"

export default function IronworkerPage() {
  return (
    <ProgramLayout
      title="Ironworker Program"
      description="Master structural steel installation and reinforcing"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 