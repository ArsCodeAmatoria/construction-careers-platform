export interface TradeProgram {
  title: string
  description: string
  features: string[]
  icon: JSX.Element
  href: string
}

export interface CourseModule {
  title: string
  items: string[]
  icon: JSX.Element
}

export interface ProgramDetails {
  duration: string
  schedule: string
  location: string
  certification: string
  prerequisites: string[]
} 