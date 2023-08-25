import React from 'react';

const HamburgerMenu = () => {
    return (
       
        <div className='lg:flex lg:flex-col lg:gap-1 lg:absolute lg:top-3 lg:left-3 hidden'>
            <span className='block w-10 h-1  bg-blue'></span>
            <span className='block w-10 h-1  bg-blue'></span>
            <span className='block w-10 h-1  bg-blue'></span>
        </div>
       
    );
};

export default HamburgerMenu;