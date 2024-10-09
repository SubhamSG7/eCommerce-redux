import { createSlice, configureStore } from '@reduxjs/toolkit'
import { validate } from 'uuid';




const nameReg=/^[A-Za-z]{3,}$/
const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const userSlice = createSlice({
  name: 'user',
  initialState: {
     nameVal:"",
     emailVal:"",
     passVal:"",
    validate:[]
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
        },
        validation:(state,action)=>{
            const err=[]
            if(!nameReg.test(state.nameVal)) err.push("Name Should be at least 3 Alphabetic Characters");
            if(!passwordReg.test(state.passVal)) err.push("Password will be at least 6 characters and contain alphaNumeric")
            if(!emailRegex.test(state.emailVal)) err.push("Please Check Your Email")
            else{
                state.validate=[];
            }
            if (err.length > 0) {
                state.validate = err; 
            }
        }
  },

  
})
export const getName=(state)=>state.user.nameVal;
export const getEmail=(state)=>state.user.emailVal;
export const getPassword=(state)=>state.user.passVal;
export const getValidate=(state)=>state.user.validate;

export const { nameHandler,emailHandler,passHandler,validation } = userSlice.actions
export default userSlice.reducer

