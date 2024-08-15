'use client'
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const { cart } = useCart();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout Data:', formData, cart);
    // Process checkout (dummy for now)
  };

  return (
    <div className="max-w-md mx-auto mt-10">
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
    </div>
  );
};

export default Checkout;
