import Image from 'next/image';
import { products } from '@/data/products';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export const BestSellers = () => {
  // Filter the products to only include bestsellers
  const bestSellers = products.filter(product => product.bestseller);

  const pathname = usePathname();

  return (
    <div className='bg-[#FAFAFA] hidden md:block pt-[48px]'>
      {pathname.startsWith('/cart') ? (
                <h3 className='text-[24px] text-[#252B42] max-w-[1146px] m-auto px-[32px]'>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
            ) : (
              <h3 className='text-[24px] text-[#252B42] max-w-[1146px] m-auto px-[32px]'>BESTSELLER PRODUCTS</h3>
            )}
      
      <div className=' md:grid grid-cols-auto-fill min-w-[200px] max-w-[1146px]  p-[24px] m-auto gap-[30px] border-t-[1px] border-[#ECECEC]'>
        {bestSellers.map(product => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="mb-6">
              <div>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={506}
                  height={450}
                  objectFit="cover"
                  className="rounded mb-4 h-full"
                />
              </div>
              <h3 className="text-[24px] font-bold text-[#252B42]">{product.name}</h3>
              <p className="text-[14px] font-normal text-[#737373]">{product.category}</p>
              <div className="flex items-center gap-1">
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
    </div>
  );
};
