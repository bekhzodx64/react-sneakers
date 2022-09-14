import Button from 'components/button'
import { HiChevronLeft } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearOrders } from 'store/features/orderSlice'
import Confirm from 'components/templates/confirm'
import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'

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
		<main className='min-h-[60vh] flex flex-col justify-center  pt-11'>
			{orderedItems.length === 0 ? (
				<div className='space-y-12'>
					<div className='text-center space-y-3'>
						<span className='text-7xl select-none'>😔</span>
						<div>
							<h2 className='font-semibold text-2xl'>У вас нет заказов</h2>
							<p className='opacity-40'>Оформите хотя бы один заказ</p>
						</div>
					</div>
					<Button name='Вернуться назад' left />
				</div>
			) : (
				<div className='space-y-5 px-10'>
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
							<p>Очистить историю покупок</p>
						</button>
					</div>

					{orderedItems.map((item) => (
						<div key={item.id} className='space-y-5 border rounded-3xl p-5'>
							<div className='space-x-3'>
								<span className='select-none'>Заказ ID:</span>
								<span className='font-bold select-all'>{item.id}</span>
							</div>
							{item.items.map((product, index) => (
								<div
									key={index}
									className='flex gap-5 items-center border rounded-[8px] overflow-hidden px-8 py-2'
								>
									<div className='w-24 h-24'>
										<img
											src={product.image}
											alt={product.title}
											className='w-full h-full select-none object-scale-down'
										/>
									</div>
									<h3 className='grow line-clamp-1'>{product.title}</h3>
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
		</main>
	)
}

export default Profile
