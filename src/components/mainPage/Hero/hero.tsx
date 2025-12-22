import { Button } from './button'
import { Stats } from './stats/stats'
import { Text } from './text'
import { Top } from './top'
export function Hero() {
	return (
		<div className='flex flex-col justify-center items-center gap-y-8.25'>
			<Top />
			<Text />
			<Button />
			<Stats />
		</div>
	)
}
