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
			source: z.string().url().nullable(),
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
		Do NOT include explanations, markdown, comments or backticks.

		VERY IMPORTANT RULES:
		- Provide a source link ONLY if you are confident the page exists.
		- If you are not sure the exact page exists, set "source" to null.
		- Do NOT invent or guess URLs.
		- Prefer well-known, authoritative domains only:
			wikipedia.org, official tourism websites, national parks, tripadvisor.com, booking.com.

		JSON format:
		{
			"title": string,
			"ideas": {
				"title": string,
				"description": string,
				"source": string | null
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
