import ReactDOM from 'react-dom'

const Confirm = ({ clearOrdersHandler, confirmHandler }) => {
	document.body.style.overflow = 'hidden'

	return ReactDOM.createPortal(
		<div
			className='fixed flex justify-center items-center inset-0 z-50 bg-black/50'
			onClick={confirmHandler}
		>
			<div
				className='bg-white w-full max-w-md rounded-[20px] shadow-sm text-center p-10 space-y-10'
				onClick={(e) => e.stopPropagation()}
			>
				<h3 className='font-bold text-2xl'>
					Вы точно хотите очистить историю покупок ?
				</h3>
				<div className='space-x-10'>
					<button
						type='button'
						className='w-full max-w-[100px] py-2 rounded-xl bg-[#9DD458] text-white active:translate-y-[2px] transition-all active:shadow-inner shadow-md outline-none select-none'
						onClick={clearOrdersHandler}
					>
						Да
					</button>
					<button
						type='button'
						className='w-full max-w-[100px] py-2 rounded-xl bg-red-500 text-white active:translate-y-[2px] transition-all active:shadow-inner shadow-md outline-none select-none'
						onClick={confirmHandler}
					>
						Нет
					</button>
				</div>
			</div>
		</div>,
		document.body
	)
}

export default Confirm
