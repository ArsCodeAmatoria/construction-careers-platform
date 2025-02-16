import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/electrical"
import { commonCertifications } from "@/data/trades-programs"

export default function ElectricalPage() {
  return (
    <ProgramLayout
      title="Electrical Program"
      description="Master electrical systems installation and maintenance"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 