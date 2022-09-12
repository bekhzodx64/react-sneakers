import Product from 'components/product'
import { banners, sneakers } from 'db'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { Navigation } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useForm } from 'react-hook-form'
import { useState, useMemo } from 'react'

const Home = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [searchValue, setSearchValue] = useState('')

	const onSubmit = (data, e) => {
		e.target.reset()
		setSearchValue(data)
		console.log(data)
	}

	const filteredItems = useMemo(() => {
		return sneakers.filter((sneaker) =>
			sneaker.title.toLowerCase().includes(searchValue.search)
		)
	}, [searchValue, sneakers])

	return (
		<main className='min-h-[50vh] pt-9'>
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
				<h2 className='font-bold text-[32px]'>Все кроссовки</h2>
				<div className='relative'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							type='search'
							placeholder={`${
								errors.search?.type === 'required'
									? 'Введите запрос'
									: 'Поиск...'
							}`}
							className={`border ${
								errors.search?.type === 'required'
									? 'border-red-400 placeholder:text-red-400'
									: 'border-[#F3F3F3]'
							}  rounded-lg py-3 pl-11 pr-2 outline-none text-sm`}
							{...register('search', { required: true })}
						/>
					</form>
					<div className='absolute left-3 top-0 translate-y-1/2 select-none pointer-events-none'>
						<FiSearch color='#E4E4E4' size={23} />
					</div>
				</div>
			</div>

			<div className='grid grid-cols-4 gap-5 mt-10 px-10'>
				{filteredItems.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</main>
	)
}

export default Home
