import axios from "axios"

const fetchProductsRequest=()=>{
    return{
        type:"FETCH-PRODUCTS-REQUEST"
    }
}

const fetchProductsSuccess = product => {
    return{
        type:"FETCH-PRODUCTS-SUCCESS",
        payload:product
    }
}

const fetchProductsFailure=error=>{
    return{
        type:"FETCH-PRODUCTS-FAILURE",
        payload:error
    }
}

 export const fetchProducts=()=>{
    return(dispatch)=>{
        dispatch(fetchProductsRequest())
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            const product=response.data
            dispatch(fetchProductsSuccess(product))
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchProductsFailure(errorMsg))   
        })

    }
}