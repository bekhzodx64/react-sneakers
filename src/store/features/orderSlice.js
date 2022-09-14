import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	orderedItems: [],
	showSuccess: false,
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
		changeStatus: (state, action) => {
			state.showSuccess = !state.showSuccess
		},
	},
})

export const { order, clearOrders, changeStatus } = orderSlice.actions
export default orderSlice.reducer
