import React, { useContext } from 'react'
import ProductPreview from '../components/ProductPreview';
import Card from '../components/Card';

export default function Home() {

  
  
  return (
    <div className='flex flex-wrap gap-4 justify-center  my-5'>
  <Card/>
      {/* {data.map((item)=> <ProductPreview item={item}/>)} */}
    </div>
  )
}