const initialState={
    loading:false,
    products:[],
    error:""
}
const productsReducer=(state=initialState,action)=>{
    switch(action.type){
          case "FETCH-PRODUCTS-REQUEST":
                return{
                      ...state,
                      loading:true
                }
          case "FETCH-PRODUCTS-SUCCESS":
                return{
                      loading:false,
                      products:action.payload
                }

          case "FETCH-PRODUCTS-FAILURE":
                return{
                      loading:false,
                    //   products:[],
                      error:action.payload
                }      
          default:
                return state
    }

}

export default productsReducer;