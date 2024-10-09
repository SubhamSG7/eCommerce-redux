import React from 'react'
import { Carousel } from "@material-tailwind/react";

const Slider = () => {
  return (
    <Carousel className="rounded-xl h-96 w-full">
      <img
        src="https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.istockphoto.com/id/1067203316/photo/woman-hand-hold-shopping-cart-with-abstract-blur-supermarket-aisle-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=H-DqPeTUQezhg95sVfX1OlA_QYZCVZngp9zuVq_evZ4="
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  )
}

export default Slider
 
