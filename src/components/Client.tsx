import Image from "next/image"

export const Client = () => {
  return (
    <div className="flex flex-wrap items-center gap-[30px] justify-center bg-[#FAFAFA] py-[110px] md:py-[75px]">
        <Image src={'/images/client-1.png'} width={153} height={20} alt="client"/>
        <Image src={'/images/client-2.png'} width={153} height={20} alt="client"/>
        <Image src={'/images/client-3.png'} width={153} height={20} alt="client"/>
        <Image src={'/images/client-4.png'} width={153} height={20} alt="client"/>
        <Image src={'/images/client-5.png'} width={153} height={20} alt="client"/>
        <Image src={'/images/client-6.png'} width={153} height={20} alt="client"/>
    </div>
  )
}
