import { nanoid } from '@reduxjs/toolkit'
import emptyBox from 'assets/images/box.png'
import CartProduct from 'components/cart/cartProduct'
import { motion } from 'framer-motion'
import { Fragment, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HiArrowRight } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getTotals } from 'store/features/cartSlice'
import { changeStatus, order } from 'store/features/orderSlice'
import Costs from './costs'
import { fadeInOverlay, fadeInCartWindow } from 'helpers/animations'

const Cart = ({ showCartHandler }) => {
	const { cartItems } = useSelector((state) => state.cartSlice)
	const dispatch = useDispatch()

	const date = new Date()
	const customDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
	const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

	let newOrder = {
		id: nanoid(),
		customDate,
		time,
		items: cartItems,
	}

	const newOrderHandler = () => {
		dispatch(order([newOrder]))
		dispatch(clearCart())
		showCartHandler()
		dispatch(changeStatus())
	}

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		dispatch(getTotals())
	}, [dispatch, cartItems])

	return ReactDOM.createPortal(
		<motion.div
			className='fixed inset-0 bg-black/50 z-50'
			onClick={showCartHandler}
			variants={fadeInOverlay}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<motion.div
				className='flex flex-col bg-white ml-auto sm:max-w-sm w-full p-8 h-full'
				onClick={(e) => e.stopPropagation()}
				variants={fadeInCartWindow}
				initial='initial'
				animate='animate'
				exit='exit'
			>
				<div className='flex items-center justify-between 	mb-5'>
					<h2 className='font-bold text-2xl'>Корзина</h2>
					<button
						type='button'
						className='text-[#B5B5B5] border border-[#DBDBDB] p-2 rounded-lg transition-all hover:text-red-500 hover:bg-red-100 hover:border-transparent sm:hidden'
						onClick={showCartHandler}
					>
						<IoClose size={18} />
					</button>
				</div>

				{cartItems.length === 0 ? (
					<div className='flex flex-col items-center my-auto space-y-3'>
						<img src={emptyBox} alt='Корзина пустая' className='select-none' />
						<h3 className='font-semibold text-[22px]'>Корзина пустая</h3>
						<p className='opacity-50 text-center w-full max-w-[285px]'>
							Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
						</p>
					</div>
				) : (
					<Fragment>
						<div className='grow space-y-3 h-full overflow-y-auto'>
							{cartItems.map((cartItem) => (
								<CartProduct key={cartItem.id} cartItem={cartItem} />
							))}
						</div>
						<div className='space-y-2'>
							<Costs />
						</div>
					</Fragment>
				)}

				<div className='mt-7'>
					{cartItems.length !== 0 && (
						<button
							type='button'
							className='flex items-center justify-center mx-auto space-x-3 px-8 py-5 bg-[#9DD458] text-white rounded-[18px] w-full'
							onClick={newOrderHandler}
						>
							<p>Оформить заказ</p>
							<HiArrowRight size={20} />
						</button>
					)}
				</div>
			</motion.div>
		</motion.div>,
		document.body
	)
}

export default Cart
