import Button from 'components/button'

const Favourites = () => {
	return (
		<main className='min-h-[50vh] flex flex-col justify-center items-center pt-11'>
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
		</main>
	)
}

export default Favourites
