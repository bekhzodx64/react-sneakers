import { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { CgCheck } from 'react-icons/cg'
import { MdAdd } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from 'store/features/cartSlice'
import { addToFav } from 'store/features/favSlice'

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
		<div className='border border-[#F3F3F3] w-full max-w-[250px] p-8 rounded-[40px] space-y-3 hover:shadow-lg transition-all hover:-translate-y-2 relative'>
			<button
				type='button'
				className={`${
					fav ? 'bg-red-100' : 'hover:bg-red-50'
				} group absolute top-6 left-6 p-2 rounded-[7px] border border-[#F8F8F8] outline-none transition-all`}
				onClick={addToFavHandler}
			>
				{!fav ? (
					<AiOutlineHeart
						size={20}
						className='text-[#ECECEC] group-hover:text-red-300 transition-all'
					/>
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
					<p className='font-bold text-sm'>{formattedNumber(price)} UZS</p>
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
