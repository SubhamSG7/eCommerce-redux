import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

export default function SingleProductCard({item}) {

  const {currentCurrencyName,currentCurrencyPrice} = useSelector((state)=>state.currency)
  

    
  return (
   <>
    {item && <div className='bg-white flex gap-20 p-20'>
      <div className='flex flex-col justify-center bg-gray-200 rounded p-20 shadow-lg shadow-gray-500/50' >
      <p className='text-2xl text-gray-500' > <span className='text-gray-800 font-bold '>Title : </span>{item?.title}</p>
      <p className='text-2xl text-gray-500' > <span className='text-gray-800 font-bold '>Category : </span>{item?.category}</p>
          <p className='text-2xl text-gray-500' ><span className='text-gray-800 font-bold '>Rating : </span>{item?.title}</p>
          <p className='text-2xl text-gray-500' ><span className='text-gray-800 font-bold '>Available : </span>{item?.rating.count}</p>
          <p className='text-2xl text-gray-500' ><span className='text-gray-800 font-bold '>Rating : </span>{(item?.rating.rate * currentCurrencyPrice).toFixed(2)}</p>
          <p className='text-2xl text-gray-500' ><span className='text-gray-800 font-bold '>Description : </span>{item?.description}</p>
          <p className='text-3xl text-red-500 my-2' ><span className='text-red-800 font-bold '>Price : </span>{(item?.price * currentCurrencyPrice).toFixed(2)} <span className="text-red-900">{currentCurrencyName}</span></p>
      </div>
      <div>
          
      </div>
      <img src={item.image} alt="" srcSet="" className='object-fit w-[30vw]'  />
  </div>}
   </>
  )
}
