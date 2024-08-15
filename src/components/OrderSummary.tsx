import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

interface OrderSummaryProps {
  deliveryCharge: number; // Pass this value as a prop
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ deliveryCharge }) => {
  const { cart } = useCart(); // Access `cart` directly
  const { user } = useAuth();
  const router = useRouter();

  // Define types for cart items and accumulator
  type CartItem = {
    price: number;
    quantity: number;
  };

  // Calculate total items in the cart
  const totalItems = useMemo(() => {
    return cart.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
  }, [cart]);

  // Calculate subtotal price of items in the cart
  const subtotal = useMemo(() => {
    return cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);
  }, [cart]);

  // Calculate total price including delivery charges
  const totalPrice = subtotal;

  // Handle checkout process based on user authentication
  const handleCheckout = () => {
    if (user) {
      router.push('/Checkout');
    } else {
      router.push('/Login');
    }
  };

  return (
    <div className="bg-white p-[32px]  rounded-[4px] max-w-sm mx-auto flex-1">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-[16px] text-[#3A3C3E] font-bold">Order Summary</h2>
        <p className="text-gray-700"><span className="font-bold">{totalItems} {' '}</span>Items</p>
      </div>
      <div className="mb-2 flex justify-between items-start py-[24px]">
        <p className="text-gray-700 ">Delivery Charges</p>
        <span className="font-bold text-[#F56666] max-w-[127px] text-[10px] text-end">Add your delivery address to checkout to see delivery charges.</span>
      </div>
      <div className="mb-2 flex justify-between items-center border-t-[1px] border-[#DCDCDC] py-[24px]">
        <p className="text-[#3A3C3E]">Subtotal</p>
        <span className=" text-[#3A3C3E]">${subtotal.toFixed(2)}</span>
      </div>
      <hr className="my-4" />
      <div className="mb-4 flex justify-between items-center border-b-[1px] border-[#DCDCDC] py-[24px]">
        <p className="text-[#121517] text-lg font-bold">Total Price </p>
        <span className="text-[#121517] font-bold">${totalPrice.toFixed(2)}</span>
      </div>
      <p className='text-[#F56666] mx-auto mr-0 text-end text-[14px] max-w-[121px] mb-[34px]'>Excluding Delivery Charges</p>
      <button
        onClick={handleCheckout}
        className="bg-[#23A6F0] text-white w-full py-2 rounded-lg hover:bg-[#89bedd] transition-all mb-[32px]"
      >
        {user ? 'Proceed to Checkout' : 'Sign in to Checkout'}
      </button>
      <div className='mb-[109px] flex items-center gap-4'>
        <Image src={'/images/Paystack.png'} alt='paystack' width={56} height={12}/>
        <Image src={'/images/Mastercard.png'} alt='paystack' width={19.43} height={12}/>
        <Image src={'/images/Visa.png'} alt='paystack' width={38} height={12}/>
      </div>
    </div>
  );
};

export default OrderSummary;
