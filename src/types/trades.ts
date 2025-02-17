import { ReactElement } from 'react'

export interface TradeProgram {
  title: string
  description: string
  features: string[]
  icon: ReactElement
  href: string
}

export interface CourseModule {
  title: string
  items: string[]
  icon: ReactElement
}

export interface ProgramDetails {
  duration: string
  schedule: string
  location: string
  certification: string
  prerequisites: string[]
}

export interface Trade {
  title: string
  description: string
  features: string[]
  icon: ReactElement
  href: string
}

export interface TradeGroup {
  title: string
  description: string
  trades: Trade[]
} 