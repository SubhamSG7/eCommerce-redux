import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetails, emailHandler, getCredentials, getEmail, getPassword, getValidate, passHandler, setCredentials, validation } from '../slices/userSlice';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-Config/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  const password = useSelector(getPassword);
  const validate = useSelector(getValidate);
  const credentials=useSelector(getCredentials);
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const navigate=useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    dispatch(validation({ type: "login" }))
    if (validate.length === 0 && email.length > 4 && password.length > 6) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        if(token){
          dispatch(clearDetails())
          dispatch(setCredentials(""))
          navigate(-1)
        }
      } catch (error) {
        console.error('Login error:', error.message)
        dispatch(setCredentials("Invalid Credentials"))
      }
    }
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='email...' required onChange={(e) => dispatch(emailHandler(e.target.value))} value={email} />
        <br />
        <input type="password" placeholder='password...' required onChange={(e) => dispatch(passHandler(e.target.value))} value={password} />
        <br />
        <input type="submit" />
        <br />
        <p>{validate[0]}</p>
        <p>{credentials}</p>
      </form>
    </>
  )
}

export default Login
