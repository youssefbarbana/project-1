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

const initialestate = {
  products: [],
  product: {},
  loadProduct: false,
  errors: null,
};
export const productReducer = (state = initialestate, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_LOADING:
      return { ...state, loadProduct: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, loadProduct: false, products: payload };
    case ADD_PRODUCT_FAIL:
      return { ...state, loadProduct: false, errors: payload };
    case GET_PRODUCT_LOAD:
      return { ...state, loadProduct: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, loadProduct: false, products: payload };
    case GET_PRODUCT_FAIL:
      return { ...state, loadProduct: false, errors: payload };
    case GET_PRODUCT:
      return { ...state, loadProduct: false, product: payload };
    case EDIT_PRODUCT:
      return { ...state, loadProduct: false, errors: payload };
    default:
      return state;
  }
};
