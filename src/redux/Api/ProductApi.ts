import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types/types";

const FetchTime = (duration: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export const ProductApi = createApi({
  reducerPath: "DataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    fetchFn: async (...args) => (
      await FetchTime(1000),
      fetch(...args)
    )
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/products",
        method: "GET"
      })
    }),
  }),
});

export const { useFetchProductsQuery } = ProductApi;
