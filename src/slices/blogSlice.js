import { createSlice, configureStore } from '@reduxjs/toolkit'
import { fetchBlog , fetchSingleBlog} from '../actions/actions';






const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogData:[], 
    loading:false,
    error:null,
    singleBlog :{}
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogData = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }).addCase(fetchSingleBlog.pending,(state,action)=>{
        state.loading = true;
        state.error = null;
      }).
      addCase(fetchSingleBlog.fulfilled,(state,action)=>{
        state.loading = false;
        state.singleBlog = action.payload;
      }).addCase(fetchSingleBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
 

  
})

// export const { incremented, decremented } = cartSlice.actions
export default blogSlice.reducer


