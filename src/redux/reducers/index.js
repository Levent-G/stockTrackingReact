import { combineReducers } from "redux";

import ProductReducer from "../reducers/ProductReducer";
import LoginReducer from "../reducers/LoginReducer";
export default combineReducers({
  products: ProductReducer,
  loginUser: LoginReducer,
  category: ProductReducer,
  searchcategory: ProductReducer,
  pastsales: ProductReducer,
});
