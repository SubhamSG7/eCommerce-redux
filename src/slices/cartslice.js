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
      state.cartData = [...state.cartData,{...action.payload,quantity:1}]
    },



    updateCart:function(state,action){
      state.cartData = action.payload
    }
,

deleteFormCart:function(state,action){
      state.cartData = state.cartData.filter((elem) => elem.id !== action.payload)
    }

  },



})

export const {addToCart,updateCart,deleteFormCart } = cartSlice.actions
export default cartSlice.reducer


