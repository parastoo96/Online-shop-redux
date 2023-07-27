import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';

// Functions
import { shorten, isInCart, quantityCount } from '../../helper/functions';

//redux
import { addItem,removeItem,increase,decrease } from '../../Redux/cart/cartAction';

// Icons
import trashIcon from "../../assets/icons/trash.svg";
import { type } from '@testing-library/user-event/dist/type';


const Product = ({productData}) => {

   const state =useSelector(state=>state.cartState)
   const dispatch=useDispatch()

    return (
        <div className=' w-[250px]  border-[1px] border-solid border-silver overflow-hidden bg-white mx-[10px] mb-12 transition-all delay-200 ease text-center lg:w-[45%]  sm:w-72'>
         
            <img className='w-[230px] h-[200px] m-2.5 md:w-52 sm:w-[230px]' src={productData.image} alt="product"  />
            <h3 className='text-gray text-left mt-6 mx-5 mb-4 text-lg '>{shorten(productData.title)}</h3>
            <p className='text-gray text-left my-4 mx-5 text-base font-medium '>{productData.price}</p>
            <div className=' flex justify-between items-center mt-9 mx-5 mb-5 '>
                <Link className='no-underline text-blue text-base' to={`/products/${productData.id}`}>Details</Link>
                <div className='buttonContainer flex'>
                    {quantityCount(state, productData.id) > 1 && <button className='w-8 text-lg font-bold ' onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className='w-8 text-lg font-bold ' onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="trash" className='w-5' /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className='inline-block w-5 ml-1.5 text-xl font-bold text-[#1a73e8]'>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className='w-8 text-lg font-bold ' onClick={() => dispatch(increase(productData))}>+</button> :
                        <button className='w-[120px]'   onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
           
        </div>
    );
};

export default Product;