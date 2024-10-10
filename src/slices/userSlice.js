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
    validate:[],
    credentials:"",
    loggedUser:null
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
            if(action.payload.type==="signin"){
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
            else{
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
        clearDetails:function(state,action){
            state.nameVal="",
            state.emailVal="",
            state.passVal=""
        },
        setCredentials:function(state,action){
            state.credentials=action.payload
        },
        setLoggedUser:function(state,action){
            state.loggedUser=action.payload;
        }
  },

  
})
export const getName=(state)=>state.user.nameVal;
export const getEmail=(state)=>state.user.emailVal;
export const getPassword=(state)=>state.user.passVal;
export const getValidate=(state)=>state.user.validate;
export const getCredentials=(state)=>state.user.credentials;
export const getLoggedUser=(state)=>state.user.loggedUser;

export const { nameHandler,emailHandler,passHandler,validation ,clearDetails,setCredentials,setLoggedUser } = userSlice.actions
export default userSlice.reducer

