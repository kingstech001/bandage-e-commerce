import Image from "next/image"

export const Services = () => {
    return (
        <div>
            <div className="my-[80px]">
            <h4 className="text-[#737373] text-[20px] font-semibold leading-[30px] text-center">Featured Products</h4>
            <h3 className="text-[24px] text-center leading-[32px] font-bold">THE BEST SERVICES</h3>
            <p className="text-[14px] font-semibold leading-[20px] text-center max-w-[196px] sm:max-w-full m-auto text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>
            <div className="sm:flex sm:gap-[36.5px] items-start mx-[32px] sm:justify-center">
                <div>
                    <Image src={'/images/EasyWin.png'} height={72} width={72} alt="icon"  className="block m-auto"/>
                    <h3 className="text-[24px] font-bold leading-8 text-center text-[#252B42]">Easy Wins</h3>
                    <p className="text-[14px] leading-5 text-center max-w-[223px] m-auto text-[#737373]">Get your best looking smile now!</p>
                </div>
                <div className="my-[30px] sm:my-0">
                    <Image src={'/images/Concrete.png'} height={72} width={72} alt="icon" className="block m-auto"/>
                    <h3 className="text-[24px] font-bold leading-8 text-center text-[#252B42]">Concrete</h3>
                    <p className="text-[14px] leading-5 text-center max-w-[223px] m-auto text-[#737373]">Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div>
                    <Image src={'/images/hackGrowth.png'} height={72} width={72} alt="icon" className="block m-auto"/>
                    <h3 className="text-[24px] font-bold leading-8 text-center text-[#252B42]">Hack Growth</h3>
                    <p className="text-[14px] leading-5 text-center max-w-[225px] m-auto text-[#737373]">Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </div>
    )
}
