import { createSlice, configureStore } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[] 
  },
  reducers: {
    
  },
  
})

// export const { incremented, decremented } = cartSlice.actions
export default cartSlice.reducer


