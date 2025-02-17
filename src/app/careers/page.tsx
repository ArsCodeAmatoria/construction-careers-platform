'use client'

import { careers as careerData } from '@/data/careers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Users, 
  GraduationCap, 
  Shield,
  MapPin,
  Brain,
  Truck,
  Leaf,
  Briefcase,
  BookOpen,
  Building2,
  Construction as CraneIcon,
  ShieldCheck,
  Award,
  ClipboardCheck
} from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'

interface CategoryIcon {
  [key: string]: React.ReactNode
}

interface Category {
  id: string
  label: string
  icon: React.ReactElement
}

interface Career {
  id: string
  category: string
  title: string
  description: string
  certification: string[]
  salary?: string
  bcSpecific?: {
    companies: string[]
    union: string
    regulations: string[]
  }
  trainingProvider?: string
  trainingUrl?: string
}

interface SafetyRole {
  id: string
  title: string
  category: string
  description: string
  requirements: string[]
  responsibilities: string[]
  icon: React.ReactElement
  href: string
}

const categoryIcons: CategoryIcon = {
  'trades': <Users className="h-5 w-5" />,
  'crane-operations': <CraneIcon className="h-5 w-5" />,
  'technology': <Brain className="h-5 w-5" />,
  'heavy-equipment': <Truck className="h-5 w-5" />,
  'sustainability': <Leaf className="h-5 w-5" />,
  'management': <Briefcase className="h-5 w-5" />,
  'apprenticeship': <Users className="h-5 w-5" />,
  'entry-level': <GraduationCap className="h-5 w-5" />,
  'training': <BookOpen className="h-5 w-5" />,
  'safety': <Shield className="h-5 w-5" />
}

const categories: Category[] = [
  { id: 'all', label: 'All Careers', icon: <Building2 className="h-5 w-5" /> },
  { id: 'trades', label: 'Trades', icon: <Users className="h-5 w-5" /> },
  { id: 'crane-operations', label: 'Crane Operations', icon: <CraneIcon className="h-5 w-5" /> },
  { id: 'heavy-equipment', label: 'Heavy Equipment', icon: <Truck className="h-5 w-5" /> },
  { id: 'technology', label: 'Tech Careers', icon: <Brain className="h-5 w-5" /> },
  { id: 'sustainability', label: 'Green Building', icon: <Leaf className="h-5 w-5" /> },
  { id: 'management', label: 'Management', icon: <Briefcase className="h-5 w-5" /> },
  { id: 'apprenticeship', label: 'Apprenticeships', icon: <Users className="h-5 w-5" /> },
  { id: 'entry-level', label: 'Entry Level', icon: <GraduationCap className="h-5 w-5" /> },
  { id: 'training', label: 'Training', icon: <BookOpen className="h-5 w-5" /> },
  { id: 'safety', label: 'Safety Careers', icon: <Shield className="h-5 w-5" /> }
]

