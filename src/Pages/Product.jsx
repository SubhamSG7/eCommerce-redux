import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductPreview from '../components/ProductPreview';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";


export default function Product() {

  const dispatch = useDispatch();

  const { productsData, loading, error } = useSelector((state) => state.products);

  useEffect(()=>{
    dispatch(fetchData("?limit=10"))
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
    <div >
      <h3 className='text-bold text-2xl text-center bg-gray-200 py-5 uppercase'>Products</h3>
      <div className='flex flex-wrap gap-4 justify-center   my-5'>
      {productsData.map((item)=> <ProductPreview item={item}/>)}
      </div>
    </div>
  )
}