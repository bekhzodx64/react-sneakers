import Product from 'components/product'
import { HiArrowLeft, HiChevronLeft } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Favourites = () => {
	const favItems = useSelector((state) => state.favSlice.favItems)
	const navigate = useNavigate()

	const navigateHandler = () => {
		navigate('/')
	}

	return (
		<main className='min-h-[60vh] flex flex-col justify-center items-center pt-11'>
			{favItems.length === 0 ? (
				<div className='space-y-12'>
					<div className='text-center space-y-3'>
						<span className='text-7xl select-none'>🥺</span>
						<div>
							<h2 className='font-semibold text-2xl'>Закладок нет</h2>
							<p className='opacity-40'>Вы ничего не добавляли в закладки</p>
						</div>
					</div>
					<button
						type='button'
						className='flex items-center justify-center mx-auto space-x-3 px-8 py-5 bg-[#9DD458] text-white rounded-[18px]'
						onClick={navigateHandler}
					>
						<HiArrowLeft size={20} />
						<p>Вернуться назад</p>
					</button>
				</div>
			) : (
				<div className='sm:px-10 w-full'>
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
					<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 place-content-center'>
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
