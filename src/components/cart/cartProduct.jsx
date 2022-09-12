import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { removeFromCart } from 'store/features/cartSlice'

const CartProduct = ({ cartItem }) => {
	const { image, title, price } = cartItem
	const dispatch = useDispatch()

	const removeHandler = () => {
		dispatch(removeFromCart(cartItem))
	}

	function formattedNumber(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}

	return (
		<div className='flex items-center p-5 rounded-[20px] border border-[#F3F3F3] gap-2'>
			<div className='w-32'>
				<img
					src={image}
					alt={title}
					className='w-full h-full object-scale-down select-none'
				/>
			</div>
			<div className='flex-grow'>
				<h2 className='line-clamp-2 text-sm'>{title}</h2>
				<p className='font-bold text-sm'>{formattedNumber(price)} UZS</p>
			</div>
			<button
				type='button'
				className='text-[#B5B5B5] border border-[#DBDBDB] p-2 rounded-lg'
				onClick={removeHandler}
			>
				<IoClose size={18} />
			</button>
		</div>
	)
}

export default CartProduct
