import { createSlice, configureStore } from '@reduxjs/toolkit'

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/photos')
    const data = await res.data
    return data
  }
)


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[] 
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false
      state.contents = action.payload
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
  
})

// export const { incremented, decremented } = cartSlice.actions
export default cartSlice.reducer


