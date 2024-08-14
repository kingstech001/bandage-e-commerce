import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export const AboutUs = () => {
    return (
        <div className="bg-[#FAFAFA] pt-[103px] pb-[88.8px]">
            <div className="px-[32px] md:flex md:max-w-[1128px] mx-auto">
                <div>
                    <h3 className="text-[#252B42] text-[24px] font-bold leading-8 text-center max-w-[181px] sm:max-w-full mb-[58px] m-auto">What they say about us</h3>
                    <Image src={'/images/designer.png'} height={90} width={90} alt="image" className="block m-auto" />
                    <div className="flex items-center text-[#F3CD03] justify-center my-[20px]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <h6 className="text-[14px] font-bold leading-6 text-[#737373] text-center my-[20px] max-w-[228px] sm:max-w-[451px] m-auto">Slate helps you see how many more days you need to work to reach your financial goal.</h6>
                    <p className="text-[14px] text-[#23A6F0] leading-6 text-center">Regina Miles</p>
                    <p className="text-[#252B42]  font-bold text-[14px] leading-6 text-center">Designer</p>
                </div>
                <div className="grid grid-cols-3 max-w-[364px] gap-[12px] m-auto">
                    <div>
                        <Image src={'/images/aboutus-image-1.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-2.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-3.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-4.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-5.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-6.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-7.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-8.png'} alt="image" width={112} height={112} />
                    </div>
                    <div>
                        <Image src={'/images/aboutus-image-9.png'} alt="image" width={112} height={112} />
                    </div>
                </div>
            </div>
        </div>
    )
}
