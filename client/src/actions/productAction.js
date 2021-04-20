import axios from "axios";
import {
  GET_PRODUCT_LIST,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  SET_ERRORS,
  DELETE_PRODUCT,
} from "./types";

export const getAllProducts = () => async (dispatch) => {
  try {
    let result = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/product/list`
    );
    console.log("ress", result.data);
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error,
    });
  }
};

export const addProducts = (data, history) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_SERVER}/api/product/addproduct`,
      data
    );
    history.push("/");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error,
    });
  }
};

export const updateProduct = (data, history) => async (dispatch) => {
  try {
    await axios.put(
      `${process.env.REACT_APP_SERVER}/api/product/updateproduct/${data.id}`,
      data
    );
    history.push("/");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error,
    });
  }
};
