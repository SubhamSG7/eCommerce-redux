import React, { useContext } from 'react'
import {useSelector} from "react-redux"

export default function Home() {

  const data = useSelector((state)=>state.cart.cart)
  
  return (
    <div className='flex flex-wrap gap-4 justify-center  my-5'>
      home page 
      {/* {data.map((item)=> <ProductPreview item={item}/>)} */}
    </div>
  )
}