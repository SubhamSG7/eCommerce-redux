import React, { useState } from 'react'

const ButtonPlusMinus = () => {

  const [quantity, setQuantity] = useState(1);
  return (
    <div>
        <div className="flex items-center mt-4">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 py-1 border rounded">-</button>
          <span className="mx-2">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 border rounded">+</button>
        </div>
    </div>
  )
}

export default ButtonPlusMinus
