import React from "react";
import { Link } from 'react-router-dom';

//image
import samsung from '../assets/image/acer.jpg'

const Home=()=> {
    return ( 
        <div className="mt-[150px] flex justify-around min-h-[600px]">
            <div className="mt-16">
                <h1 className="text-lg font-extrabold tracking-wider py-8">DOWNTOWN TECH LIVER</h1>
                <p>The biggest computer shop in the area where customers come first.</p>
                <Link  className='bg-blue inline-block no-underline text-white h-8 mt-8 rounded text-center cursor-pointer transition-all duration-200 ease-in-out w-[90px] font-bold leading-7 ml-1.5 hover:bg-[#08499d]' to="/products">Go to shop</Link>
            </div>

            <div>
                <img src={samsung} alt="samsung" className="w-[500px] shadow-2xl"  />
            </div> 
        </div>
     );
}

export default Home;