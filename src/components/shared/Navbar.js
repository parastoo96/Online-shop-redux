import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HamburgerMenu from './HamburgerMenu';
import './Navbar.css'

// Icons
import shopIcon from "../../assets/icons/shop.svg";
import searchIcon from "../../assets/icons/search.svg"
import closeIcon from '../../assets/icons/close.svg'


const Navbar = () => {

    const state = useSelector(state => state.cartState)

    const [hamburgerOpen, setHamburgerOpen]=useState(false)
    const toggleHamburger=()=>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
       
            <div className='bg-white top-0 mt-0 mx-0 mb-24 fixed w-full mainContainer '>
                <div className='flex justify-between items-center h-10 py-8 px-44  xl:py-4 xl:px-20'>
                    <div className='flex gap-10 lg:gap-10 lg:hidden'>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0   transition-all hover:text-[#0b499b]'  to="/Home">Home</Link>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0   transition-all hover:text-[#0b499b]'  to="/products">Products</Link>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0   transition-all hover:text-[#0b499b]'  to="/signup">signup</Link>
                    </div>
                    <div className='lg:flex lg:flex-row lg:gap-24 flex gap-16 absolute right-12 '> 
                     <Link to="/Search"><img src={searchIcon} alt="search" className='w-8 fill-blue '/></Link>
                     <div className='relative'>
                        <Link to="/Cart"><img src={shopIcon} alt="shop" className='w-8 fill-blue ' /></Link>
                        <span className='absolute left-4 bottom-4 bg-[#0b499b] rounded-full w-[18px] h-[18px]  text-xs text-center font-bold text-white'>{state.itemsCounter}</span>
                     </div>
                    </div>
                </div>
                {/* hamburger */}
                <div className='hamburger' onClick={toggleHamburger}>
                    <HamburgerMenu/>
                </div>
                <div className={(hamburgerOpen)? 'burgerStyle':'hidden'} >
                    <button onClick={toggleHamburger} className='absolute right-8'><img className='w-5' src={closeIcon} alt='remove' /></button>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0 mr-16  transition-all hover:text-[#0b499b]'  to="/Home">Home</Link>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0 mr-16  transition-all hover:text-[#0b499b]'  to="/products">Products</Link>
                    <Link className='no-underline text-blue font-bold rounded-sm py-0 mr-16  transition-all hover:text-[#0b499b]'  to="/signup">signup</Link>
                </div>
            </div>
    );
};
export default Navbar;