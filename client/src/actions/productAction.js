import axios from "axios";
import { GET_PRODUCT_LIST, SET_ERRORS, CLEAR_ERRORS } from "./types";

export const getAllProducts = () => async (dispatch) => {
  try {
    let result = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/product/list`
    );

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
  dispatch(clearErrors());

  try {
    await axios.post(
      `${process.env.REACT_APP_SERVER}/api/product/addproduct`,
      data
    );
    setTimeout(() => {
      history.push("/");
    }, 1000);
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error,
    });
  }
};

export const updateProduct = (data, history) => async (dispatch) => {
  dispatch(clearErrors());

  try {
    await axios.put(
      `${process.env.REACT_APP_SERVER}/api/product/updateproduct/${data.id}`,
      data
    );
    setTimeout(() => {
      history.push("/");
    }, 1000);
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_SERVER}/api/product/delete/${id}`
    );
    dispatch(getAllProducts());
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error,
    });
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
