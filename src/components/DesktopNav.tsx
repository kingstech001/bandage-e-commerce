import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa6';
import { IoIosSearch, IoIosArrowDown, IoIosHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Product, products } from '@/data/products'; // Import products data

const DesktopNav = () => {
    const { cart } = useCart();
    const { wishlist } = useWishlist();

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistQuantity = wishlist.length;

    useEffect(() => {
        if (searchQuery) {
            setFilteredProducts(
                products.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredProducts([]);
        }
    }, [searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchInputRef.current &&
                dropdownRef.current &&
                !searchInputRef.current.contains(event.target as Node) &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchIconClick = () => {
        setIsSearchOpen(prev => !prev); // Toggle search box visibility
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

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
                    <li className='flex items-center text-gray-700 hover:text-blue-500'>
                        <Link href="/products" >Shop</Link>
                        <IoIosArrowDown className='ml-1'/>
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

            <div className="relative">
                <ul className="hidden md:flex items-center space-x-4 text-[#23A6F0]">
                    <div className='flex items-center'>
                        <div className='flex items-center mr-1 text-[#23A6F0] hover:text-blue-700'>
                            <FaRegUser className='mr-1' />
                            <li>
                                <Link href="/Login" className="">Login</Link>
                            </li>
                        </div>
                        /
                        <li className='ml-1'>
                            <Link href="/Signup" className="text-[#23A6F0] hover:text-blue-700">Register</Link>
                        </li>
                    </div>
                    <li>
                        <button onClick={handleSearchIconClick} className='text-[#23A6F0] hover:text-blue-700'>
                            <IoIosSearch />
                        </button>
                    </li>
                    <li className='flex items-center'>
                        <Link href="/cart" className="text-[#23A6F0] hover:text-blue-700">
                            <BsCart />
                        </Link>
                        {cartQuantity > 0 && (
                            <span className="text-[#23A6F0] text-xs py-1">
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

                {/* Search Box */}
                {isSearchOpen && (
                    <div ref={dropdownRef} className="absolute top-full left-[-20px] bg-white border border-gray-300 shadow-lg w-72 mt-2 p-4 rounded-md z-10 max-h-80 overflow-y-auto scrollbar-hidden">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="w-full border focus:outline-[#23A6F0] focus:border-none rounded-md p-2 mb-2"
                        />
                        {filteredProducts.length > 0 && (
                            <ul className="space-y-1">
                                {filteredProducts.map(product => (
                                    <li key={product.id} className="p-2 border-b border-gray-200 hover:bg-gray-100">
                                        <Link href={`/products/${product.id}`} className="block">
                                            {product.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DesktopNav;
