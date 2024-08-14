// src/context/WishlistContext.tsx

'use client';

import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import { WishlistItem } from '@/types/WishlistItem'; // Define this type as needed

type WishlistState = WishlistItem[];

type Action =
  | { type: 'ADD_TO_WISHLIST'; payload: WishlistItem }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'INIT_WISHLIST'; payload: WishlistItem[] };

const WishlistContext = createContext<{
  wishlist: WishlistState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const wishlistReducer = (state: WishlistState, action: Action): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (!state.find((item) => item.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;
    case 'REMOVE_FROM_WISHLIST':
      return state.filter((item) => item.id !== action.payload);
    case 'INIT_WISHLIST':
      return action.payload;
    default:
      return state;
  }
};

const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      dispatch({ type: 'INIT_WISHLIST', payload: JSON.parse(savedWishlist) });
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, initialized]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export default WishlistProvider;
