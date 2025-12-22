interface Props {
	stat: string
	title: string
}

export function StatItem({ stat, title }: Props) {
	return (
		<div className='flex items-center gap-x-5'>
			<div className='flex flex-col items-center gap-y-2.5'>
				<span className='font-bold text-4xl'>{stat}</span>
				<p className='text-[15px] text-gray-600'>{title}</p>
			</div>
		</div>
	)
}
