import logo from 'assets/images/logo.png'
import Cart from 'components/cart'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { RiUser3Fill, RiUser3Line } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	const [showCart, setShowCart] = useState(false)

	const showCartHandler = () => {
		document.body.style.overflow = 'visible'
		setShowCart(!showCart)
	}

	return (
		<header className='flex justify-between items-center px-11 pb-11 border-b border-gray-200 -mx-5'>
			<Link to='/'>
				<div className='flex space-x-4 items-center'>
					<img src={logo} alt='React Sneakers' className='w-10 h-10' />
					<div>
						<h2 className='font-bold text-xl uppercase'>react sneakers</h2>
						<h3 className='text-sm opacity-60'>Магазин лучших кроссовок</h3>
					</div>
				</div>
			</Link>

			<ul className='flex space-x-5'>
				<li className='flex items-center text-sm'>
					<button
						className='flex items-center space-x-3'
						onClick={showCartHandler}
					>
						<BsCart2 color='#9B9B9B' size={25} />
					</button>
				</li>
				<li className='flex items-center text-sm'>
					<NavLink
						to='/favourites'
						className={({ isActive }) => (isActive ? 'activeH' : 'disabled')}
					>
						{({ isActive }) =>
							isActive ? (
								<AiFillHeart size={25} />
							) : (
								<AiOutlineHeart size={25} />
							)
						}
					</NavLink>
				</li>
				<li className='flex items-center text-sm'>
					<NavLink
						to='/profile'
						className={({ isActive }) => (isActive ? 'activeO' : 'disabled')}
					>
						{({ isActive }) =>
							isActive ? <RiUser3Fill size={25} /> : <RiUser3Line size={25} />
						}
					</NavLink>
				</li>
			</ul>

			{showCart && <Cart showCartHandler={showCartHandler} />}
		</header>
	)
}

export default Header
