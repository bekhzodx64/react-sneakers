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
	},
})

export const { order } = orderSlice.actions
export default orderSlice.reducer
