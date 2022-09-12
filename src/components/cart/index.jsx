import emptyBox from 'assets/images/box.png'
import Button from 'components/button'
import CartProduct from 'components/cart/cartProduct'
import { Fragment, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTotals } from 'store/features/cartSlice'
import Costs from './costs'

const Cart = ({ showCartHandler }) => {
	const { cartItems } = useSelector((state) => state.cartSlice)
	const dispatch = useDispatch()

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		dispatch(getTotals())
	}, [dispatch, cartItems])

	return ReactDOM.createPortal(
		<div className='fixed inset-0 bg-black/50 z-50' onClick={showCartHandler}>
			<div
				className='flex flex-col bg-white ml-auto max-w-sm w-full p-8 h-full'
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className='font-bold text-2xl mb-5'>Корзина</h2>
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
						<Button name='Оформить заказ' width='w-full' right />
					)}
				</div>
			</div>
		</div>,
		document.body
	)
}

export default Cart
