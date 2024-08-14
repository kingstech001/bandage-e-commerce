import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import Image from 'next/image';

const MobileHomeNav = ({ isMenuOpen, toggleMenu }: any) => {
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
            <div className="flex items-center gap-[15px]">
                <IoIosSearch height={24} width={24} />
                <Link href="/cart">
                    <BsCart height={24} width={24} />
                </Link>
                <button onClick={toggleMenu}>
                    <FiBarChart height={24} width={24} className="transform -rotate-90" />
                </button>
            </div>
        </nav>
    );
};

export default MobileHomeNav;
