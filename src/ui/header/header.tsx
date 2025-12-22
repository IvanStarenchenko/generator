import { Button } from './button'
import { List } from './list'
import { Logo } from './logo'
export function Header() {
	return (
		<div className='flex items-center justify-between ml-12 p-4 sm:p-6 lg:p-8'>
			<Logo />
			<List />
			<Button />
		</div>
	)
}
