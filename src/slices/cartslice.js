import { createSlice, configureStore } from '@reduxjs/toolkit'
import { fetchData,fetchBlog } from '../actions/actions';






const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[], 
    loading:false,
    error:null,
  },
  reducers: {},



})

// export const { incremented, decremented } = cartSlice.actions
export default cartSlice.reducer


