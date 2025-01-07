import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartType = {
    id: number;
    productImage: string;
    productTitle: string;
    productQuantity: number;
    productSize: string;
    productPrice: number;
}

type CartInitialStateType = {
    cart: CartType[],
    quantityValue: number;
}

const initialState: CartInitialStateType = {
    cart: JSON.parse(localStorage.getItem("cart") || '[]'), 
    quantityValue: 1
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartType>) => {
            state.cart = [...state.cart, action.payload];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        IncreaseQuantity: (state, action) => {
            state.cart = state.cart.map((product) => product.id === action.payload.id ? {...action.payload} : product)
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        DecreaseQuantity: (state, action) => {
            state.cart = state.cart.map((product) => product.id === action.payload.id ? {...action.payload} : product);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
});

export const { addToCart, removeCart, IncreaseQuantity, DecreaseQuantity } = cartSlice.actions;