import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'
import { useSelector } from 'react-redux';

//

const ProductDetails = (props) => {

    const {id} = useParams();
    const data = useSelector(state=>state.productsState.products)
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className='flex justify-between items-center mt-[150px] mx-[150px] mb-12 p-5  border-[1px] border-solid border-silver bg-white rounded-xl  xl:mt-[120px] xl:mb-12 xl:mx-20 lg:flex-col lg:justify-center md-mt-[120px] md:mx-10 md:mb-12 md:justify-center sm:mx-5'>
            <img className='w-96 lg:w-[170px] lg:mb-12' src={image} alt="product" />
            <div className='text-left ml-7 p-5  border-[1px] border-solid border-silver rounded-xl lg:m-0 md:m-0 sm:m-0 '>
                <h3 className='mt-5 mb-7 mx-0 text-blue'>{title}</h3>
                <p className='text-dark-gray font-bold mb-7 '>{description}</p>
                <p className='text-dark-gray font-bold mb-12 '><span className='text-base text-orange'>Category:</span> {category}</p>
                <div className='flex justify-between items-center sm:flex-col sm:items-start'>
                    <span className='price inline-block bg-light-green py-2 px-4 text-white font-bold mb-5 rounded-md sm:mb-10 '>{price} $</span>
                    <Link to="/products"  className='buttonContainerLink no-underline inline-block bg-blue  py-2 px-4 text-white font-bold rounded-md mb-5 hover:bg[#0b499b]'>Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;