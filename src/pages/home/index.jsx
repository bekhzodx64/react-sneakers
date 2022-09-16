import Product from 'components/product'
import { banners, sneakers } from 'db'
import { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import ReactPaginate from 'react-paginate'
import { Navigation } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion, AnimatePresence } from 'framer-motion'
import {
	routeAnimation,
	staggerAnimationWrapper,
	staggerAnimationForProducts,
} from 'helpers/animations'

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
	}, [itemOffset, itemsPerPage])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % sneakers.length
		setItemOffset(newOffset)
	}

	const onSearch = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<AnimatePresence>
			<motion.main
				className='min-h-[60vh] pt-9'
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'
			>
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

				<div className='sm:flex text-center justify-between items-center sm:px-10 mt-10 space-y-3 sm:space-y-0'>
					<h2 className='font-bold text-[28px] sm:text-[32px]'>
						{searchValue ? 'Результаты поиска' : 'Все кроссовки'}
					</h2>
					<div className='relative w-min mx-auto sm:mx-0'>
						<input
							type='input'
							placeholder='Поиск'
							onChange={onSearch}
							value={searchValue}
							className='border border-[#F3F3F3] rounded-lg py-3 pl-11 pr-2 outline-none text-sm max-w-sm'
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

				<motion.div
					className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 sm:px-10 place-content-center'
					variants={staggerAnimationWrapper}
					initial='initial'
					animate='animate'
				>
					{searchValue
						? sneakers
								.filter((item) =>
									item.title.toLowerCase().includes(searchValue.toLowerCase())
								)
								.map((product) => (
									<motion.div
										key={product.id}
										variants={staggerAnimationForProducts}
									>
										<Product key={product.id} product={product} />
									</motion.div>
								))
						: currentItems.map((product) => (
								<motion.div
									key={product.id}
									variants={staggerAnimationForProducts}
								>
									<Product product={product} />
								</motion.div>
						  ))}
				</motion.div>

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
			</motion.main>
		</AnimatePresence>
	)
}

export default Home
