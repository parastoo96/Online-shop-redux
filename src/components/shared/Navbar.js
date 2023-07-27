import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'



// Icons
import shopIcon from "../../assets/icons/shop.svg";
import searchIcon from "../../assets/icons/search.svg"





const Navbar = () => {

    const state = useSelector(state => state.cartState)

    return (
       
            <div className='bg-white top-0 mt-0 mx-0 mb-24 fixed w-full mainContainer '>
                <div className='flex justify-between items-center h-10 py-8 px-44  xl:py-4 xl:px-20  md:px-10 md:py-4  sm:px-5 sm:py-4'>
                    <div >
                    <Link className='no-underline text-blue font-bold rounded-sm py-0 mr-16  transition-all hover:text-[#0b499b]'  to="/Home">Home</Link>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0 mr-16  transition-all hover:text-[#0b499b]'  to="/products">Products</Link>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0 mr-16  transition-all hover:text-[#0b499b]'  to="/signup">signup</Link>
                    </div>
                    <Link to="/Search"><img src={searchIcon} alt="search" className='w-8 fill-blue ml-[800px] md:ml-0 sm:ml-0 xl:ml-0 lg:ml-0 2xl:ml-0'/></Link>
                    <div className='relative'>
                        <Link to="/Cart"><img src={shopIcon} alt="shop" className='w-8 fill-blue ' /></Link>
                        <span className='absolute left-4 bottom-4 bg-[#0b499b] rounded-full w-[18px] h-[18px]  text-xs text-center font-bold text-white'>{state.itemsCounter}</span>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;