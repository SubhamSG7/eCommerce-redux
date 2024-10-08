import React, { useContext ,useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchData } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";
import ProductPreview from '../components/ProductPreview';
export default function Home() {


  const dispatch = useDispatch();

  const { productsData, loading, error } = useSelector((state) => state.products);
 
  

  useEffect(()=>{
    dispatch(fetchData("?limit=4"))
  },[dispatch])

  if (loading) return <div className='h-[100vh] flex justify-center items-center'> <HashLoader
  color="green"
  loading={loading}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/></div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className='flex flex-wrap gap-4 justify-center  my-5'>
      home page 
      {productsData.map((item)=> <ProductPreview item={item}/>)}
    </div>
  )
}