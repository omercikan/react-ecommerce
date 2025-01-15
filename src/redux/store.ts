import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./Api/ProductApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartSlice } from "./Slices/cartSlice";
import { isOpenCartSlice } from "./Slices/isOpenCartSlice";
import { likesSlice } from "./Slices/likesSlice";
import { evaluationSlice } from "./Slices/evaluationSlice";

export const MainStore = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    cartSlice: cartSlice.reducer,
    isOpenCartSlice: isOpenCartSlice.reducer,
    likesSlice: likesSlice.reducer,
    evaluationSlice: evaluationSlice.reducer
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ProductApi.middleware);
  },
});

setupListeners(MainStore.dispatch);
export type RootState = ReturnType<typeof MainStore.getState>;
export type AppDispatch = typeof MainStore.dispatch;