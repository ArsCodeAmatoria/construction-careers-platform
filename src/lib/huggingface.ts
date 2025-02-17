const HUGGING_FACE_URL = "https://api-inference.huggingface.co/models"

export async function queryLlama(messages: any[]) {
  try {
    const formattedInput = formatMessages(messages)
    console.log('Sending to Llama:', formattedInput) // Debug log

    const response = await fetch(
      `${HUGGING_FACE_URL}/${process.env.HUGGING_FACE_MODEL}`,
      {
        headers: {
          "Authorization": `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: formattedInput,
          parameters: {
            max_length: 1000,
            temperature: 0.7,
            top_p: 0.95,
            do_sample: true,
            return_full_text: false
          }
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Llama API Error Response:', errorText)
      throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`)
    }

    const result = await response.json()
    console.log('Llama Response:', result) // Debug log

    // Extract the generated text from the response
    const generatedText = Array.isArray(result) ? result[0]?.generated_text : result.generated_text
    return generatedText || "I'm sorry, I couldn't generate a response. Please try again."

  } catch (error) {
    console.error('Llama API Error:', error)
    throw error
  }
}

// Format OpenAI messages for Llama 2
function formatMessages(messages: any[]) {
  // Add our domain knowledge as context
  const context = `
You are an AI assistant for Bigfoot Crane Academy in British Columbia. Use this information to help students:

Available Programs:

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

ADDITIONAL INFORMATION:
- Location: BC Lower Mainland
- Funding: WorkBC grants available
- Job Placement: Industry partnerships
- Prerequisites: Safety orientation required
- Housing: Accommodation assistance available

Please provide accurate, concise information about our programs and guide students to appropriate career paths.

${messages
  .filter(msg => msg.role !== 'error')
  .map(msg => `${msg.role === 'user' ? 'Human: ' : 'Assistant: '}${msg.content}`)
  .join('\n')}
Assistant:`

  return context.trim()
} 