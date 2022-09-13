import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	orderedItems: [],
}

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		order: (state, { payload }) => {
			state.orderedItems.push(...payload)
		},
		clearOrders: (state) => {
			state.orderedItems = []
		},
	},
})

export const { order, clearOrders } = orderSlice.actions
export default orderSlice.reducer
