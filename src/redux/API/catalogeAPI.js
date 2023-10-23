import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRef, useRef } from "react";
export const catalogeAPI = createApi({
  reducerPath: "catalog",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api2.comtrading.ua/" }),
  tagTypes: ["Catalog"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "categories",
      providesTags: ["Catalog"],
    }),
  }),
});

export const productsAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api2.comtrading.ua/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
      transformResponse: (response, meta, arg) =>
          response.products.map((el, index) => {
          return { ...el, prodIndex: index };
        })
    }),
  }),
});

export const { useGetAllCategoriesQuery } = catalogeAPI;
export const { useGetAllProductsQuery } = productsAPI;
