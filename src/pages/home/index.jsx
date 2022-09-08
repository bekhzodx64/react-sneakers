import Product from 'components/product'
import { sneakers } from 'db'
import { FiSearch } from 'react-icons/fi'

const Home = () => {
	return (
		<main className='min-h-[50vh] pt-9'>
			<div className='flex justify-between items-center px-10'>
				<h2 className='font-bold text-[32px]'>Все кроссовки</h2>
				<div className='relative'>
					<input
						type='search'
						placeholder='Поиск...'
						className='border border-[#F3F3F3] rounded-lg py-3 pl-11 pr-2 outline-none text-sm'
					/>
					<div className='absolute left-3 top-0 translate-y-1/2 select-none pointer-events-none'>
						<FiSearch color='#E4E4E4' size={23} />
					</div>
				</div>
			</div>

			<div className='grid grid-cols-4 gap-5 mt-10 px-10'>
				{sneakers.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</main>
	)
}

export default Home
