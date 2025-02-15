'use client'

import { careers } from '@/data/careers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HardHat, Crane, Brain, MapPin, Building2, Truck } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'

const categoryIcons = {
  'trades': <HardHat className="h-5 w-5" />,
  'crane-operations': <Crane className="h-5 w-5" />,
  'technology': <Brain className="h-5 w-5" />,
  'heavy-equipment': <Truck className="h-5 w-5" />
}

const categories = [
  { id: 'all', label: 'All Careers', icon: <Building2 className="h-5 w-5" /> },
  { id: 'trades', label: 'Trades', icon: <HardHat className="h-5 w-5" /> },
  { id: 'crane-operations', label: 'Crane Operations', icon: <Crane className="h-5 w-5" /> },
  { id: 'heavy-equipment', label: 'Heavy Equipment', icon: <Truck className="h-5 w-5" /> },
  { id: 'technology', label: 'Tech Careers', icon: <Brain className="h-5 w-5" /> },
]

export default function CareersPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentCategory = searchParams.get('category') || 'all'

  const filteredCareers = currentCategory === 'all' 
    ? careers 
    : careers.filter(career => career.category === currentCategory)

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">BC Construction Careers</h1>
        <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
          Explore opportunities in British Columbia's thriving construction industry. 
          From Vancouver's urban developments to northern BC's resource projects, start your journey with comprehensive training and certification.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>British Columbia, Canada</span>
        </div>
      </section>

      {/* Category Tabs */}
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCareers.map((career) => (
          <div 
            key={career.id}
            className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                {categoryIcons[career.category]}
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