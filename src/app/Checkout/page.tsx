'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Success from '@/components/Success'; // Import Success component

const Checkout = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const { cart } = useCart();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout Data:', formData, cart);
    // Process checkout (dummy for now)
    setIsSuccessOpen(true); // Show success overlay
  };

  const handleCloseOverlay = () => {
    setIsSuccessOpen(false); // Close the overlay
    router.push('/'); // Optionally redirect to another page
  };

  return (
    <div className="relative max-w-md mx-auto mt-10 h-screen">
      <h2 className="text-2xl mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Confirm Purchase
        </button>
      </form>

      {/* Success Overlay */}
      {isSuccessOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
          <Success onClose={handleCloseOverlay} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
