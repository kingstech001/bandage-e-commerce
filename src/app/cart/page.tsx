'use client';

import { BestSellers } from '@/components/BestSellers';
import { Footer } from '@/components/Footer';
import OrderSummary from '@/components/OrderSummary';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/types/CartItem';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa6';
import { MdDelete, MdOutlineArrowForwardIos } from "react-icons/md";

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
    <>
      <div className='bg-[#FAFAFA] px-[32px]'>
        <div className="flex items-center justify-center md:justify-start py-[24px] gap-[15px] max-w-[1161px] lg:mx-auto md:ml-[100px]">
          <Link href={'/'} className="text-[#252B42] font-bold">Home</Link>
          <MdOutlineArrowForwardIos height={16} width={8.6} />
          <Link href={'/products'} className="text-[#252B42] text-[14px] font-bold">Shop</Link>
          <MdOutlineArrowForwardIos height={16} width={8.6} />
          <Link href={'#'} className="text-[#BDBDBD] text-[14px] font-bold">Shopping Cart</Link>
        </div>
        <div className='max-w-[1161px] mx-auto lg:flex gap-[56px]'>

          <div className='max-w-[654px] bg-[#FFFFFF] flex-1 mx-auto'>
            <div className="p-4 rounded-[4px]">
              <h3 className='text-[24px] text-[#121517] font-semibold'>Shopping Cart</h3>
              <div className='hidden md:flex items-center justify-between bg-[#3B4148] rounded-tr-[4px] rounded-tl-[4px] shadow-[#00000024] px-[24px] py-[17px] mt-[16px] mb-[32px]'>
                <p className='text-[14px] text-[#FEFEFE] font-semibold'>Item Details</p>
                <p className='text-[14px] text-[#FEFEFE] font-semibold'>Quantity</p>
                <p className='text-[14px] text-[#FEFEFE] font-semibold'>Price</p>
              </div>
              {cart.length === 0 ? (
                <div className='flex flex-col items-center'>
                  <p className='mb-1'>Your cart is empty</p>
                  <Link href="/products">
                    <span className="text-[#23A6F0] cursor-pointer border border-[#23A6F0] p-1 rounded-[4px]">Continue Shopping</span>
                  </Link>
                </div>
              ) : (
                <div className="">
                  {cart.map((item: CartItem) => (
                    <>
                      <div key={item.id} className="flex items-center">
                        <div className='flex items-center'>
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="rounded-lg w-[133px] h-[103.9px] md:w-[100px] md:h-[75px]"
                          />
                          <div>
                            <h2 className="text-[18.85px] md:text-[12px] font-bold">{item.name}</h2>
                            <div className='flex items-center md:hidden gap-[5px]'>
                              <p className="text-gray-600 text-[16px]">${item.price.toFixed(2)}</p>
                              <p className='text-[#6C6C6C] text-[10.25px]'>${item.price.toFixed(2)} X {item.quantity}item</p>
                            </div>
                            <h2 className="text-[14px] md:text-[10px] font-normal text-[#2BA501]">{item.availability}</h2>
                            <div className='flex text-[14px] items-center md:text-[18px] text-[#F3CD03]'>
                              <FaStar size={14} />
                              <FaStar size={14} />
                              <FaStar size={14} />
                              <FaStar size={14} />
                              <p className='text-[#3A3C3E] text-[8px]'>28 Reviews</p>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <div className='hidden md:flex md:flex-row-reverse justify-between text-[16px]'>
                            <div className='flex   gap-[5px] md:flex-col'>
                              <p className="text-gray-600">${item.price.toFixed(2)}</p>
                              <p className='text-[#6C6C6C] text-[10.25px]'>${item.price.toFixed(2)} X {item.quantity} item</p>
                            </div>
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
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between  items-center md:justify-start max-w-full mx-auto px-[20px] border-b-[1px] border-[#DCDCDC] pb-[8px] mb-[32px] mt-[20px]'>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-[#23A6F0] text-[12px] flex items-center font-bold"
                        >
                          <MdDelete />
                          REMOVE
                        </button>
                        <div className="flex items-center mt-2 gap-[16px] md:hidden">
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

                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
          {cart.length > 0 && (
            <div className="flex-1 mx-auto">
              <OrderSummary deliveryCharge={5.99} />
            </div>
          )}
        </div>
        <BestSellers />
      </div>
      <Footer styles="bg-transparent" />
    </>
  );
};

export default CartPage;
