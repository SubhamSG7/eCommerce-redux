import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {  ref, set } from 'firebase/database';
import { db } from '../firebase-Config/FirebaseConfig';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailHandler, getCredentials, getEmail, getName, getPassword, getValidate, nameHandler, passHandler, setCredentials, validation } from '../slices/userSlice';
import { Link, useNavigate } from "react-router-dom";
import { firebaseConfig } from '../firebase-Config/FirebaseConfig';
import bcrypt from "bcryptjs-react";

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
    const salt = bcrypt.genSaltSync(10)
    dispatch(validation({ type: "signin" }));

    if (validate.length === 0 && name.length > 3 && password.length > 6 && email.length > 4) {
      try {
        const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
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
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
      <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-2">
      <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-slate-500 to-slate-800 lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
          </div>
         
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-16">
          <div className="mb-6">
            <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <div className="relative flex items-center">
                <input name="name" type="text" required value={name} onChange={(e) => dispatch(nameHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
               
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <div className="relative flex items-center">
                <input name="email" type="email" required value={email} onChange={(e) => dispatch(emailHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
              
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input name="password" type="password" required value={password} onChange={(e) => dispatch(passHandler(e.target.value))} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
               
              </div>
            </div>

          
          </div>

          <div className="!mt-12">
            <button type="submit" onSubmit={handleSubmit} className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-slate-700 hover:bg-gray-800 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to="/login" className="text-slate-600 font-semibold hover:underline ml-1">Login here</Link></p>
        </form>
      </div>
    </div>
    </>
  );
}

export default Signup;
