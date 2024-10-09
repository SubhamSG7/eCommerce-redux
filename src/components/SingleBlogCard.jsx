import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleBlogCard({item}) {
  
  return (
    <div className='border  h-[20rem] flex align-center justify-center flex-col text-center gap-20 m-5  cursor-pointer'>
         <Link to={`/blog/${item.id}`}> <div className='font-semibold text-4xl'>
          <h3> {item.title}</h3>
          <p className='wrap text-gray-800 text-2xl'  >{item.body}</p>
          </div></Link>
    </div>
  )
}
