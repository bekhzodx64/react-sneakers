import Header from 'components/header'
import { Outlet } from 'react-router-dom'
import style from './layout.module.css'

const Layout = () => {
	return (
		<div className={`container ${style.wrapper}`}>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout
