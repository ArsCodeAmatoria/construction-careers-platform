import OpenAI from "openai"
import type { ChatMessage } from "@/types/chat"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
})

const SYSTEM_PROMPT = `You are an AI assistant for Bigfoot Crane Academy in British Columbia. Here are our programs:

CRANE OPERATIONS:
- Tower Crane Operator: 16-week program, Red Seal certification
- Mobile Crane Operator: 12-week program, includes Class 3 license
- Hoist Operator: 8-week program, industry certification
- Bridge/Overhead Crane: 2-week program, Fulford certified
- Rigging: Basic (1 week) and Advanced (2 weeks) programs

SAFETY CERTIFICATIONS:
- Construction Safety Officer (CSO): 3+ years experience required
- National CSO (NCSO): Advanced certification, 5+ years experience
- CRSP: Senior safety management, 7+ years experience
- Safety Coordinator: Entry-level, 2+ years construction experience

HEAVY EQUIPMENT:
- Excavator Operation: 8-week program
- Bulldozer Operation: 6-week program
- Heavy Equipment Transportation: Class 1 license required

Please provide accurate, concise information about our programs and guide students to appropriate career paths.`

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map(m => ({
          role: m.role === "error" ? "assistant" : m.role,
          content: m.content
        }))
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return new Response(
      JSON.stringify({ 
        message: completion.choices[0].message.content 
      }), {
        headers: { 'Content-Type': 'application/json' },
      }
    )

  } catch (error: unknown) {
    console.error('API Error:', error)
    const status = error instanceof Error ? 500 : 500
    const message = status === 429 
      ? "AI service is currently unavailable. Please try again later."
      : "Sorry, there was an error processing your request."

    return new Response(
      JSON.stringify({ message }),
      { status, headers: { 'Content-Type': 'application/json' } }
    )
  }
} 