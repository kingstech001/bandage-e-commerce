'use client';

import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Success from '@/components/Success'; // Import Success component
import { Footer } from '@/components/Footer';
import Image from 'next/image';

const Checkout = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; address?: string }>({});
  const { cart } = useCart();
  const router = useRouter();

  const [totalAmount, setTotalAmount] = useState(0);
  const deliveryCharge = 5.00; // Define the delivery charge

  // Calculate the total amount including the delivery charge
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total + deliveryCharge);
  }, [cart]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, address } = formData;
    const newErrors: { name?: string; email?: string; address?: string } = {};

    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!address) newErrors.address = 'Address is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Exit if validation fails
    }

    console.log('Checkout Data:', formData, cart);

    // Process checkout (dummy for now)
    setIsSuccessOpen(true); // Show success overlay

    // Clear form data
    setFormData({ name: '', email: '', address: '' });
    setErrors({}); // Clear errors
  };

  const handleCloseOverlay = () => {
    setIsSuccessOpen(false); // Close the overlay
    router.push('/'); // Optionally redirect to another page
  };

  return (
    <div className='bg-[#FAFAFA]'>
      <div className="relative pt-10 p-[32px] sm:flex justify-between max-w-[700px] mx-auto gap-[16px]">

        <form onSubmit={handleSubmit} className='max-w-md flex-1 bg-[#FFFFFF] p-5 mx-auto'>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 focus:border-none focus:outline-none rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 focus:border-none focus:outline-none rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 focus:border-none focus:outline-none rounded"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
            Confirm Purchase
          </button>
        </form>

        {/* Order Summary */}
        <div className='max-w-md flex-1 bg-[#FFFFFF] p-5 mx-auto'>
          <div className="mb-4 justify-between items-center border-b-[1px] border-[#DCDCDC] pb-[24px]">
            <h3 className="text-lg font-medium mb-2">Order Summary</h3>
            <div className='flex justify-between items-center'>
            <p className="text-xl font-bold text-green-600">Total:</p>
            <p className="text-xl font-bold text-green-600">${totalAmount.toFixed(2)}</p>
            </div>
          </div>
          <p className='text-[#F56666] mx-auto mr-0 text-end text-[14px] max-w-[121px] mb-[34px]'>Including Delivery Charge of ${deliveryCharge.toFixed(2)}</p>
          <div className='mb-[109px] flex items-center gap-4'>
            <Image src={'/images/Paystack.png'} alt='paystack' width={56} height={12} />
            <Image src={'/images/Mastercard.png'} alt='paystack' width={19.43} height={12} />
            <Image src={'/images/Visa.png'} alt='paystack' width={38} height={12} />
          </div>
        </div>
        {/* Success Overlay */}
        {isSuccessOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
            <Success onClose={handleCloseOverlay} />
          </div>
        )}
      </div>
      <Footer styles="bg-white" />
    </div>
  );
};

export default Checkout;
