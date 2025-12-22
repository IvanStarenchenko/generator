import { GiStarsStack } from 'react-icons/gi'

export function Button() {
	return (
		<button className='btn-primary flex items-center gap-x-2.5'>
			Start creating{' '}
			<span>
				<GiStarsStack size={21} />
			</span>{' '}
		</button>
	)
}
