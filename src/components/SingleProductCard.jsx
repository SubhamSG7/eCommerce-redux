import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

export default function SingleProductCard({ item }) {

  const { currentCurrencyName, currentCurrencyPrice } = useSelector((state) => state.currency)



  return (
    <>
      {item && <div className='bg-white flex gap-20 p-20'>
        <div className='flex flex-col justify-center bg-gray-200 rounded p-20 shadow-lg shadow-gray-500/50' >
          <p className='text-2xl text-gray-500' > <span className='text-gray-800 font-bold '>Title : </span>{item?.title}</p>
          <p className='text-2xl text-gray-500' > <span className='text-gray-800 font-bold '>Category : </span>{item?.category}</p>

          <p className='text-2xl text-gray-500' > <span className='text-gray-800 font-bold '>Brand : </span>{item?.brand}</p>
          <p className='text-2xl text-gray-500' > <span className='text-gray-800 font-bold '>Color : </span>{item?.color}</p>

          <p className='text-2xl text-gray-500' > <span className='text-gray-800 font-bold '>model : </span>{item?.model}</p>
          <p className='text-2xl text-gray-500' ><span className='text-gray-800 font-bold '>Description : </span>{item?.description}</p>
          <p className='text-3xl text-red-500 my-2 ' >{item.discount ? (<><div className='line-through'><span className='text-red-800 font-bold '>Price : </span>{(item?.price * currentCurrencyPrice).toFixed(2)} <span className="text-red-900">{currentCurrencyName}</span></div>
        <div>
        <span className='text-green-800 font-bold '>Price After Discount : </span>{((item?.price-item.discount) * currentCurrencyPrice).toFixed(2)} <span className="text-green-900">{currentCurrencyName}</span>
        </div>
      </>) : (<><span className='line-through text-red-800 font-bold '>Price : </span>{(item?.price * currentCurrencyPrice).toFixed(2)} <span className="text-red-900">{currentCurrencyName}</span></>)}</p>
        </div>
        <div>

        </div>
        <img src={item.image} alt="" srcSet="" className='object-fit w-[30vw]' />
      </div>}
    </>
  )
}
