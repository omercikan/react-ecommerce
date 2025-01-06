import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartType = {
    id: number;
    productImage: string;
    productTitle: string;
    productQuantity: number;
    productSize: string;
}

type CartInitialStateType = {
    cart: CartType[]
}

const initialState: CartInitialStateType = {
    cart: JSON.parse(localStorage.getItem("cart") || '[]'), 
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartType>) => {
            state.cart = [...state.cart, action.payload];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
});

export const { addToCart } = cartSlice.actions;