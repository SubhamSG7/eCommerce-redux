import { createSlice } from '@reduxjs/toolkit'
import { fetchCurrency } from '../actions/actions';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencyData:[], 
    loading:false,
    error:null,
    currentCurrencyName : "INR",
    currentCurrencyPrice : "1",
  },
  reducers: {
    currencyChange : function(state,action){
            state.currentCurrencyName = action.payload
            state.currentCurrencyPrice = state.currencyData.conversion_rates[action.payload]
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.currencyData = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
 

  
})

export const { currencyChange } = currencySlice.actions
export default currencySlice.reducer


