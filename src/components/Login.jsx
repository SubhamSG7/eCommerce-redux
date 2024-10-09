import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetails, emailHandler, getCredentials, getEmail, getPassword, getValidate, passHandler, setCredentials, validation } from '../slices/userSlice';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-Config/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {  Link, useNavigate } from 'react-router-dom';

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
      {/* <form onSubmit={handleLogin}>
        <input type="email" placeholder='email...' required onChange={(e) => dispatch(emailHandler(e.target.value))} value={email} />
        <br />
        <input type="password" placeholder='password...' required onChange={(e) => dispatch(passHandler(e.target.value))} value={password} />
        <br />
        <input type="submit" />
        <br />
        <p>{validate[0]}</p>
        <p>{credentials}</p>
      </form> */}
      <form onSubmit={handleLogin} className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" onChange={(e) => dispatch(emailHandler(e.target.value))} value={email} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required onChange={(e) => dispatch(passHandler(e.target.value))} value={password} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" onSubmit={handleLogin} className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-md text-gray-500 mr-4">
      Access to user
      <Link to="/signUp" className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500 ml-2">Sign Up</Link>
    </p>
  </div>
</form>
    </>
  )
}

export default Login
