import { useEffect, useState } from 'react'
import { CgCheck } from 'react-icons/cg'
import { MdAdd } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from 'store/features/cartSlice'

const Product = ({ product }) => {
	const { title, price, image } = product
	const [icon, setIcon] = useState(false)
	const dispatch = useDispatch()

	const cartItems = useSelector((state) => state.cartSlice.cartItems)

	function formattedNumber(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}

	const addToCartHandler = () => {
		dispatch(addToCart(product))
	}

	useEffect(() => {
		const cartItemIndex = cartItems.find((item) => item.id === product.id)

		setIcon(cartItemIndex)
	}, [cartItems, product.id])

	return (
		<div className='border border-[#F3F3F3] p-8 rounded-[40px] space-y-3 hover:shadow-lg transition-all hover:-translate-y-2'>
			<div>
				<img
					src={image}
					alt={title}
					className='w-full h-full object-scale-down select-none pointer-events-none'
				/>
			</div>
			<h2 className='text-sm line-clamp-2' title={title}>
				{title}
			</h2>
			<div className='flex justify-between'>
				<div>
					<p className='font-medium text-[#BDBDBD] text-xs select-none'>
						Цена:
					</p>
					<p className='font-bold text-sm'>{formattedNumber(price)} сум</p>
				</div>
				<button
					type='button'
					className={`border border-[#F2F2F2] p-[5px] rounded-lg outline-none ${
						icon ? 'added' : null
					}`}
					onClick={addToCartHandler}
				>
					{!icon ? (
						<MdAdd color='#D3D3D3' size={25} />
					) : (
						<CgCheck size={25} color='#fff' />
					)}
				</button>
			</div>
		</div>
	)
}

export default Product
