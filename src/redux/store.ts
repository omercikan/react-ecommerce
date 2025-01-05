import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./Api/ProductApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const MainStore = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ProductApi.middleware);
  },
});

setupListeners(MainStore.dispatch);
export type RootState = ReturnType<typeof MainStore.getState>;
export type AppDispatch = typeof MainStore.dispatch;
