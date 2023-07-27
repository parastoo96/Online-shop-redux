import React from "react";
import { Link } from 'react-router-dom';



const Home=()=> {
    return ( 
        <div className="bottom-0 flex flex-col items-center justify-center content-around bg-blue  ">
            <div className="flex justify-around md:flex-col">
                <div className="flex flex-col mr-[320px]">
                    <h3 className="text-xl font-bold p-1  text-white">Socials</h3>
                    <Link to="#" className="p-1 text-white">Facebook</Link>
                    <Link to="#" className="p-1 text-white">Twitter</Link>
                    <Link to="#" className="p-1 text-white">Instagram</Link>
                    <Link to="#" className="p-1 text-white">LinkedIn</Link>
                </div>
                <div className="flex flex-col ml-20 ">
                    <h3 className="text-xl font-bold p-1 text-white">Link</h3>
                    <Link to="/Home" className="p-1 text-white">Home</Link>
                    <Link to="/products" className="p-1 text-white">products</Link>
                    <Link to="signup" className="p-1 text-white">Signup</Link>
                    <Link to="cart" className="p-1  text-white">cart</Link>
                </div>
            </div>
            <span className="text-xl  text-white">developed with <span>&#x2764;</span> by parastoo</span>
        </div>
     );
}

export default Home;