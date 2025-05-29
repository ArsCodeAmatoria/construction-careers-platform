'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building,
  Users
} from "lucide-react"

const contactMethods = [
  {
    title: "Email Us",
    description: "Send us a message and we'll respond within 24 hours",
    contact: "info@constructioncareers.ca",
    icon: <Mail className="h-8 w-8 text-blue-500 float" />
  },
  {
    title: "Call Us",
    description: "Speak directly with our career advisors",
    contact: "1-800-BUILD-BC",
    icon: <Phone className="h-8 w-8 text-green-500 float" />
  },
  {
    title: "Visit Us",
    description: "Come to our main campus in Vancouver",
    contact: "123 Construction Way, Vancouver, BC",
    icon: <MapPin className="h-8 w-8 text-red-500 float" />
  },
  {
    title: "Office Hours",
    description: "We're here to help during business hours",
    contact: "Monday - Friday: 8AM - 6PM PST",
    icon: <Clock className="h-8 w-8 text-purple-500 float" />
  }
]

const departments = [
  {
    title: "Career Guidance",
    description: "Get personalized advice on construction career paths",
    icon: <Users className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Program Information",
    description: "Learn about our training programs and certifications",
    icon: <Building className="h-6 w-6 text-green-500" />
  },
  {
    title: "Technology Support",
    description: "Get help with digital construction technologies",
    icon: <MessageSquare className="h-6 w-6 text-purple-500" />
  }
]

export default function ContactPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl shimmer-text">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Ready to start your construction career journey? Get in touch with our expert team for personalized guidance and support.
        </p>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <AnimatedContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              delay={index * 0.08}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  {method.icon}
                  <h3 className="font-semibold">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-sm font-medium text-primary">{method.contact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedContainer>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              Send Us a Message
            </h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="text-sm font-medium">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select an area...</option>
                      <option value="trades">Skilled Trades</option>
                      <option value="digital">Digital Construction</option>
                      <option value="safety">Safety Training</option>
                      <option value="leadership">Leadership Programs</option>
                      <option value="crane">Crane Operations</option>
                      <option value="heavy-equipment">Heavy Equipment</option>
                      <option value="green">Green Technologies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tell us about your career goals and how we can help..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full button-glow pulse-glow">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              How We Can Help
            </h2>
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <Card key={dept.title}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      {dept.icon}
                      <div>
                        <h3 className="font-semibold text-sm">{dept.title}</h3>
                        <p className="text-sm text-muted-foreground">{dept.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to responding to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Ready to Build Your Future?
        </h2>
        <p className="text-lg text-muted-foreground">
          Join thousands of successful construction professionals who started their journey with us
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="button-glow">
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 1-800-BUILD-BC
          </Button>
          <Button variant="outline" size="lg" className="button-glow">
            <Building className="mr-2 h-5 w-5" />
            Schedule Campus Visit
          </Button>
        </div>
      </section>
    </div>
  )
} 