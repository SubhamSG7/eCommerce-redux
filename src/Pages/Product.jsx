import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductPreview from '../components/ProductPreview';

export default function Product() {
  
  return (
    <div className='flex flex-wrap gap-4 justify-center  my-5'>
      {/* {data.map((item)=> <ProductPreview item={item}/>)} */}
    </div>
  )
}