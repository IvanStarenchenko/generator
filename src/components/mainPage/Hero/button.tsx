'use client'

import { GiStarsStack } from 'react-icons/gi'

export function Button() {
	return (
		<button
			className='btn-primary flex items-center gap-x-2.5'
			onClick={() => {
				document
					.getElementById('creating')
					?.scrollIntoView({ behavior: 'smooth' })
			}}
		>
			Start creating
			<GiStarsStack size={21} />
		</button>
	)
}
