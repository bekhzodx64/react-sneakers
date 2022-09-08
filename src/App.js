import Layout from 'components/layout'
import Favourites from 'pages/favourites'
import Home from 'pages/home'
import Profile from 'pages/profile'
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/favourites' element={<Favourites />} />
				</Route>
			</Routes>
		</Fragment>
	)
}

export default App
