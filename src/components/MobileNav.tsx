import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import Image from 'next/image';
import { Product, products } from '@/data/products'; // Import your products data

const MobileHomeNav = ({ isMenuOpen, toggleMenu }: any) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <nav className='flex justify-between md:hidden items-start px-[32px] py-[24px]'>
            <div>
                <Link href="/">
                    <Image src={"/images/Bandage.png"} height={32} width={108} alt='logo' className='max-w-[70px] md:max-w-full' />
                </Link>
            </div>
            {isMenuOpen && (
                <ul className="w-full bg-[#FFFFFF] flex flex-col items-center space-y-4 py-[82px] text-[#737373] text-[30px] font-normal gap-[30px]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Product</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            )}
            <div className="relative">
                <div className="flex items-center gap-[15px]">
                    <button onClick={handleSearchIconClick}>
                        <IoIosSearch height={24} width={24} />
                    </button>
                    <Link href="/cart">
                        <BsCart height={24} width={24} />
                    </Link>
                    <button onClick={toggleMenu}>
                        <FiBarChart height={24} width={24} className="transform -rotate-90" />
                    </button>
                </div>

                {/* Search Box */}
                {isSearchOpen && (
                    <div ref={dropdownRef} className="absolute top-[35px] right-[-32px] bg-white border-[0.5px] border-gray-300 shadow-lg w-screen  mt-2 rounded-md z-10 max-h-80 overflow-y-auto scrollbar-hidden">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="w-full border-none focus:outline-[#23A6F0] focus:border-none rounded-md p-2"
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
        </nav>
    );
};

export default MobileHomeNav;
