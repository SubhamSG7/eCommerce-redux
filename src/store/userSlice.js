import { createSlice, configureStore } from '@reduxjs/toolkit'





const userSlice = createSlice({
  name: 'user',
  initialState: {
     nameVal:"",
     emailVal:"",
     passVal:""

  },
  reducers: {
        nameHandler:(state,action)=>{
            state.nameVal = action.payload
        }
        ,
        emailHandler:(state,action)=>{
            state.emailVal = action.payload
        },
        passHandler:(state,action)=>{
            state.passVal = action.payload
        }
  },

  
})

export const { nameHandler,emailHandler,passHandler } = userSlice.actions
export default userSlice.reducer

