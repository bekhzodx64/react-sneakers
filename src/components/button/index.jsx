import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Button = ({ name, width, right, left, addItems }) => {
	const navigate = useNavigate()

	const navigateHandler = () => {
		navigate('/')
	}

	return (
		<button
			type='button'
			className={`flex items-center justify-center mx-auto space-x-3 px-8 py-5 bg-[#9DD458] text-white rounded-[18px] ${
				width ? width : null
			}`}
			onClick={(navigateHandler, addItems && addItems)}
		>
			{left && <HiArrowLeft size={20} />}
			<p>{name}</p>
			{right && <HiArrowRight size={20} />}
		</button>
	)
}

export default Button
