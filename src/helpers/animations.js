export const fadeInOverlay = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
}

export const fadeInCartWindow = {
	initial: { x: 200 },
	animate: { x: 0 },
	exit: { x: 350 },
}

export const staggerAnimationWrapper = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
	},
}

export const staggerAnimationForProducts = {
	initial: {
		opacity: 0,
		y: -100,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
}

export const routeAnimation = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
	},
}
