import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData, useParams } from 'react-router-dom'
import { fetchData, fetchSingleProduct } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";
import SingleProductCard from '../components/SingleProductCard';


export default function SingleProduct() {

  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector((state) => state.products);
  const {id} = useParams()

 
  
  useEffect(()=>{
    dispatch(fetchSingleProduct(id))
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
<>

    {singleProduct.title &&  <SingleProductCard item={singleProduct} />}
</>
  )
}