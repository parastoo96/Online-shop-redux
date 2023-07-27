import React, {useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

// Components
import Product from './shared/Product';
import LoadingProducts from './Loading/LoadingProducts';

// redux
import {fetchProducts}  from '../Redux/products/productsAction'

const Store = () => {
   
    const dispatch=useDispatch();
    const productsState=useSelector(state=>state.productsState)
 
    useEffect(() => {
        if(!productsState.products.length) dispatch(fetchProducts())
    }, [])

    return (

        <div className='flex flex-wrap justify-between items-center mt-[150px] px-[150px] xl:py-4 xl:px-20 xl:mt-28  md:px-10 sm:justify-center sm:py-4 sm:px-2.5 mb-10'>
            {
                productsState.loading?
                <LoadingProducts/>:
                productsState.error?
                <h2>something went error</h2>:
                productsState.products.map(product=><Product
                                      key={product.id}
                                      productData={product}   
                />)                                                      
            }
        </div>
    );
};

export default Store;