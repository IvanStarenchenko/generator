'use server'

import type { TCreatingForm } from '@/components/mainPage/generator/creating/creatingForm'
import { generateIdeas } from '@/lib/ai/idea-generator.service'

export async function generateIdeasAction(data: TCreatingForm) {
	return await generateIdeas(
		data as unknown as Parameters<typeof generateIdeas>[0]
	)
}
