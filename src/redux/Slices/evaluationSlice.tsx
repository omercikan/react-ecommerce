import { createSlice } from "@reduxjs/toolkit";
import { evaluationSliceInitialStateType } from "../../types/types";

const initialState: evaluationSliceInitialStateType = {
    reviews: JSON.parse(localStorage.getItem('reviews') || '[]')
}

export const evaluationSlice = createSlice({
    name: "evaluationSlice",
    initialState,
    reducers: {
        addReview: (state: evaluationSliceInitialStateType, action) => {
            state.reviews = [...state.reviews, action.payload];
            localStorage.setItem('reviews', JSON.stringify(state.reviews));
        }
    }
});

export const { addReview } = evaluationSlice.actions;