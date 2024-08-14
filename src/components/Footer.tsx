'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';

interface FooterProps {
    styles: string;
  }

export const Footer = ({ styles }: FooterProps) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };
    return (
        <div>
            <div className={`px-[47px] py-[58px] ${styles}`}>
                <div className='max-w-[1049px] sm:flex items-center justify-between m-auto border-b-[1px] border-[#E6E6E6] pb-[40px]'>
                    <div className='mb-[24px]'>
                        <Link href="/">
                            <Image src={"/images/Bandage.png"} height={32} width={108} alt='logo' className='max-w-[70px] md:max-w-full' />
                        </Link>
                    </div>
                    <ul className='flex items-center gap-3 sm:gap-5 lg:gap-[15.5px]'>
                        <li className='text-[#23A6F0]'>
                            <a href="#"><FiInstagram size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                        </li>
                        <li className='text-[#23A6F0]'>
                            <a href="#"><FaFacebook size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                        </li>
                        <li className='text-[#23A6F0]'>
                            <a href="#"><FaTwitter size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[1050px] m-auto py-[50px] px-[32px]'>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Company Info</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">Carrier</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">We are hiring</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/contact">Blog</Link>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Legal</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">Carrier</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">We are hiring</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/contact">Blog</Link>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Features</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/about">Business Marketing</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">User Analytic</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">Live Chat</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/contact">Unlimited Support</Link>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Resources</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/about">IOS & Android</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">Watch a Demo</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <Link href="/contact">Customers</Link>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <Link href="/contact">API</Link>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Get In Touch</h5>
                    <form onSubmit={handleSubmit} className='flex items-center max-w-[321px]'>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border-none text-gray-700 focus:outline-none  focus:ring-none bg-[#E6E6E6] text-[14px] rounded-l-md"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#23A6F0] text-white text-[14px] hover:bg-[#3a4558] transition duration-200 rounded-r-md"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className='text-[#737373] text-[12px] font-normal'>
                        Lore imp sum dolor Amit
                    </p>
                </ul>

            </nav>
            <div className="bg-[#FAFAFA] py-[25px]">
                <h6 className="text-center text-[#737373]">
                    Project from <a href="https://www.altschoolafrica.com" target='_blank' className="text-[#23A6F0] hover:underline">Alt School</a>
                </h6>
                <p className="text-center text-[#737373] text-[12px] mt-2">
                    Code by <a href="https://github.com/kingstech001"  target='_blank' className="text-[#23A6F0] hover:underline">Kings Tech</a>
                </p>
            </div>

        </div>
    )
}
