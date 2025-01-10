import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { likesSliceInitialStateTypes, Product } from "../../types/types";

const initialState: likesSliceInitialStateTypes = {
    likes: JSON.parse(localStorage.getItem('likes') || '[]')
}

export const likesSlice = createSlice({
    name: "likesSlice",
    initialState,
    reducers: {
        addToLikes: (state: likesSliceInitialStateTypes, action: PayloadAction<Product>) => {
            const findLikes = state.likes.findIndex((product) => product.id == action.payload.id);

            if(findLikes > -1) {
                state.likes = state.likes.slice(0, findLikes)
            } else {
                state.likes = [...state.likes, action.payload]; 
            }

            localStorage.setItem('likes', JSON.stringify(state.likes));
        }
    }
});

export const { addToLikes } = likesSlice.actions;