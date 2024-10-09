import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";



export default function Blog() {
  const dispatch = useDispatch();
  const { blogData, loading, error } = useSelector((state) => state.blog);






  useEffect(()=>{
    dispatch(fetchBlog())
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
    <div>Blog</div>
  )
}