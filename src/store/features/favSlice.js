import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favItems: [],
}

const favSlice = createSlice({
	name: 'fav',
	initialState,
	reducers: {
		addToFav: (state, action) => {
			const itemIndex = state.favItems.find(
				(item) => item.id === action.payload.id
			)

			const nextFavItems = state.favItems.filter(
				(favItem) => favItem.id !== action.payload.id
			)

			if (itemIndex) {
				state.favItems = nextFavItems
			} else {
				const tempProduct = { ...action.payload, count: 1 }
				state.favItems.push(tempProduct)
			}
		},
	},
})

export const { addToFav } = favSlice.actions
export default favSlice.reducer
