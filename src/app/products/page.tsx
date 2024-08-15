'use client'
import { useState } from 'react';
import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

const ProductsPage = () => {
  const [visibleProducts, setVisibleProducts] = useState(10);

  const handleLoadMore = () => {
    setVisibleProducts((prevCount) => prevCount + 10);
  };

  const isDisabled = visibleProducts >= products.length;

  return (
    <div className="w-full mx-auto my-[20px] block">
      <div className="grid grid-cols-auto-fill min-w-[200px] max-w-[1146px] md:px-[32px] p-[24px] m-auto gap-[30px]">
        {products.slice(0, visibleProducts).map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-white cursor-pointer flex-1 hover:shadow w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full object-cover mb-2 sm:mb-4"
                width={500} 
      height={500} 
              />
              <h2 className="text-[16px] text-center font-bold mb-1 sm:mb-2">{product.name}</h2>
              <p className="text-[14px] text-center leading-6 font-bold mb-2 text-[#737373]">
                {product.category}
              </p>
              <div className="flex items-center justify-center gap-1">
                <p className="text-[14px] text-center text-[#BDBDBD] font-bold mb-2 sm:mb-4">
                  ${product.price2.toFixed(2)}
                </p>
                <p className="text-[14px] text-center text-[#23856D] font-bold mb-2 sm:mb-4">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          disabled={isDisabled}
          className={`border py-2 px-4 rounded-md ${
            isDisabled
              ? 'border-gray-400 text-gray-400'
              : 'border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white max-w-[216px]'
          }`}
        >
          {isDisabled ? 'NO MORE PRODUCTS' : 'LOAD MORE PRODUCTS'}
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
