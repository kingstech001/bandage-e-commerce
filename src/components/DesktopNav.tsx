// src/components/DesktopNav.tsx

import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa6';
import { IoIosSearch, IoIosArrowDown, IoIosHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { useCart } from '@/context/CartContext'; // Import useCart
import { useWishlist } from '@/context/WishlistContext'; // Import useWishlist


const DesktopNav = () => {
    const { cart } = useCart(); // Access cart from context
    const { wishlist } = useWishlist(); // Access wishlist from context
    
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity in cart
    const wishlistQuantity = wishlist.length; // Get the total number of items in wishlist

    return (
        <div className='hidden md:flex justify-between lg:max-w-[1439px] md:px-[32px] md:py-[24px] m-auto'>
            <div className='flex items-center gap-[50px] lg:gap-[119px]'>
                <div>
                    <Link href="/">
                        <Image src="/images/Bandage.png" height={32} width={108} alt='logo' className='max-w-[70px] md:max-w-full' />
                    </Link>
                </div>
                <ul className="flex items-center space-x-4 text-[8px] lg:text-sm">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                    </li>
                    <li className='flex items-center'>
                        <Link href="/products" className="text-gray-700 hover:text-blue-500">Shop</Link>
                        <IoIosArrowDown className='ml-1 text-gray-700 hover:text-blue-500' />
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
                    </li>
                    <li>
                        <Link href="/pages" className="text-gray-700 hover:text-blue-500">Pages</Link>
                    </li>
                </ul>
            </div>

            <ul className="hidden md:flex items-center space-x-4 text-[#23A6F0]">
                <div className='flex items-center'>
                    <div className='flex items-center mr-1'>
                        <FaRegUser className='mr-1 text-[#23A6F0] hover:text-blue-700' />
                        <li>
                            <Link href="/login" className="text-[#23A6F0] hover:text-blue-700">Login</Link>
                        </li>
                    </div>
                    /
                    <li className='ml-1'>
                        <Link href="/signup" className="text-[#23A6F0] hover:text-blue-700">Register</Link>
                    </li>
                </div>
                <li>
                    <IoIosSearch className='text-[#23A6F0] hover:text-blue-700' />
                </li>
                <li className='flex items-center'>
                    <Link href="/cart" className="text-[#23A6F0] hover:text-blue-700">
                        <BsCart />
                    </Link>
                    {cartQuantity > 0 && (
                        <span className=" text-[#23A6F0] text-xs  py-1">
                            {cartQuantity}
                        </span>
                    )}
                </li>
                <li className='flex items-center'>
                    <Link href="/wishlist" className="text-[#23A6F0] hover:text-blue-700">
                        <IoIosHeartEmpty className='text-[#23A6F0] hover:text-blue-700' />
                    </Link>
                    {wishlistQuantity > 0 && (
                        
                        <span className="text-[#23A6F0] text-xs py-1">
                            {wishlistQuantity}
                        </span>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default DesktopNav;
