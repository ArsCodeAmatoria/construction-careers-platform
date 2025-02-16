import type { ChatMessage } from "@/types/chat"

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json()
    
    console.log('Request details:', {
      apiKey: process.env.OPENAI_API_KEY ? 'Present' : 'Missing',
      messageCount: messages.length,
      firstMessage: messages[0]?.content.substring(0, 50)
    })

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
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
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error?.message || 'OpenAI API error')
    }

    const data = await response.json()

    return new Response(JSON.stringify({
      content: data.choices[0].message.content
    }), {
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (error: any) {
    console.error('API Error:', {
      message: error.message,
      type: error.type,
      code: error.code,
      param: error.param,
      stack: error.stack
    })

    return new Response(JSON.stringify({
      error: 'OpenAI API Error',
      details: error.message,
      code: error.code
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
} 