import {configureStore} from '@reduxjs/toolkit/react';
import {FoodApi} from '../api/FoodApi';
import BookmarkReducer from '../screens/bookmark/BookmarkReducer';

export const store = configureStore({
  reducer: {
    [FoodApi.reducerPath]: FoodApi.reducer,
    bookmark: BookmarkReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(FoodApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
