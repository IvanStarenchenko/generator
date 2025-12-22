import { GiStarsStack } from 'react-icons/gi'

export function Top() {
	return (
		<div
			className='flex items-center gap-x-2.5 px-6
				py-3
				rounded-full
				shadow-md
				transition
				hover:opacity-90
				hover:shadow-lg
				w-fit
				text-grey-400
				cursor-pointer'
		>
			<span>
				<GiStarsStack color={'#AB50FF'} size={21} />
			</span>
			AI-Powered Creativity
		</div>
	)
}
