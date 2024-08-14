'use client';

import { Footer } from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/types/CartItem';
import Image from 'next/image';
import Link from 'next/link';
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const { cart, dispatch } = useCart(); // Access cart and dispatch from context

  const handleRemove = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleIncreaseQuantity = (productId: number) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productId });
  };

  const handleDecreaseQuantity = (productId: number) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productId });
  };

  return (
    <div className='bg-[#FAFAFA]'>
      <div className='max-w-[654px] bg-[#FFFFFF]'>

        <h3 className='text-[24px] text-[#121517] font-semibold'>Shopping Cart</h3>
        <div className="max-w-4xl mx-auto p-4 border-b-[1px] border-[#DCDCDC]">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          {cart.length === 0 ? (
            <div>
              <p>Your cart is empty.</p>
              <Link href="/products">
                <span className="text-blue-500 cursor-pointer">Continue Shopping</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {cart.map((item: CartItem) => (
                <div key={item.id} className="flex items-center p-4 ">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <h2 className="text-[10px] font-normal text-[#2BA501]">{item.availability}</h2>
                    <div>
                      
                    </div>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2 gap-[16px]">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="bg-[#E8EAEC]  w-[28px] h-[28px] rounded-[100%] text-[#3A3C3E]"
                      >
                        -
                      </button>
                      <span className="px-4 border-[0.5px] border-[#3A3C3E] rounded-[4px]">{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="bg-[#23A6F0] w-[28px] h-[28px] rounded-[100%] text-[#FCFCFC]"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-[#23A6F0] text-[12px] mt-2 flex items-center font-bold"
                    >
                      <MdDelete/>
                      REMOVE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cart.length > 0 && (
            <div className="mt-6">
              <Link href="/checkout">
                <span className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
                  Proceed to Checkout
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer styles="bg-transparent" />
    </div>
  );
};

export default CartPage;
