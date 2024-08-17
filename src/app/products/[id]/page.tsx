'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product, products } from '@/data/products';
import Link from 'next/link';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import { CgEyeAlt } from 'react-icons/cg';
import { Description } from '@/components/ProductDescription';
import { BestSellers } from '@/components/BestSellers';
import { Footer } from '@/components/Footer';
import { Client } from '@/components/Client';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { CartItem } from '@/types/CartItem';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter();

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const productId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);

  const { dispatch: cartDispatch } = useCart();
  const { dispatch: wishlistDispatch } = useWishlist();

  const productIndex = products.findIndex((p) => p.id === productId);
  const product = products[productIndex];

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    };

    cartDispatch({
      type: 'ADD_TO_CART',
      payload: cartItem,
    });
  };

  const handleAddToWishlist = () => {
    if (product) {
      wishlistDispatch({
        type: 'ADD_TO_WISHLIST',
        payload: { ...product, quantity: 1 },
      });
    }
  };

  const handlePreviousProduct = () => {
    if (productIndex > 0) {
      const prevProduct = products[productIndex - 1];
      router.push(`/products/${prevProduct.id}`);
    }
  };

  const handleNextProduct = () => {
    if (productIndex < products.length - 1) {
      const nextProduct = products[productIndex + 1];
      router.push(`/products/${nextProduct.id}`);
    }
  };

  const handleViewImage = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto bg-white">
      <div className="bg-[#FAFAFA] px-[32px] pb-[48px]">
        <div className="max-w-[1050px] mx-auto">
          <div className="flex items-center justify-center md:justify-start py-[24px] gap-[15px]">
            <Link href={'/'} className="text-[#252B42] font-bold">Home</Link>
            <MdOutlineArrowForwardIos height={16} width={8.6} />
            <Link href={'#'} className="text-[#BDBDBD] text-[14px] font-bold">Shop</Link>
          </div>

          <div className="md:flex gap-[34px]">
            <div className="relative h-[450px] w-full md:w-[506px] z-10">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                objectFit="cover"
                className="rounded mb-4 h-full"
              />
              <div className="absolute flex text-white justify-between px-[35px] w-full top-[200px]">
                <MdOutlineArrowBackIos size={30} onClick={handlePreviousProduct} className="cursor-pointer" />
                <MdOutlineArrowForwardIos size={30} onClick={handleNextProduct} className="cursor-pointer" />
              </div>
            </div>
            <div className="md:pl-[24px] md:pt-[11px] flex-1">
              <h4 className="text-[20px] text-[#252B42] font-normal mb-[5px]">{product.name}</h4>
              <p className="text-[12px] text-gray-500 mb-[5px]">Category: {product.category}</p>
              <div className="flex items-center text-[#F3CD03] my-[20px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <h6 className="text-[14px] text-[#737373] ml-[10px]">10 Reviews</h6>
              </div>
              <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
              <p className="text-[14px] text-[#737373] font-bold mb-4">Availability : <span className="text-[#23A6F0]">{product.availability}</span></p>
              <div>
                <p className="text-[12px] text-[#858585] font-normal mb-[5px] max-w-[271px]">{product.description}</p>
                <div className="mb-[67px] border-t-[1px] border-[#BDBDBD] flex items-center pt-[29px] gap-[10px]">
                  <div className="bg-[#23A6F0] rounded-[100%] w-[30px] h-[30px]"></div>
                  <div className="bg-[#2DC071] rounded-[100%] w-[30px] h-[30px]"></div>
                  <div className="bg-[#E77C40] rounded-[100%] w-[30px] h-[30px]"></div>
                  <div className="bg-[#252B42] rounded-[100%] w-[30px] h-[30px]"></div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button className="bg-[#23A6F0] text-[14px] hover:bg-[#89bedd] py-1 px-4 border-[1px] border-[#E8E8E8] rounded-[5px] text-white font-bold">
                    Select Option
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#FFFFFF] text-[#252B42] hover:bg-[#252B42] hover:text-[#FFFFFF] p-2 rounded-[100%] border-[1px] border-[#E8E8E8]"
                  >
                    <BsCart />
                  </button>
                  <button
                    onClick={handleAddToWishlist}
                    className="bg-[#FFFFFF] text-[#252B42] hover:bg-[#252B42] hover:text-[#FFFFFF] p-2 rounded-[100%] border-[1px] border-[#E8E8E8]"
                  >
                    <IoIosHeartEmpty />
                  </button>
                  <button
                    onClick={handleViewImage}
                    className="bg-[#FFFFFF] text-[#252B42] hover:bg-[#252B42] hover:text-[#FFFFFF] p-2 rounded-[100%] border-[1px] border-[#E8E8E8]"
                  >
                    <CgEyeAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Viewing Product Image */}
      {isImageModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button onClick={handleCloseModal} className="absolute top-4 right-5 text-xl font-bold">X</button>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={400}
              className="rounded max-w-full sm:max-w-[700px]"
            />
          </div>
        </div>
      )}

      <Description />
      <BestSellers />
      <Client />
      <Footer styles="bg-transparent" />
    </div>
  );
};

export default ProductDetail;
