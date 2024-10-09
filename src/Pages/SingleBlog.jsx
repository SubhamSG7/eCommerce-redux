import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleBlog, fetchSingleProduct } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";
// import SingleBlogCard from '../components/SingleBlogCard';


export default function SingleBlog() {
  const dispatch = useDispatch();
  const { singleBlog, loading, error } = useSelector((state) => state.blog);
  const {id} = useParams()



  
  useEffect(()=>{
    dispatch(fetchSingleBlog(id))
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
   {singleBlog.title && <SingleBlogCard item={singleBlog}/>}
    </>
  )
}