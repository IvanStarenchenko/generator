import { HEADERS_DATA } from '@/data/header'
export function List() {
	return (
		<div>
			<ul className='flex items-center gap-x-7.5'>
				{HEADERS_DATA.map(item => (
					<li
						key={item.title}
						className='text-gray-600 text-[16px] cursor-pointer font-bold hover:text-black transition-all duration-300'
					>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	)
}
