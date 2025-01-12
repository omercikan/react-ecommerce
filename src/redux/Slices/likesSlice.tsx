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
            const findLikesItem = state.likes.find((product) => product.id == action.payload.id);

            if(findLikesItem) {
                state.likes = state.likes.filter((likeItem) => likeItem.id !== action.payload.id);
            } else {
                state.likes = [...state.likes, action.payload]; 
            }

            localStorage.setItem('likes', JSON.stringify(state.likes));
        },

        removeLikeItem: (state: likesSliceInitialStateTypes, action: PayloadAction<number>) => {
            state.likes = state.likes.filter((likeItem) => likeItem.id !== action.payload);
            localStorage.setItem('likes', JSON.stringify(state.likes));
        }
    }
});

export const { addToLikes, removeLikeItem } = likesSlice.actions;