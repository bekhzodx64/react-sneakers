import Confirm from 'components/templates/confirm'
import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { HiArrowLeft, HiChevronLeft } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearOrders } from 'store/features/orderSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { routeAnimation } from 'helpers/animations'

const Profile = () => {
	const { orderedItems } = useSelector((state) => state.orderSlice)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [showConfirm, setShowConfirm] = useState(false)

	function formattedNumber(x) {
		return x
			.toFixed(0)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}

	const navigateHandler = () => {
		navigate('/')
	}

	const confirmHandler = () => {
		document.body.style.overflow = 'visible'
		setShowConfirm(!showConfirm)
	}

	const clearOrdersHandler = () => {
		document.body.style.overflow = 'visible'
		dispatch(clearOrders())
		setShowConfirm(false)
	}

	return (
		<AnimatePresence>
			<motion.main
				className='min-h-[60vh] flex flex-col justify-center  pt-11'
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'
			>
				{orderedItems.length === 0 ? (
					<div className='space-y-12'>
						<div className='text-center space-y-3'>
							<span className='text-7xl select-none'>😔</span>
							<div>
								<h2 className='font-semibold text-2xl'>У вас нет заказов</h2>
								<p className='opacity-40'>Оформите хотя бы один заказ</p>
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
					</div>
				) : (
					<div className='space-y-5 md:px-10'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center space-x-3'>
								<button
									type='button'
									className='border border-[#F2F2F2] rounded-lg px-1 py-1'
									onClick={navigateHandler}
								>
									<HiChevronLeft color='#C8C8C8' size={20} />
								</button>
								<h2 className='text-[32px] font-bold'>История заказов</h2>
							</div>
							<button
								type='button'
								onClick={confirmHandler}
								className='flex space-x-2 items-center border px-7 py-2 rounded-lg'
							>
								<FiTrash2 size={18} />
								<p className='hidden md:block'>Очистить историю покупок</p>
							</button>
						</div>

						{orderedItems.map((item) => (
							<div key={item.id} className='space-y-5 border rounded-3xl p-5'>
								<div className='flex items-center justify-between'>
									<div className='md:space-x-2'>
										<span className='select-none block md:inline-block'>
											Заказ ID:
										</span>
										<span className='font-bold select-all block md:inline-block'>
											{item.id}
										</span>
									</div>
									<div className='flex gap-4'>
										<div>
											<span className='block md:inline-block'>Дата:</span>
											<span>{item.customDate}</span>
										</div>
										<div>
											<span className='block md:inline-block'>Время:</span>
											<span>{item.time}</span>
										</div>
									</div>
								</div>
								{item.items.map((product, index) => (
									<div
										key={index}
										className='flex gap-5 items-center border rounded-[8px] overflow-hidden px-3 md:px-8 py-2'
									>
										<div className='w-24 h-24'>
											<img
												src={product.image}
												alt={product.title}
												className='w-full h-full select-none object-scale-down'
											/>
										</div>
										<h3 className='grow line-clamp-2'>{product.title}</h3>
										<p className='font-bold'>
											{formattedNumber(product.price)} UZS
										</p>
									</div>
								))}
							</div>
						))}
					</div>
				)}

				{showConfirm && (
					<Confirm
						clearOrdersHandler={clearOrdersHandler}
						confirmHandler={confirmHandler}
					/>
				)}
			</motion.main>
		</AnimatePresence>
	)
}

export default Profile
