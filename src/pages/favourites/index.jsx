import Button from 'components/button'
import { useSelector } from 'react-redux'
import Product from 'components/product'
import { HiChevronLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Favourites = () => {
	const favItems = useSelector((state) => state.favSlice.favItems)
	const navigate = useNavigate()

	const navigateHandler = () => {
		navigate('/')
	}

	return (
		<main className='min-h-[50vh] flex flex-col justify-center items-center pt-11'>
			{favItems.length === 0 ? (
				<div className='space-y-12'>
					<div className='text-center space-y-3'>
						<span className='text-7xl select-none'>🥺</span>
						<div>
							<h2 className='font-semibold text-2xl'>Закладок нет</h2>
							<p className='opacity-40'>Вы ничего не добавляли в закладки</p>
						</div>
					</div>
					<Button />
				</div>
			) : (
				<div className='px-10'>
					<div className='flex items-center space-x-3'>
						<button
							type='button'
							className='border border-[#F2F2F2] rounded-lg px-1 py-1'
							onClick={navigateHandler}
						>
							<HiChevronLeft color='#C8C8C8' size={20} />
						</button>
						<h2 className='text-[32px] font-bold'>Мои закладки</h2>
					</div>
					<div className='grid grid-cols-4 gap-5 mt-10'>
						{favItems.map((favItem) => (
							<Product key={favItem.id} product={favItem} />
						))}
					</div>
				</div>
			)}
		</main>
	)
}

export default Favourites
