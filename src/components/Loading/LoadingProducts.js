import React from 'react';
// import Skeleton from 'react-loading-skeleton';

const LoadingProducts = () => {
    return Array(15).fill({}).map(()=>{
          return (
                <div className='animate-pulse w-[250px] mb-20  border-[1px] border-solid border-silver overflow-hidden bg-white mx-[10px] mb-12text-center lg:w-[45%]  sm:w-72'>
                    {/* <Skeleton className='mb-5 ' circle={true} height={100} width={100}/> */}
                    <div className=' bg-silver w-[230px] h-[200px] m-2.5 md:w-52 sm:w-[230px]'></div>
                    <div className='bg-silver  w-10 h-6  mt-6 mx-5 mb-4  '></div>
                    <div className='bg-silver  w-6 h-6 my-4 mx-5 '></div>
                    <div className='flex flex-row'>
                    <div className='w-52 h-10 bg-silver translate-x-1  m-4 '></div>
                    <div className='w-52 h-10 bg-silver translate-x-1  m-4'></div>
                    </div>
                </div>
          )
       })
  
};

export default LoadingProducts;