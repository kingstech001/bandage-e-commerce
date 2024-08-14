import { products } from '@/data/products';
import Image from 'next/image';

export const Description = () => {

    return (
        <div className='hidden md:block px-[32px]'>
            <nav className='flex items-center gap-[48px] justify-center list-none py-[34px] font-bold text-[#737373]'>
                <li>Description</li>
                <li>Aditional Information</li>
                <li>Review <span className='text-[#23856D]'>(0)</span></li>
            </nav>
            <div className=' md:flex max-w-[1056px] m-auto pb-[48px]'>
                <div>
                    <h3 className="text-[24px] font-bold text-[#252B42] mb-[30px]">The quick fox jumps over</h3>

                    <p className="text-[14px] font-normal text-[#737373] mb-[30px]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>

                    <p className="text-[14px] font-normal text-[#737373] border-l-[3px] border-[#23856D] pl-[24px] mb-[30px]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>

                    <p className="text-[14px] font-normal text-[#737373]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                </div>
                <div className="relative h-[450px] w-full">
                    <Image
                        src={'/images/description-image.svg'}
                        alt={'image'}
                        fill
                        objectFit="cover"
                        className="rounded mb-4"
                    />
                </div>
            </div>
        </div>
    );
};
