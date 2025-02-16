import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/lineworker"
import { commonCertifications } from "@/data/trades-programs"

export default function LineworkerPage() {
  return (
    <ProgramLayout
      title="Power Line Technician Program"
      description="Specialize in electrical power line installation and maintenance"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 