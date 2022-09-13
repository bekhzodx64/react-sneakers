import { useSelector } from 'react-redux'
import Button from 'components/button'

const Profile = () => {
	const { orderedItems } = useSelector((state) => state.orderSlice)

	console.log(orderedItems)

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
			{orderedItems.map((item) => (
				<div key={item.id}>
					{item.id}
					{item.items.map((product) => product.title)}
				</div>
			))}
		</main>
	)
}

export default Profile
