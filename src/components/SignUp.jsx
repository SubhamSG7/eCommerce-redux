import { initializeApp } from 'firebase/app'
import { getDatabase, set, ref } from "firebase/database"
import React from 'react'
import { firebaseConfig } from '../firebase-Config/FirebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { emailHandler, getEmail, getName, getPassword, getValidate, nameHandler, passHandler, validation } from '../slices/userSlice'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom"

function Signup() {
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const password = useSelector(getPassword);
  const validate = useSelector(getValidate);
  const dispatch = useDispatch();
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const navigate = useNavigate();
  
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(validation())
    if(validate.length===0 && name.length>3 && password.length>6 && email.length>4){
      const id = uuidv4();
      try {
        let resp = await set(ref(db, "users/" + id), {
          name,
          email,
          password
        })
        navigate("/login")
      } catch (error) {
        console.log(error);
  
      }
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type="text" required placeholder='Name' value={name} onChange={(e) => dispatch(nameHandler(e.target.value))} />
        <br />
        <input type="email" required placeholder='Email' value={email} onChange={(e) => dispatch(emailHandler(e.target.value))} />
        <br />
        <input type="password" placeholder='Password' required value={password} onChange={(e) => dispatch(passHandler(e.target.value))} />
        <br />
        <input type="submit" />
        <br />
        <p>{validate[0]}</p>
      </form>
    </>
  )
}

export default Signup
