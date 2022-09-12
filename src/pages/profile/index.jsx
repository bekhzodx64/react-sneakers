import Button from 'components/button'

const Profile = () => {
	return (
		<main className='min-h-[60vh] flex flex-col justify-center items-center pt-11'>
			<div className='space-y-12'>
				<div className='text-center space-y-3'>
					<span className='text-7xl select-none'>😔</span>
					<div>
						<h2 className='font-semibold text-2xl'>У вас нет заказов</h2>
						<p className='opacity-40'>Оформите хотя бы один заказ</p>
					</div>
				</div>
				<Button name='Вернуться назад' left />
			</div>
		</main>
	)
}

export default Profile
