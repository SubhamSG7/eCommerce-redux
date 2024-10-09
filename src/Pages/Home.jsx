import React, { useContext ,useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchData } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";
import Card from '../components/Card';
import Slider from '../components/Slider';
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
    <>
    <Slider/>
    <h3 className='text-4xl font-bold text-cyan-700 text-center mb-3 mt-8'>Featured Components</h3>
    <div className=" ml-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
     
    {productsData.map((item)=> <Card key={item.id} item={item}/>)}
    </div>
    </>
   
  )
}