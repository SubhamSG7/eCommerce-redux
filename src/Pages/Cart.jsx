import React, { useContext, useEffect, useState } from 'react'
import ProductPreview from '../components/ProductPreview'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

export default function Cart() {

  const cartItems = useSelector((state)=>state.cart.cartData)

 
  
  return (
   
    <>
    <h3>Cart Items</h3>
    <div className='cart flex gap-4 justify-center'>
      {cartItems.map((item)=><Card item={item}/>)}
    </div>
    </>
  )
}