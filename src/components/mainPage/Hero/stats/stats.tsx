import { HERO_STATS } from '@/data/heroStats'
import { StatItem } from './statItem'
export function Stats() {
	return (
		<div>
			<div className='flex items-center gap-x-10'>
				{HERO_STATS.map(item => (
					<StatItem key={item.title} stat={item.stat} title={item.title} />
				))}
			</div>
		</div>
	)
}
