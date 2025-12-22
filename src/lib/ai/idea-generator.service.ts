// src/lib/ai/idea-generator.service.ts
import { z } from 'zod'
import { groq } from './groq.client'

interface GenerateIdeasParams {
	holidayType: string
	category: string
	budget?: number
	numOfIdeas: string
}

export const IdeaResponseSchema = z.object({
	title: z.string(),
	ideas: z.array(
		z.object({
			title: z.string(),
			description: z.string(),
		})
	),
})

export type IdeaResponse = z.infer<typeof IdeaResponseSchema>
export async function generateIdeas(
	params: GenerateIdeasParams
): Promise<IdeaResponse> {
	const { holidayType, category, budget, numOfIdeas } = params

	const prompt = `
You are an assistant that generates holiday ideas.

Return ONLY valid JSON.
Do NOT include explanations, markdown or comments.
Do NOT wrap the response in backticks.

JSON format:
{
  "title": string,
  "ideas": {
    "title": string,
    "description": string
  }[]
}

Holiday: ${holidayType}
Category: ${category}
Number of ideas: ${numOfIdeas}
Budget: ${budget ?? 'Any'}
`

	const response = await groq.chat.completions.create({
		model: 'llama-3.1-8b-instant',
		messages: [{ role: 'user', content: prompt }],
		temperature: 0.8,
	})

	const content = response.choices[0]?.message?.content

	if (!content) {
		throw new Error('AI returned empty response')
	}

	let parsed: unknown

	try {
		parsed = JSON.parse(content)
	} catch {
		throw new Error('AI returned invalid JSON')
	}

	const validated = IdeaResponseSchema.safeParse(parsed)

	if (!validated.success) {
		throw new Error('AI response does not match schema')
	}

	return validated.data
}
