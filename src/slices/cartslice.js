import { createSlice, configureStore } from '@reduxjs/toolkit'
import { fetchData,fetchBlog } from '../actions/actions';






const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData:[], 
    loading:false,
    error:null,
  },
  reducers: {

    addToCart:function(state,action){
      state.cartData = [...state.cartData,action.payload]
    }

  },



})

export const {addToCart } = cartSlice.actions
export default cartSlice.reducer


