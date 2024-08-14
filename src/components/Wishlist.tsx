'use client';

import React from 'react';
import { useWishlist } from '@/context/WishlistContext'; // Adjust the path as needed
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';

const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist(); // Access wishlist and dispatch from context

  const handleRemove = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <button
                        onClick={() => handleRemove(item.id)}
                        className="text-[#23A6F0] text-[12px] flex items-center font-bold"
                      >
                        <MdDelete />
                        REMOVE
                      </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
