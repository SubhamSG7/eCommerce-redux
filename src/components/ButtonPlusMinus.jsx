import React, { useState } from 'react'
import  { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart ,deleteFormCart} from "../slices/cartslice";

const ButtonPlusMinus = ({item}) => {




  const {cartData} = useSelector((state)=>state.cart)

  const dispatch = useDispatch();

  const updateQuantity = (id, type) => {

    
   
        let filterData =  cartData.map((item) => {
            if (item.id === id) {
                const newQuantity = type === "increment" 
                    ? item.quantity + 1 
                    : Math.max(item.quantity - 1, 0); 
                
                return { ...item, quantity: newQuantity };
            }else{

              return item;
            }
          
  })

  
dispatch(updateCart(filterData))

}




  return (
    <div>
        <div className="flex items-center mt-4">
          <button disabled={item.quantity == 1} onClick={()=>updateQuantity(item.id,"decrement")} className="px-2 py-1 border rounded">-</button>
          <span className="mx-2">{item.quantity}</span>
          <button onClick={()=>updateQuantity(item.id,"increment")} className="px-2 py-1 border rounded">+</button>
        </div>
      <button className=" rounded px-4 my-4 py-2 bg-red-500 text-white hover:bg-red-900" onClick={()=>dispatch(deleteFormCart(item.id))}>Delete</button>

    </div>
  )
}

export default ButtonPlusMinus
