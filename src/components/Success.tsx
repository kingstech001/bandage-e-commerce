import Image from "next/image";

interface SuccessProps {
  onClose: () => void;
}

const Success = ({ onClose }: SuccessProps) => {
    return (
      <div className="relative max-w-md lg:mx-auto p-6 bg-white rounded shadow-lg text-center mx-[32px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 text-[20px] font-bold"
        >
          x
        </button>
        <h2 className="text-2xl mb-4">Thank You!</h2>
        <Image src={'/images/feedback-success.webp'} width={100} height={100} alt="success" className="block m-auto"/>
        <p>Your purchase was successful. You will receive an email with your order details shortly.</p>
      </div>
    );
};

export default Success;
