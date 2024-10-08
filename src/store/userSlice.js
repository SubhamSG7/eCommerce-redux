import { createSlice, configureStore } from '@reduxjs/toolkit'





const userSlice = createSlice({
  name: 'user',
  initialState: {
     nameVal:"name",
     emailVal:"email",
     passVal:"pass"

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
export const getName=(state)=>state.user.nameVal;

export const { nameHandler,emailHandler,passHandler } = userSlice.actions
export default userSlice.reducer

