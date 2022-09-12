import { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Costs = () => {
	const { totalPrice } = useSelector((state) => state.cartSlice)

	function formattedNumber(x) {
		return x
			.toFixed(0)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}

	return (
		<Fragment>
			<div className='flex items-center space-x-2 mt-2'>
				<p>Налог 3%:</p>
				<p className='border-b border-dashed flex-grow pt-3'></p>
				<p className='font-semibold'>
					{formattedNumber((totalPrice * 3) / 100)} UZS
				</p>
			</div>
			<div className='flex items-center space-x-2'>
				<p>Итого:</p>
				<p className='border-b border-dashed flex-grow pt-3'></p>
				<p className='font-semibold'>{formattedNumber(totalPrice)} UZS</p>
			</div>
		</Fragment>
	)
}

export default Costs
