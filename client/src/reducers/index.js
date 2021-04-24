import { combineReducers } from "redux";

import productReducer from "./productReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  products: productReducer,
  errors: errorReducer,
});
