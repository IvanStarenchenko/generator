'use client'
import { generateIdeasAction } from '@/app/actions/generate-ideas.action'
import { IdeaResponse } from '@/lib/ai/idea-generator.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GiStarsStack } from 'react-icons/gi'
import { z } from 'zod'
import { Response } from './response'
const schema = z.object({
	holidayType: z.enum([
		'Christmas',
		'New Year',
		'Easter',
		'Halloween',
		'Birthday',
		'Wedding',
		'Anniversary',
		'General Celebration',
	]),
	category: z.enum([
		'Gift Ideas',
		'Decorations',
		'Recipes & Food',
		'Activities',
		'Travel Ideas',
		'Party Planning',
		'Greetings & Messages',
	]),
	budget: z.string().min(0).optional(),
	numOfIdeas: z.enum(['3 ideas', '5 ideas', '8 ideas', '10 ideas']),
})

export type TCreatingForm = z.infer<typeof schema>
export function CreatingForm() {
	const [ideas, setIdeas] = useState<IdeaResponse | null>(null)

	const { register, handleSubmit } = useForm<TCreatingForm>({
		resolver: zodResolver(schema),
		defaultValues: {
			holidayType: 'Christmas',
			category: 'Gift Ideas',
			budget: '',
			numOfIdeas: '5 ideas',
		},
	})
	const onSubmit = async (data: TCreatingForm) => {
		const result = await generateIdeasAction(data)
		setIdeas(result)
		console.log('Generated Ideas:', result)
	}

	return (
		<div>
			<div
				className='
      rounded-3xl p-10
     	bg-linear-to-br from-[#F4F7FF] via-white to-[#FFF7E8]
      shadow-[0_20px_60px_rgba(124,58,237,0.15)]
    '
			>
				<form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-col gap-2'>
						<label className='text-sm font-medium text-[#1F2937]'>
							Holiday Type
						</label>
						<select {...register('holidayType')} className='input'>
							<option>Christmas</option>
							<option>New Year</option>
							<option>Easter</option>
							<option>Halloween</option>
							<option>Birthday</option>
							<option>Wedding</option>
							<option>Anniversary</option>
							<option>General Celebration</option>
						</select>
					</div>

					<div className='flex flex-col gap-2'>
						<label className='text-sm font-medium text-[#1F2937]'>
							Category
						</label>
						<select {...register('category')} className='input'>
							<option value='' disabled>
								Select a category
							</option>
							<option>Gift Ideas</option>
							<option>Party Planning</option>
							<option>Decorations</option>
							<option>Recipes & Food</option>
							<option>Activities</option>
							<option>Travel Ideas</option>
							<option>Greetings & Messages</option>
						</select>
					</div>

					<div className='flex flex-col gap-2'>
						<label className='text-sm font-medium text-[#1F2937]'>
							Budget (optional)
						</label>
						<input
							{...register('budget')}
							placeholder='e.g., $50, Under $100, No budget'
							className='input'
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<label className='text-sm font-medium text-[#1F2937]'>
							Number of Ideas
						</label>
						<select {...register('numOfIdeas')} className='input'>
							<option>3 ideas</option>
							<option>5 ideas</option>
							<option>8 ideas</option>
							<option>10 ideas</option>
						</select>
					</div>

					<button
						type='submit'
						className='
            mt-4 h-13
            rounded-full
            bg-linear-to-r from-[#3B82F6] to-[#A855F7]
            text-white font-medium
            flex items-center justify-center gap-2
            shadow-[0_12px_30px_rgba(168,85,247,0.35)]
            hover:scale-[1.02] transition
          '
					>
						<GiStarsStack /> Generate Ideas
					</button>
				</form>
			</div>
			{ideas && <Response ideas={ideas} />}
		</div>
	)
}
