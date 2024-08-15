import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const FeaturePosts = () => {
  return (
    <div className="px-[32px] w-full">
      <div className="my-[80px] w-full">
        <div className="mb-[80px]">
          <h6 className="text-[#23A6F0] text-[14px] text-center font-bold leading-6">
            Practice Advice
          </h6>
          <h2 className="text-[40px] font-bold leading-[50px] text-center text-[#252B42] max-w-[239px] sm:max-w-full m-auto">
            Featured Products
          </h2>
        </div>
        <div className="w-full custom-sm-2:flex max-w-[1146px] m-auto gap-[25px]">
          <div className="shadow flex-1">
            <div className="relative">
              <Image
                src="/images/new-product-1.png"
                width={330}
                height={300}
                alt="image"
                className="w-full"
              />
              <h4 className="absolute top-0 bg-[#E74040] px-[10px] text-[#FFFFFF] text-[14px] font-bold leading-6 rounded m-5">
                NEW
              </h4>
            </div>
            <div className="p-[25px]">
              <div className="flex items-center mt-[25px] gap-[15px]">
                <p className="text-[#8EC2F2] text-[12px] leading-4">Google</p>
                <p className="text-[#737373] text-[12px] leading-4">Trending</p>
                <p className="text-[#737373] text-[12px] leading-4">New</p>
              </div>
              <h4 className="text-[#252B42] text-[20px] font-normal leading-[30px] mt-[10px] max-w-[247px] sm:max-w-full lg:max-w-[247px]">
                Loudest à la Madison #1 (L&apos;intégral)
              </h4>
              <p className="text-[14px] font-normal text-[#737373] leading-5 mt-[10px]">
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              <div className="flex items-center justify-between my-[25px] ">
                <div className="flex items-center">
                  <Image
                    src="/images/clock.png"
                    alt="clock"
                    height={16}
                    width={16}
                  />
                  <small className="text-[12px] font-normal leading-4 text-[#737373]">
                    22 April 2021
                  </small>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/comment.png"
                    alt="clock"
                    height={16}
                    width={16}
                  />
                  <small className="text-[12px] font-normal leading-4 text-[#737373]">
                    10 comments
                  </small>
                </div>
              </div>
              <button className="flex items-center">
                Lean More
                <MdOutlineArrowForwardIos
                  height={16}
                  width={8.6}
                  className="ml-[10px] text-[#23A6F0]"
                />{" "}
              </button>
            </div>
          </div>
          <div className="shadow my-[30px] sm:my-0 flex-1">
            <div className="relative">
              <Image
                src="/images/new-product-2.png"
                width={330}
                height={300}
                alt="image"
                className="w-full"
              />
              <h4 className="absolute top-0 bg-[#E74040] px-[10px] text-[#FFFFFF] text-[14px] font-bold leading-6 rounded m-5">
                NEW
              </h4>
            </div>
            <div className="p-[25px]">
              <div className="flex items-center mt-[25px] gap-[15px]">
                <p className="text-[#8EC2F2] text-[12px] leading-4">Google</p>
                <p className="text-[#737373] text-[12px] leading-4">Trending</p>
                <p className="text-[#737373] text-[12px] leading-4">New</p>
              </div>
              <h4 className="text-[#252B42] text-[20px] font-normal leading-[30px] mt-[10px] max-w-[247px] sm:max-w-full lg:max-w-[247px]">
                Loudest à la Madison #1 (L&apos;intégral)
              </h4>
              <p className="text-[14px] font-normal text-[#737373] leading-5 mt-[10px]">
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              <div className="flex items-center justify-between my-[25px]">
                <div className="flex items-center">
                  <Image
                    src="/images/clock.png"
                    alt="clock"
                    height={16}
                    width={16}
                  />
                  <small className="text-[12px] font-normal leading-4 text-[#737373]">
                    22 April 2021
                  </small>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/comment.png"
                    alt="clock"
                    height={16}
                    width={16}
                  />
                  <small className="text-[12px] font-normal leading-4 text-[#737373]">
                    10 comments
                  </small>
                </div>
              </div>
              <button className="flex items-center">
                Lean More
                <MdOutlineArrowForwardIos
                  height={16}
                  width={8.6}
                  className="ml-[10px] text-[#23A6F0]"
                />{" "}
              </button>
            </div>
          </div>
          <div className="shadow flex-1">
            <div className="relative">
              <Image
                src="/images/new-product-3.png"
                width={330}
                height={300}
                alt="image"
                className="w-full"
              />
              <h4 className="absolute top-0 bg-[#E74040] px-[10px] text-[#FFFFFF] text-[14px] font-bold leading-6 rounded m-5">
                NEW
              </h4>
            </div>
            <div className="p-[25px]">
              <div className="flex items-center mt-[25px] gap-[15px]">
                <p className="text-[#8EC2F2] text-[12px] leading-4">Google</p>
                <p className="text-[#737373] text-[12px] leading-4">Trending</p>
                <p className="text-[#737373] text-[12px] leading-4">New</p>
              </div>
              <h4 className="text-[#252B42] text-[20px] font-normal leading-[30px] mt-[10px] max-w-[247px] sm:max-w-full lg:max-w-[247px]">
                Loudest à la Madison #1 (L&apos;intégral)
              </h4>
              <p className="text-[14px] font-normal text-[#737373] leading-5 mt-[10px]">
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              <div className="flex items-center justify-between my-[25px]">
                <div className="flex items-center">
                  <Image
                    src="/images/clock.png"
                    alt="clock"
                    height={16}
                    width={16}
                  />
                  <small className="text-[12px] font-normal leading-4 text-[#737373]">
                    22 April 2021
                  </small>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/comment.png"
                    alt="clock"
                    height={16}
                    width={16}
                  />
                  <small className="text-[12px] font-normal leading-4 text-[#737373]">
                    10 comments
                  </small>
                </div>
              </div>
              <button className="flex items-center mb-[10px]">
                Lean More
                <MdOutlineArrowForwardIos
                  height={16}
                  width={8.6}
                  className="ml-[10px] text-[#23A6F0]"
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
