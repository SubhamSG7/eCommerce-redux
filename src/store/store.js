import { configureStore } from '@reduxjs/toolkit'

import cartReducer from "../slices/cartslice";
import userSlice from '../slices/userSlice';
import productsSlice from '../slices/productSlice';
import blogSlice from '../slices/blogSlice';
import currencySlice from '../slices/currencySlice';
export const store = configureStore({
    reducer: {
        cart:cartReducer,
        user:userSlice,
        products:productsSlice,
        blog:blogSlice,
        currency:currencySlice
    }
  })