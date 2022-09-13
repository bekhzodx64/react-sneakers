import Product from 'components/product'
import { banners, sneakers } from 'db'
import { useState, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { Navigation } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPaginate from 'react-paginate'

const Home = () => {
	const [searchValue, setSearchValue] = useState('')

	const [currentItems, setCurrentItems] = useState([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)
	const itemsPerPage = 8

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(sneakers.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(sneakers.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, sneakers])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % sneakers.length
		setItemOffset(newOffset)
	}

	const onSearch = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<main className='min-h-[60vh] pt-9'>
			<div>
				<Swiper
					modules={[Navigation]}
					spaceBetween={10}
					navigation={{
						prevEl: '.prev',
						nextEl: '.next',
					}}
					className='relative'
				>
					{banners.map((banner) => (
						<SwiperSlide key={banner.id}>
							<div className='rounded-[20px] overflow-hidden'>
								<img
									src={banner.image}
									alt='Banner'
									className='w-full h-full object-cover'
								/>
							</div>
						</SwiperSlide>
					))}
					<button className='prev w-9 h-9 rounded-full flex justify-center items-center bg-white shadow absolute left-5 top-1/2 -translate-y-1/2 z-10'>
						<BsChevronLeft />
					</button>
					<button className='next w-9 h-9 rounded-full flex justify-center items-center bg-white shadow absolute right-5 top-1/2 -translate-y-1/2 z-10'>
						<BsChevronRight />
					</button>
				</Swiper>
			</div>

			<div className='flex justify-between items-center px-10 mt-10'>
				<h2 className='font-bold text-[32px]'>
					{searchValue ? 'Результаты поиска' : 'Все кроссовки'}
				</h2>
				<div className='relative'>
					<input
						type='input'
						placeholder='Поиск'
						onChange={onSearch}
						value={searchValue}
						className='border border-[#F3F3F3] rounded-lg py-3 pl-11 pr-2 outline-none text-sm'
					/>
					<div className='absolute left-3 top-0 translate-y-1/2 select-none pointer-events-none'>
						<FiSearch color='#E4E4E4' size={23} />
					</div>
					{searchValue && (
						<button
							type='button'
							className='absolute right-2 top-1/2 -translate-y-1/2 text-[#B5B5B5] border border-[#DBDBDB] p-1 rounded-lg'
							onClick={() => setSearchValue('')}
						>
							<IoClose />
						</button>
					)}
				</div>
			</div>

			<div className='grid grid-cols-4 gap-5 mt-10 px-10'>
				{searchValue
					? sneakers
							.filter((item) =>
								item.title.toLowerCase().includes(searchValue.toLowerCase())
							)
							.map((product) => <Product key={product.id} product={product} />)
					: currentItems.map((product) => (
							<Product key={product.id} product={product} />
					  ))}
			</div>

			<ReactPaginate
				breakLabel='...'
				nextLabel='Вперед'
				previousLabel='Назад'
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
				containerClassName='pagination'
				pageLinkClassName='pagination-num'
				previousLinkClassName='pagination-nav'
				nextLinkClassName='pagination-nav'
				activeLinkClassName='pagination-active'
				disabledClassName='pagination-disabled'
				breakClassName='pagination-num'
			/>
		</main>
	)
}

export default Home
