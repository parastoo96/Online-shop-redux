import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ShopCart.css'

// Components
import Cart from './shared/Cart';
import { useDispatch, useSelector } from 'react-redux';

//redux
import { clear,checkout } from '../Redux/cart/cartAction';

const ShopCart = () => {

    const state=useSelector(state=>state.cartState);
    const dispatch=useDispatch()

    return (
        <div className='flex justify-between items-start mt-[150px] mb-[540px] mx-44 min-h-min transition-all duration-200 ease-in-out xl:mt-[120px] xl:mx-20 xl:mb-12 lg:flex-col-reverse lg:mt-[120px] lg:mx-20 lg:mb-12 lg:items-center md:mt-[120px] md:mx-10 md:mb-12 sm:mt-[120px] sm:mx-5 sm:mb-12'>
            <div className='w-[70%] lg:w-full'>

                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0 && <div className='w-[27%] bg-white border-[1px] border-solid border-silver rounded text-left lg:w-full mb-5'>
                    <p className='text-dark-gray mt-5 mx-5 mb-2.5'><span className='text-blue font-bold'>Total Items:</span> {state.itemsCounter}</p>
                    <p className='text-dark-gray mt-5 mx-5 mb-2.5'><span className='text-blue font-bold'>Total Payments:</span> {state.total}</p>
                    <div className='flex justify-between items-baseline mt-[50px] mx-5 mb-2.5'>
                        <button className='checkout inline-block bg-light-green py-2 px-4 text-white font-bold border-noun rounded-md mb-5 transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#167d32]' onClick={() => dispatch(checkout())}>Check Out</button>
                        <button className='cursor-pointer text-light-green bg-none border-none transition-all duration-200 ease-in-out text-base hover:text-[#167d32] ' onClick={() => dispatch(clear())}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div>
                    <h3 className='text-[#167d32] mt-7 mx-0 mb-12 text-lg'>Checked Out Successfully</h3>
                    <Link  className='byMore bg-blue inline-block no-underline text-white h-8 rounded text-center cursor-pointer transition-all duration-200 ease-in-out w-[90px] font-bold leading-7 ml-1.5 hover:bg-[#08499d]' to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;