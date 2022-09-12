import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			const nextCartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.id
			)

			if (itemIndex) {
				state.cartItems = nextCartItems
			} else {
				const tempProduct = { ...action.payload, count: 1 }
				state.cartItems.push(tempProduct)
			}
		},
		removeFromCart: (state, action) => {
			const nextCartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.id
			)

			state.cartItems = nextCartItems
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
