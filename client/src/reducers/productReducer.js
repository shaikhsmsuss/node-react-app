import {
  GET_PRODUCT_LIST,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  SET_ERRORS,
  DELETE_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
