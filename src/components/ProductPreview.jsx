import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ProductPreview({ item }) {


  const {currentCurrencyName,currentCurrencyPrice} = useSelector((state)=>state.currency)

  return (
    <div className="flex flex-col text-center w-1/5 border border-black p-4">
      <img src={item.image} className="object-fit   m-auto " alt="" srcset="" />
      <h3>{item.title}</h3>
      <p>{item.category}</p>
      <p>{(item.price * currentCurrencyPrice ).toFixed(2)} <span className="px-2 text-red-400 ">( {currentCurrencyName} )</span> </p>
    </div>
  );
}