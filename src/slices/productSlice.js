import { createSlice, configureStore } from '@reduxjs/toolkit'
import { fetchData,fetchSingleProduct } from '../actions/actions';






const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsData:[], 
    loading:false,
    error:null,
    singleProduct : {}
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }).addCase(fetchSingleProduct.pending,(state,action)=>{
        state.loading = true;
        state.error = null;
      }).
      addCase(fetchSingleProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.singleProduct = action.payload;
      }).addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


  },
 

  
})

// export const { incremented, decremented } = cartSlice.actions
export default productsSlice.reducer


