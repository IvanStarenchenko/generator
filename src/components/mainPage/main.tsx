import { Generator } from './generator/generator'
import { Hero } from './Hero/hero'
export function Main() {
	return (
		<div className='flex flex-col items-center gap-y-2.5'>
			<div>
				<Hero />
			</div>
			<div className='mt-30'>
				<Generator />
			</div>
		</div>
	)
}
