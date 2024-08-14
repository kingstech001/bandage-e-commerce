import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Contactnav = () => {
    return (
        <nav className='hidden custom-md:block bg-[#23856D] text-white'>
            <div className='max-w-full lg:max-w-[1439px] flex text-[8px] items-center justify-between h-auto m-auto px-4 sm:px-8 lg:px-[32px] py-2 sm:py-4 lg:py-[24px] text-xs lg:text-sm'>
                <ul className='flex justify-center items-center gap-4 sm:gap-6 lg:gap-[29.5px]'>
                    <li className='flex items-center gap-2 sm:gap-4 lg:gap-[5px] hover:text-[#a3d8d4] transition-colors duration-300'>
                        <FiPhone size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' />
                        <a href="#"> (225) 555-0118 </a>
                    </li>
                    <li className='flex items-center gap-2 sm:gap-4 lg:gap-[5px] hover:text-[#a3d8d4] transition-colors duration-300'>
                        <TfiEmail size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' />
                        <a href="#"> michelle.rivera@example.com </a>
                    </li>
                </ul>
                <p> Follow Us and get a chance to win 80% off </p>
                <ul className='flex justify-center items-center gap-3 sm:gap-5 lg:gap-[15.5px]'>
                    <li className='text-sm transition-colors duration-300'>
                        <a href="#"> Follow Us : </a>
                    </li>
                    <li className='hover:text-[#a3d8d4] transition-colors duration-300'>
                        <a href="#"><FiInstagram size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                    </li>
                    <li className='hover:text-[#a3d8d4] transition-colors duration-300'>
                        <a href="#"><IoLogoYoutube size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                    </li>
                    <li className='hover:text-[#a3d8d4] transition-colors duration-300'>
                        <a href="#"><FaFacebook size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                    </li>
                    <li className='hover:text-[#a3d8d4] transition-colors duration-300'>
                        <a href="#"><FaTwitter size={18} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Contactnav;
