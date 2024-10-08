import React, { useContext } from 'react'

import ProductPreview from '../components/ProductPreview';
import Card from '../components/Card';

import {useSelector} from "react-redux"


export default function Home() {

  const data = useSelector((state)=>state.cart.cart)
  
  return (
    <div className='flex flex-wrap gap-4 justify-center  my-5'>
  <Card/>
      {/* {data.map((item)=> <ProductPreview item={item}/>)} */}
    </div>
  )
}