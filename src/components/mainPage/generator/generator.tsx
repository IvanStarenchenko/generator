import { CreatingForm } from './creating/creatingForm'
import { Top } from './top/top'
export function Generator() {
	return (
		<div className='flex flex-col gap-y-2' id='creating'>
			<Top />
			<div className='my-9'>
				<CreatingForm />
			</div>
		</div>
	)
}
