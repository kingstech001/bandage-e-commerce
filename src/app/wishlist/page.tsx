'use client';

import { Footer } from '@/components/Footer';
import Wishlist from '@/components/Wishlist'; // Import your existing Wishlist component

const WishlistPage = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
                <Wishlist />
            </div>
            <Footer styles="bg-transparent" />
        </>
    );
};

export default WishlistPage;
