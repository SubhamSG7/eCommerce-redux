import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart ,deleteFormCart} from "../slices/cartslice";

export default function ProductUpdateButtons({item}) {


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
   <>
    <div className="my-3">
      <button onClick={()=>updateQuantity(item.id,"increment")} className="px-4 py-2 mx-2  bg-slate-700 rounded text-white ">+</button>
      <span>{item.quantity}</span>
      <button  disabled={item.quantity == 1} onClick={()=>updateQuantity(item.id,"decrement")} className="px-4 py-2 mx-2 bg-slate-700 rounded text-white ">-</button>
    </div>
      <button className=" rounded px-4 py-2 bg-red-500 text-white hover:bg-red-900" onClick={()=>dispatch(deleteFormCart(item.id))}>Delete</button>
   </>
  );
}