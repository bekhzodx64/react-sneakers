import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import favSlice from './features/favSlice'

export const store = configureStore({
	reducer: {
		cartSlice,
		favSlice,
	},
})
