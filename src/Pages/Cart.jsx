import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartData);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0); // Assuming `price` is a field in your item

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold mb-4">Cart</h2>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="flex flex-wrap md:flex-row">
                {cartItems.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="md:w-1/3 md:ml-4 mt-4 md:mt-0">
              <div className="bg-gray-100 p-4 text-black rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Product Summary</h3>
                <ul>
                 
                </ul>
                <div className="border-t mt-4 pt-2">
                  <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
