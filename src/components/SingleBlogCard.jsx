import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleBlogCard({item}) {
  
  return (
    <div className='border border-gtay-500 h-[20rem] flex align-center justify-center flex-col text-center gap-20 m-5 hover:text-white hover:bg-blue-300 cursor-pointer'>
         <Link to={`/blog/${item.id}`}> <div className='text-3xl'>
          <h3>Title : {item.title}</h3>
          <p className='wrap text-gray-500 text-2xl'  >Body : {item.body}</p>
          </div></Link>
    </div>
  )
}
