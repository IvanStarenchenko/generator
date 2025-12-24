'use client'

import Lottie from 'lottie-react'
import loader from '../shared/gif/atom-loader.json'

export function Loader() {
	return (
		<div className='w-40 h-40 mx-auto'>
			<Lottie animationData={loader} loop autoplay />
		</div>
	)
}
