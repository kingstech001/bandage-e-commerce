import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import Image from 'next/image';
import { FiBarChart } from "react-icons/fi";
import { useCart } from '@/context/CartContext'; // Import useCart
import { useWishlist } from '@/context/WishlistContext'; // Import useWishlist

const MobileProductDetailNav = ({ isMenuOpen, toggleMenu }: any) => {
    const { cart } = useCart(); // Access cart from context
    const { wishlist } = useWishlist(); // Access wishlist from context

    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity in cart
    const wishlistQuantity = wishlist.length; // Get the total number of items in wishlist

    return (
        <nav className='md:hidden'>
            <div className='flex justify-between items-start px-[32px] py-[24px]'>
                <div>
                    <Link href="/">
                        <Image src={"/images/Bandage.png"} height={32} width={108} alt='logo' className='max-w-[70px] md:max-w-full' />
                    </Link>
                </div>
                <div className="flex items-center gap-[15px]">
                    <button onClick={toggleMenu}>
                        <FiBarChart height={24} width={24} className="transform -rotate-90" />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='w-full bg-[#FFFFFF] flex flex-col items-center space-y-4 text-[#737373] text-[30px] font-normal pt-4'>
                    <ul className="flex-1 flex flex-col items-center gap-[10px]">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Shop</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/pages">Pages</Link></li>
                    </ul>
                    <ul className="flex flex-col items-center text-[#23A6F0] text-[30px] space-y-4 pt-4">
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <FaRegUser className='mr-1' />
                                <li><Link href="/Login">Login</Link></li>
                            </div>
                            /
                            <li><Link href="/Signup">Register</Link></li>
                        </div>
                        <li><IoIosSearch className='m-auto' /></li>
                        <li className='flex items-center gap-[2px]'><Link href="/cart" className="text-[#23A6F0] hover:text-blue-700">
                        <BsCart />
                    </Link>
                    {cartQuantity > 0 && (
                        <span className=" text-[#23A6F0] text-[20px]  py-1">
                            {cartQuantity}
                        </span>
                    )}</li>
                        <li className='flex items-center gap-[2px]'>
                    <Link href="/wishlist" className="text-[#23A6F0] hover:text-blue-700">
                        <IoIosHeartEmpty className='text-[#23A6F0] hover:text-blue-700' />
                    </Link>
                    {wishlistQuantity > 0 && (
                        
                        <span className="text-[#23A6F0] text-[20px] py-1">
                            {wishlistQuantity}
                        </span>
                    )}
                </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default MobileProductDetailNav;
