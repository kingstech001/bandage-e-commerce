'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileProductDetailNav from './MobileProductDetailNav';
import MobileHomeNav from './MobileNav';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Hide the navbar on Login and Signin pages
    if (pathname.includes('Login') || pathname.includes('Signup')) {
        return null;
    }

    return (
        <div className={`w-full bg-white z-50 transition-transform duration-300 ease-in-out ${isFixed ? 'fixed top-0 left-0' : 'relative'}`}>
            <DesktopNav />
            {pathname.startsWith('/products/') ? (
                <MobileProductDetailNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            ) : (
                <MobileHomeNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            )}
        </div>
    );
};

export default Navbar;
