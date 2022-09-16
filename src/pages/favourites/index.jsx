import Product from 'components/product'
import { HiArrowLeft, HiChevronLeft } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
	staggerAnimationWrapper,
	staggerAnimationForProducts,
	routeAnimation,
	fadeInOverlay,
} from 'helpers/animations'

const Favourites = () => {
	const favItems = useSelector((state) => state.favSlice.favItems)
	const navigate = useNavigate()

	const navigateHandler = () => {
		navigate('/')
	}

	return (
		<AnimatePresence>
			<motion.main
				className='min-h-[60vh] flex flex-col justify-center items-center pt-11'
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'
			>
				{favItems.length === 0 ? (
					<motion.div
						className='space-y-12'
						variants={fadeInOverlay}
						initial='initial'
						animate='animate'
					>
						<div className='text-center space-y-3'>
							<span className='text-7xl select-none'>🥺</span>
							<div>
								<h2 className='font-semibold text-2xl'>Закладок нет</h2>
								<p className='opacity-40'>Вы ничего не добавляли в закладки</p>
							</div>
						</div>
						<button
							type='button'
							className='flex items-center justify-center mx-auto space-x-3 px-8 py-5 bg-[#9DD458] text-white rounded-[18px]'
							onClick={navigateHandler}
						>
							<HiArrowLeft size={20} />
							<p>Вернуться назад</p>
						</button>
					</motion.div>
				) : (
					<div className='sm:px-10 w-full'>
						<div className='flex items-center space-x-3'>
							<button
								type='button'
								className='border border-[#F2F2F2] rounded-lg px-1 py-1'
								onClick={navigateHandler}
							>
								<HiChevronLeft color='#C8C8C8' size={20} />
							</button>
							<h2 className='text-[32px] font-bold'>Мои закладки</h2>
						</div>
						<motion.div
							className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 place-content-center'
							variants={staggerAnimationWrapper}
							initial='initial'
							animate='animate'
						>
							<AnimatePresence>
								{favItems.map((favItem) => (
									<motion.div
										key={favItem.id}
										variants={staggerAnimationForProducts}
										exit={{
											scale: 0.1,
											opacity: 0,
											transition: { duration: 0.5 },
										}}
									>
										<Product product={favItem} />
									</motion.div>
								))}
							</AnimatePresence>
						</motion.div>
					</div>
				)}
			</motion.main>
		</AnimatePresence>
	)
}

export default Favourites
