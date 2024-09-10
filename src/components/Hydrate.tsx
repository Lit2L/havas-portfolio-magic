'use client'

import { ReactNode, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { fontGeist, fontHeading, fontLogo, fontSans } from '@/app/assets'

export default function Hydrate({ children }: { children: ReactNode }) {
	const [isHydrated, setIsHydrated] = useState(false)

	//Wait till Nextjs rehydration completes
	useEffect(() => {
		setIsHydrated(true)
	}, [])

	// useEffect(() => {
	// 	;(async () => {
	// 		const LocomotiveScroll = (await import('locomotive-scroll')).default
	// 		const locomotiveScroll = new LocomotiveScroll()
	// 	})()
	// }, [])

	return (
		<>
			{isHydrated ? (
				<body
					className={cn(
						'min-h-screen bg-background/90 font-sans antialiased max-w-full',
						fontSans.variable,
						fontLogo.variable,
						fontHeading.variable,
						fontGeist.variable
					)}
				>
					{children}
				</body>
			) : (
				<body></body>
			)}
		</>
	)
}
