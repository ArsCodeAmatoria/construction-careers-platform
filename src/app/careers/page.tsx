'use client'

import { careers as careerData } from '@/data/careers'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedContainer } from '@/components/ui/animated-container'
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
  ClipboardCheck,
  CheckCircle,
  DollarSign,
  Building
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
    icon: <Shield className="h-12 w-12 text-red-500 float" />,
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
    icon: <ShieldCheck className="h-12 w-12 text-blue-500 float" />,
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
    icon: <Award className="h-12 w-12 text-green-500 float" />,
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
    icon: <ClipboardCheck className="h-12 w-12 text-orange-500 float" />,
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
    <div className="space-y-8">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={currentCategory === category.id ? "default" : "outline"}
            className="flex items-center gap-2 button-glow"
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

      <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {filteredCareers.map((career, index) => {
          const safetyRole = safetyRoles.find(role => role.id === career.id)
          
          if (safetyRole) {
            return (
              <Link key={career.id} href={safetyRole.href} className="group">
                <Card delay={index * 0.08}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {safetyRole.icon}
                    </div>
                    <CardTitle className="text-xl">{career.title}</CardTitle>
                    <CardDescription>{career.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        Requirements
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {safetyRole.requirements.slice(0, 3).map((req) => (
                          <li key={req} className="flex items-center">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          }

          return (
            <Card key={career.id} delay={index * 0.08}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  {categoryIcons[career.category] || <Building2 className="h-5 w-5" />}
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                </div>
                <CardDescription>{career.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {career.salary && (
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <div>
                      <div className="text-sm font-medium">BC Salary Range</div>
                      <div className="text-sm text-muted-foreground">{career.salary}</div>
                    </div>
                  </div>
                )}

                {career.certification && career.certification.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-500" />
                      Required Certifications
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {career.certification.slice(0, 3).map((cert) => (
                        <li key={cert} className="flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {career.bcSpecific?.union && (
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Building className="h-4 w-4 text-orange-500" />
                    <div>
                      <div className="text-sm font-medium">BC Union</div>
                      <div className="text-sm text-muted-foreground">{career.bcSpecific.union}</div>
                    </div>
                  </div>
                )}

                {career.trainingProvider && (
                  <div className="pt-2">
                    <Link href={career.trainingUrl || '#'}>
                      <Button className="w-full button-glow">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        Training at {career.trainingProvider}
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </AnimatedContainer>
    </div>
  )
}

export default function CareersPage() {
  return (
    <div className="space-y-8 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Construction Careers
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Explore diverse career opportunities in British Columbia's thriving construction industry. 
          From traditional trades to cutting-edge technology roles, find your path to success.
        </p>
      </section>

      <Suspense fallback={<div>Loading search...</div>}>
        <CareerSearch />
      </Suspense>
    </div>
  )
} 