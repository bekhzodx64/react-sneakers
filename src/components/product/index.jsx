import { useEffect, useState } from 'react'
import { CgCheck } from 'react-icons/cg'
import { MdAdd } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from 'store/features/cartSlice'
import { addToFav } from 'store/features/favSlice'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Product = ({ product }) => {
	const { title, price, image } = product
	const [add, setAdd] = useState(false)
	const [fav, setFav] = useState(false)
	const dispatch = useDispatch()

	const cartItems = useSelector((state) => state.cartSlice.cartItems)
	const favItems = useSelector((state) => state.favSlice.favItems)

	function formattedNumber(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}

	const addToCartHandler = () => {
		dispatch(addToCart(product))
	}

	const addToFavHandler = () => {
		dispatch(addToFav(product))
	}

	useEffect(() => {
		const cartItemIndex = cartItems.find((item) => item.id === product.id)
		const favItemIndex = favItems.find((item) => item.id === product.id)

		setAdd(cartItemIndex)
		setFav(favItemIndex)
	}, [cartItems, product.id, favItems])

	return (
		<div className='border border-[#F3F3F3] p-8 rounded-[40px] space-y-3 hover:shadow-lg transition-all hover:-translate-y-2 relative'>
			<button
				type='button'
				className={`${
					fav ? 'bg-red-100' : null
				} absolute top-6 left-6 p-2 rounded-[7px] border border-[#F8F8F8] outline-none`}
				onClick={addToFavHandler}
			>
				{!fav ? (
					<AiOutlineHeart size={20} className='text-[#ECECEC]' />
				) : (
					<AiFillHeart size={20} className='text-red-400' />
				)}
			</button>
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
						add ? 'added' : null
					}`}
					onClick={addToCartHandler}
				>
					{!add ? (
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
