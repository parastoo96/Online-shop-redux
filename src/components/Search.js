import React, { useState , useEffect}  from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from './shared/Product';

// redux
import {fetchProducts}  from '../Redux/products/productsAction'


const Search=()=> {

    const dispatch=useDispatch();
    const productsState=useSelector(state=>state.productsState)
 
    useEffect(() => {
        if(!productsState.products.length) dispatch(fetchProducts())
    }, [])


    const[search,setSearch]=useState("");

    const searchHandler=event =>{
    setSearch(event.target.value)
     }

    const searchedProducts=productsState.products.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()))
      
    return (  
        <div className="flex flex-col items-center   mt-[250px] min-h-[52vh]">
            <form >
                 <input type="text"
                  placeholder="Search.." 
                  value={search} 
                  onChange={searchHandler} 
                  className="w-[500px] h-[60px] rounded-md px-2.5 mb-14 border-[1px] border-solid border-silver transition-all focus:border-blue focus:outline-none" 
                  />
            </form>
            <div className="flex flex-wrap justify-between items-center mt-[100px] px-[200px] xl:py-4 xl:px-20 xl:mt-28  md:px-10 sm:justify-center sm:py-4 sm:px-2.5 mb-10">
                 {
                   searchedProducts.map(product => <Product 
                        key={product.id} 
                        productData={product} 
                    />)
                 }
             </div>
        </div>
    );
}

export default Search;