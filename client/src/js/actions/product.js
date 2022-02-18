import axios from "axios";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCCESS,
} from "../const/product";

export const addProduct = (product) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_LOADING });
  try {
    let result = await axios.post("/product", product);
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data });
  }
};

export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD });
  try {
    let result = await axios.get("/product");
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.response.data });
  }
};

export const getOne = (id) => (dispatch) => {
  axios
    .get(`/product/${id}`)
    .then((res) => dispatch({ type: GET_PRODUCT, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const deleteproduct = (id) => (dispatch) => {
  axios
    .delete(`/product/${id}`)
    .then((res) => dispatch(getProduct()))
    .catch((err) => console.log(err));
};
export const editproduct =
  ({ product, id }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_PRODUCT });
    try {
      let result = await axios.post(`/product/${id}`, product);
    } catch (error) {
      dispatch({ payload: error.response.data });
    }
  };
