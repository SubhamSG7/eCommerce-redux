import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartslice";
import userSlice from './userSlice';
export const store = configureStore({
    reducer: {
        cart:cartReducer,
        user:userSlice
    }
  })