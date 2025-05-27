import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";

interface CartState {
    items: Product[]
}

const initialState: CartState = {
    items: JSON.parse(sessionStorage.getItem('cart') || '[]')
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
            sessionStorage.setItem('cart', JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => 
                item.id !== action.payload
            )
            sessionStorage.setItem('cart', JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items = []
            sessionStorage.setItem('cart', JSON.stringify(state.items))
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice