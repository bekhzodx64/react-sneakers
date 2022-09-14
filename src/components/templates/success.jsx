import successImage from 'assets/images/success.png'
import ReactDOM from 'react-dom'
import { HiArrowRight } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeStatus } from 'store/features/orderSlice'

const Success = ({ showSuccessHandler }) => {
	document.body.style.overflow = 'hidden'
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const navigateHandler = () => {
		document.body.style.overflow = 'visible'
		navigate('/profile')
		dispatch(changeStatus())
	}

	return ReactDOM.createPortal(
		<div
			className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'
			onClick={showSuccessHandler}
		>
			<div
				className='w-full max-w-md bg-white rounded-[20px] p-10 text-center space-y-4'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<div className='w-16 mx-auto'>
					<img
						src={successImage}
						alt='Success'
						className='w-full h-full object-scale-down select-none'
					/>
				</div>
				<h3 className='font-semibold text-[22px] text-[#9DD458]'>
					Заказ оформлен!
				</h3>
				<p className='opacity-40'>
					Ваш заказ скоро будет передан курьерской доставке
				</p>
				<button
					type='button'
					className='flex items-center justify-center mx-auto space-x-3 px-8 py-5 bg-[#9DD458] text-white rounded-[18px]'
					onClick={navigateHandler}
				>
					<span>Проверить</span>
					<HiArrowRight />
				</button>
			</div>
		</div>,
		document.body
	)
}

export default Success
