import OpenAI from "openai"
import type { ChatMessage } from "@/types/chat"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
  baseURL: 'https://api.openai.com/v1',
  defaultHeaders: {
    'OpenAI-Beta': 'project-api-next',
    'OpenAI-Project-Id': process.env.OPENAI_PROJECT_ID
  }
})

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json()
    
    // Log full configuration and request details
    console.log('API Configuration:', {
      apiKeyPresent: !!process.env.OPENAI_API_KEY,
      apiKeyType: process.env.OPENAI_API_KEY?.startsWith('sk-proj-') ? 'project' : 'standard',
      projectIdPresent: !!process.env.OPENAI_PROJECT_ID,
      orgIdPresent: !!process.env.OPENAI_ORG_ID,
      baseURL: process.env.OPENAI_API_BASE_URL,
      messageCount: messages.length
    })

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
            .filter((m): m is Omit<ChatMessage, "id"> => m.role !== "error")
            .map(({ role, content }) => ({ role, content }))
        ]
      })

      return new Response(JSON.stringify({
        content: completion.choices[0].message.content
      }), {
        headers: { 'Content-Type': 'application/json' },
      })

    } catch (openaiError: any) {
      // Log detailed OpenAI error
      console.error('OpenAI API Error:', {
        name: openaiError.name,
        message: openaiError.message,
        status: openaiError.status,
        type: openaiError.type,
        code: openaiError.code,
        param: openaiError.param,
        response: {
          status: openaiError.response?.status,
          statusText: openaiError.response?.statusText,
          data: openaiError.response?.data,
          headers: openaiError.response?.headers
        }
      })

      throw openaiError
    }

  } catch (error: any) {
    // Log general error with full details
    console.error('Request Error:', {
      name: error.name,
      message: error.message,
      status: error.status,
      stack: error.stack?.split('\n'),
      cause: error.cause,
      config: {
        baseURL: openai.baseURL,
        defaultHeaders: openai.defaultHeaders,
        organization: openai.organization
      }
    })

    return new Response(JSON.stringify({
      error: 'OpenAI API Error',
      details: error.message,
      type: error.type,
      code: error.code
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
} 