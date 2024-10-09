import React, { useContext, useEffect, useState } from 'react'
import ProductPreview from '../components/ProductPreview'
import { useSelector } from 'react-redux'

export default function Cart() {

  const cartItems = useSelector((state)=>state.cart.cartData)

 
  
  return (
   
    <>
    <h3>Cart Items</h3>
    <div className='cart flex gap-4 justify-center'>
      {cartItems.map((item)=><ProductPreview item={item}/>)}
    </div>
    </>
  )
}