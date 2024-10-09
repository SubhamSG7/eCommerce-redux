import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {  ref, set } from 'firebase/database';
import { db } from '../firebase-Config/FirebaseConfig';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailHandler, getCredentials, getEmail, getName, getPassword, getValidate, nameHandler, passHandler, setCredentials, validation } from '../slices/userSlice';
import { useNavigate } from "react-router-dom";
import { firebaseConfig } from '../firebase-Config/FirebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Signup() {
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const password = useSelector(getPassword);
  const validate = useSelector(getValidate);
  const credentials=useSelector(getCredentials);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(validation({ type: "signin" }));

    if (validate.length === 0 && name.length > 3 && password.length > 6 && email.length > 4) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user=userCredential.user
        await set(ref(db, "Users/" + user.uid), {
          name,
          email,
          password
        });
        dispatch(setCredentials(""));
        navigate("/login");
      } catch (error) {
        console.error("Signup error:", error.message);
        dispatch(setCredentials("Email Aleady Used"))
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder='Name' value={name} onChange={(e) => dispatch(nameHandler(e.target.value))} />
        <br />
        <input type="email" required placeholder='Email' value={email} onChange={(e) => dispatch(emailHandler(e.target.value))} />
        <br />
        <input type="password" placeholder='Password' required value={password} onChange={(e) => dispatch(passHandler(e.target.value))} />
        <br />
        <input type="submit" />
        <br />
        <p>{validate[0]}</p>
        <p>{credentials}</p>
      </form>
    </>
  );
}

export default Signup;
