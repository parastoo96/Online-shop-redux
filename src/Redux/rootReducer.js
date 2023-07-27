import { combineReducers } from "redux";

import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartREducer";

const rootReducer=combineReducers({

   productsState:productsReducer,
   cartState:cartReducer
})

export default rootReducer