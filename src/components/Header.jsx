import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCurrency } from "../actions/actions";
import HashLoader from "react-spinners/HashLoader";
import { currencyChange } from "../slices/currencySlice";


export default function Header() {

  const dispatch = useDispatch();

  const {currencyData,error,loading} = useSelector((state)=>state.currency);

  const currentCurrency = useSelector((state)=>state.currency.currentCurrencyName)


  


  
  
  
  
  
  useEffect(()=>{
    dispatch(fetchCurrency())
    
  },[dispatch])
  
  
  
  if (loading) return <div className='h-[100vh] flex justify-center items-center'> <HashLoader
  color="green"
  loading={loading}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/></div>;
  if (error) return <div>Error: {error}</div>;
  

 const availableCurrency =  currencyData.conversion_rates ? Object.keys(currencyData.conversion_rates): [] 
  

 function currencyHandler(e) {
  dispatch(currencyChange(e.target.value));
}



  return (
    <header className="bg-slate-700 text-white py-4 ">
      <nav className="flex justify-between px-5 ">
        <h1>
          <Link to="/">E-Commerce</Link>
        </h1>
        <ul className="flex gap-5">
          <Link to="/blog">Blogs</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart (0)</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
        <select
          name="currency"
          className="bg-black px-4 rounded cursor-pointer"
          onChange={currencyHandler}
          value={currentCurrency}
     
        >
            {availableCurrency.map((item,index)=> <option key={index} value={item}>{item}</option>)}
        </select>
          <Link to="/signup" className="bg-gray-500 text-white px-6 py-2">SignUp</Link>
      </nav>
    </header>
  );
}