const safetyRoles: SafetyRole[] = [
  {
    id: 'cso',
    title: "Construction Safety Officer (CSO)",
    category: 'safety',
    description: "Lead and implement site safety programs",
    requirements: [
      "CSO certification",
      "3+ years construction experience",
      "OHS regulations knowledge",
      "First aid certification"
    ],
    responsibilities: [
      "Site safety inspections",
      "Safety program management",
      "Incident investigation",
      "Safety training delivery"
    ],
    icon: <Shield className="h-12 w-12 text-red-500" />,
    href: "/careers/safety/cso"
  },
  {
    id: 'ncso',
    title: "National Construction Safety Officer (NCSO)",
    category: 'safety',
    description: "Advanced safety leadership and program development",
    requirements: [
      "NCSO designation",
      "5+ years safety experience",
      "Advanced OHS training",
      "Leadership experience"
    ],
    responsibilities: [
      "Safety program development",
      "Regulatory compliance",
      "Risk management",
      "Team leadership"
    ],
    icon: <ShieldCheck className="h-12 w-12 text-blue-500" />,
    href: "/careers/safety/ncso"
  },
  {
    id: 'crsp',
    title: "Canadian Registered Safety Professional (CRSP)",
    category: 'safety',
    description: "Senior safety management and strategic planning",
    requirements: [
      "CRSP certification",
      "Bachelor's degree preferred",
      "7+ years safety experience",
      "Project management skills"
    ],
    responsibilities: [
      "Safety strategy development",
      "Program evaluation",
      "Corporate safety leadership",
      "Stakeholder management"
    ],
    icon: <Award className="h-12 w-12 text-green-500" />,
    href: "/careers/safety/crsp"
  },
  {
    id: 'coordinator',
    title: "Safety Coordinator",
    category: 'safety',
    description: "Support safety program implementation",
    requirements: [
      "Safety certification",
      "2+ years construction experience",
      "Computer proficiency",
      "Communication skills"
    ],
    responsibilities: [
      "Safety documentation",
      "Training coordination",
      "Inspection assistance",
      "Reporting"
    ],
    icon: <ClipboardCheck className="h-12 w-12 text-orange-500" />,
    href: "/careers/safety/coordinator"
  }
]

const updatedCareers = [
  ...careerData,
  ...safetyRoles.map(role => ({
    id: role.id,
    category: role.category,
    title: role.title,
    description: role.description,
    certification: [],
    bcSpecific: {
      companies: [],
      union: "Construction Safety Officers Association",
      regulations: []
    },
    trainingProvider: "BCIT",
    trainingUrl: "https://www.bcit.ca/construction"
  }))
] as Career[]

function CareerSearch() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentCategory = searchParams.get('category') || 'all'

  const filteredCareers = currentCategory === 'all' 
    ? updatedCareers 
    : updatedCareers.filter(career => career.category === currentCategory)

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={currentCategory === category.id ? "default" : "outline"}
          className="flex items-center gap-2"
          onClick={() => {
            const params = new URLSearchParams(searchParams)
            if (category.id === 'all') {
              params.delete('category')
            } else {
              params.set('category', category.id)
            }
            router.push(`/careers?${params.toString()}`)
          }}
        >
          {category.icon}
          {category.label}
        </Button>
      ))}
    </div>
  )
}

export default function CareersPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Construction Careers
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore career opportunities in modern construction
        </p>
      </section>

      <Suspense fallback={<div>Loading search...</div>}>
        <CareerSearch />
      </Suspense>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {updatedCareers.map((career) => (
          <div 
            key={career.id}
            className="rounded-lg border border-border hover:border-foreground/50 transition-colors"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                {categoryIcons[career.category] || <Building2 className="h-5 w-5" />}
                <h3 className="text-xl font-semibold">{career.title}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground">{career.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">BC Salary Range:</div>
                <div className="text-sm text-muted-foreground">{career.salary}</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Required Certifications:</div>
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                  {career.certification.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>

              {career.bcSpecific && (
                <div className="space-y-2">
                  {career.bcSpecific.companies && (
                    <div>
                      <div className="text-sm font-medium">BC Companies:</div>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        {career.bcSpecific.companies.map((company) => (
                          <li key={company}>{company}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {career.bcSpecific.union && (
                    <div>
                      <div className="text-sm font-medium">BC Union:</div>
                      <div className="text-sm text-muted-foreground">{career.bcSpecific.union}</div>
                    </div>
                  )}
                  {career.bcSpecific.regulations && (
                    <div>
                      <div className="text-sm font-medium">BC Regulations:</div>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        {career.bcSpecific.regulations.map((reg) => (
                          <li key={reg}>{reg}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {career.trainingProvider && (
                <div className="pt-4">
                  <Link href={career.trainingUrl || '#'}>
                    <Button className="w-full">
                      Training at {career.trainingProvider}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 