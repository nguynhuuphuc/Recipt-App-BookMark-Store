import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ResponseCategories, ResponseMeal} from './Type';

export const FoodApi = createApi({
  reducerPath: 'FoodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: builder => ({
    getTrendingMeal: builder.query<ResponseMeal, void>({
      query: () => 'search.php?s=a',
    }),
    getCategories: builder.query<ResponseCategories, void>({
      query: () => 'categories.php',
    }),
    getDetailMeal: builder.query<ResponseMeal, string>({
      query: id => `lookup.php?i=${id}`,
    }),
  }),
});

export const {
  useGetTrendingMealQuery,
  useGetCategoriesQuery,
  useGetDetailMealQuery,
} = FoodApi;
