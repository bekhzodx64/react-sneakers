import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Button = () => {
	const navigate = useNavigate()

	const navigateHandler = () => {
		navigate('/')
	}

	return (
		<button
			type='button'
			className='flex items-center mx-auto space-x-3 px-8 py-5 bg-[#9DD458] text-white rounded-[18px]'
			onClick={navigateHandler}
		>
			<HiArrowLeft size={20} />
			<p>Вернуться назад</p>
		</button>
	)
}

export default Button
