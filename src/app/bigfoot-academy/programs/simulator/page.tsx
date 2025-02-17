import { ProgramLayout } from "@/components/academy/program-layout"

export default function SimulatorTrainingPage() {
  return (
    <ProgramLayout
      title="Simulator Training Programs"
      description="Advanced simulator training for crane and heavy equipment operators. Our state-of-the-art simulators provide a safe, controlled environment for skill development and operator assessment."
      duration="Flexible"
      certification="Various Available"
      features={[
        "Real-world scenario training",
        "Risk-free learning environment",
        "Performance tracking and assessment",
        "Multiple equipment types available",
        "Individual and corporate training",
        "Injury recovery assessment",
        "Operator competency verification",
        "Custom training programs"
      ]}
      modules={[
        {
          title: "Crane Simulation",
          description: "Comprehensive crane operation training in a virtual environment.",
          topics: [
            "Mobile and Crawler Crane",
            "Tower Crane Operations",
            "Boom Truck Training",
            "Luffing Tower Crane",
            "Multiple crane coordination"
          ]
        },
        {
          title: "Heavy Equipment",
          description: "Virtual training for various heavy construction equipment.",
          topics: [
            "Excavator Operations",
            "Wheel Loader Training",
            "Dozer Operations",
            "Backhoe Training",
            "Articulated Dump Truck"
          ]
        },
        {
          title: "Operator Assessment",
          description: "Comprehensive evaluation of operator skills and capabilities.",
          topics: [
            "Initial competency assessment",
            "Progress tracking",
            "Injury recovery evaluation",
            "Performance documentation",
            "Skills verification"
          ]
        },
        {
          title: "Custom Programs",
          description: "Tailored training programs for specific needs.",
          topics: [
            "Corporate training packages",
            "Individual skill development",
            "Certification preparation",
            "Refresher training",
            "Advanced operations"
          ]
        }
      ]}
    />
  )
} 