import { IdeaResponse } from '@/lib/ai/idea-generator.service'

interface Props {
	ideas: IdeaResponse
}

export function Response({ ideas }: Props) {
	return (
		<div className=' p-8'>
			{ideas && (
				<section className='max-w-7xl mx-auto mt-14'>
					<h2 className='text-center text-4xl font-bold tracking-tight mb-4'>
						<span className='text-gray-800'>{ideas.title}</span>
					</h2>
					<p className='text-center text-gray-500 mb-12'>
						Here are your personalized suggestions — get inspired!
					</p>

					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{ideas.ideas.map((idea, index) => (
							<div
								key={index}
								className='flex flex-col bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1'
							>
								<div className='w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-8'>
									<svg
										className='w-7 h-7 text-violet-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
										/>
									</svg>
								</div>

								<h3 className='text-[22px] font-bold text-gray-900 leading-tight mb-4'>
									{idea.title}
								</h3>

								<p className='text-gray-500 leading-relaxed text-[15px] mb-8 flex-grow'>
									{idea.description}
								</p>

								<div className='pt-6 border-t border-gray-50 flex items-center text-violet-600 font-semibold text-[15px] cursor-pointer group/link'>
									Learn more
									<svg
										className='w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M9 5l7 7-7 7'
										/>
									</svg>
								</div>
							</div>
						))}
					</div>

					<div className='mt-16 flex justify-center'>
						<button className='px-8 py-4 bg-white border-2 border-violet-100 text-violet-600 font-bold rounded-full hover:bg-violet-50 transition-colors shadow-sm'>
							Generate More Ideas
						</button>
					</div>
				</section>
			)}
		</div>
	)
}
