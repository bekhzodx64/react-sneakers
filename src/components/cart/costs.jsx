import { Fragment } from 'react'

const Costs = () => {
	return (
		<Fragment>
			<div className='flex items-center space-x-2'>
				<p>Налог 5%:</p>
				<p className='border-b border-dashed flex-grow pt-3'></p>
				<p className='font-semibold'>1000 UZS</p>
			</div>
			<div className='flex items-center space-x-2'>
				<p>Итого:</p>
				<p className='border-b border-dashed flex-grow pt-3'></p>
				<p className='font-semibold'>200 450 UZS</p>
			</div>
		</Fragment>
	)
}

export default Costs
