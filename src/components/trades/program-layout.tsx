import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedContainer } from '@/components/ui/animated-container'
import Link from "next/link"
import { Clock, Building, CheckCircle, Award, Calendar, Book } from "lucide-react"
import { CourseModule, ProgramDetails } from "@/types/trades"

interface ProgramLayoutProps {
  title: string
  description: string
  courseContent: CourseModule[]
  details: ProgramDetails
  certifications: string[]
}

export function ProgramLayout({
  title,
  description,
  courseContent,
  details,
  certifications
}: ProgramLayoutProps) {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          {description}
        </p>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{details.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            <span>{details.location}</span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Course Content
        </h2>
        <AnimatedContainer className="grid gap-6 md:grid-cols-3" stagger={0.1}>
          {courseContent.map((module, index) => (
            <Card key={module.title} delay={index * 0.1}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {module.icon}
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Prerequisites
        </h2>
        <AnimatedContainer className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto" stagger={0.08}>
          {details.prerequisites.map((prereq, index) => (
            <Card 
              key={prereq}
              delay={index * 0.08}
              hover={false}
              className="p-4"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium">{prereq}</span>
              </div>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Certifications Included
        </h2>
        <AnimatedContainer className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto" stagger={0.08}>
          {certifications.map((cert, index) => (
            <Card 
              key={cert}
              delay={index * 0.08}
              hover={false}
              className="p-4"
            >
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Start Your Career
        </h2>
        <p className="text-lg text-muted-foreground">
          Begin your journey to becoming a certified professional
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto button-glow pulse-glow">
              <Calendar className="mr-2 h-5 w-5" />
              View Schedule
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto button-glow">
              <Book className="mr-2 h-5 w-5" />
              Program Guide
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 