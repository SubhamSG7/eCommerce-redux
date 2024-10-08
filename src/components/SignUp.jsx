import { initializeApp } from 'firebase/app'
import {getDatabase,set,ref} from "firebase/database"
import React from 'react'
import { firebaseConfig } from '../firebase-Config/FirebaseConfig'

function Signup() {
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
        <input type="text" required placeholder='Name'/>
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
