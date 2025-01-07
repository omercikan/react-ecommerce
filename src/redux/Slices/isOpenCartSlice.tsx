import { createSlice } from "@reduxjs/toolkit";

export const isOpenCartSlice = createSlice({
    name: "isOpenCartSlice",
    initialState: {
        isOpenCart: false,
    },
    reducers: {
        changeOpenModeCart: (state) => {
            state.isOpenCart = !state.isOpenCart;
        }
    }
});

export const { changeOpenModeCart } = isOpenCartSlice.actions;