import { GiStarsStack } from 'react-icons/gi'

export function Logo() {
	return (
		<div className='flex items-center gap-x-2 '>
			<span className='gradient-logo '>
				<GiStarsStack
					color='#fff'
					size={21}
					className='relative left-[50%] transform -translate-x-1/2 translate-y-1.75'
				/>
			</span>{' '}
			<span className='text-gradient font-semibold text-xl'>Festive Ideas</span>
		</div>
	)
}
