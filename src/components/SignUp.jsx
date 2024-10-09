import { initializeApp } from 'firebase/app'
import {getDatabase,set,ref} from "firebase/database"
import React from 'react'
import { firebaseConfig } from '../firebase-Config/FirebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { getName, nameHandler } from '../slices/userSlice'

function Signup() {
  const name=useSelector(getName);
  const dispatch=useDispatch();
  const app=initializeApp(firebaseConfig);
  const db=getDatabase(app);
   async function handleSubmit(e){
      e.preventDefault();
      await set(ref(db,"users/"+email),{

      })
      
    }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type="text" required placeholder='Name' value={name} onChange={(e)=>dispatch(nameHandler(e.target.value))}/>
        <br />
        <input type="email" required placeholder='Email' />
        <br />
        <input type="password" placeholder='Password' />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Signup
