import { GiStarsStack } from 'react-icons/gi'

export function Button() {
	return (
		<button className='btn-secondary flex items-center gap-x-2.5 text-[#AF5BF8] text-[14px]'>
			<span>
				<GiStarsStack size={21} color='#AF5BF8' />
			</span>
			AI Generator
		</button>
	)
}
