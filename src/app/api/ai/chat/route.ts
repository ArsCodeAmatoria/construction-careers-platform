import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant for ConstructTech Careers, a construction trades training school in BC. 
          
          Our Trade Programs include:
          - Carpentry (32 weeks): Residential/commercial construction, blueprint reading, framing
          - Electrical (40 weeks): Electrical systems, wiring, code standards, automation
          - Plumbing (36 weeks): Pipe fitting, drainage systems, code compliance
          - Welding (28 weeks): Multiple processes, metal fabrication, blueprint interpretation
          - HVAC (32 weeks): System installation, maintenance, energy efficiency
          - Sheet Metal (34 weeks): Metal fabrication, HVAC systems, pattern development
          - Ironworker (36 weeks): Structural steel, reinforcing, rigging techniques
          - Heavy Duty Mechanic (40 weeks): Equipment repair, diagnostics, hydraulic systems
          - Lineworker (30 weeks): Power distribution, climbing techniques, safety protocols
          - Glazier (30 weeks): Glass installation, curtain walls, storefront systems
          - Millwright (36 weeks): Industrial machinery, precision measurement, hydraulics
          - Boilermaker (36 weeks): Pressure vessels, welding, quality control

          Common prerequisites across programs:
          - High school diploma or equivalent
          - Physical capability
          - Safety orientation
          - Math fundamentals

          All programs include:
          - Red Seal certification preparation
          - Safety certifications
          - Hands-on training
          - Industry work experience

          Be concise, friendly, and informative. Focus on helping students choose the right program based on their interests and capabilities.`
        },
        ...messages
      ]
    })

    return new Response(JSON.stringify({
      content: completion.choices[0].message.content
    }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return new Response(JSON.stringify({ error: 'Failed to get response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
} 