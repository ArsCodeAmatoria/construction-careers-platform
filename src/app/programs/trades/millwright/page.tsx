import { ProgramLayout } from "@/components/trades/program-layout"
import { courseContent, details } from "@/data/trades/millwright"
import { commonCertifications } from "@/data/trades-programs"

export default function MillwrightPage() {
  return (
    <ProgramLayout
      title="Industrial Mechanic (Millwright) Program"
      description="Expert in industrial machinery installation and maintenance"
      courseContent={courseContent}
      details={details}
      certifications={commonCertifications}
    />
  )
} 