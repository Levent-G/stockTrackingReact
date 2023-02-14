import axios from "axios";

//getallapiiiii------------------------------------------------------------------------------
export const ProductApiAction = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => dispatch({ type: "GET_PRODUCTS", payload: resp.data }));
  };
};
export const getCategory = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((resp) => dispatch({ type: "GET_CATEGORY", payload: resp.data }));
  };
};
export const searchGetCat = (searchCat) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${searchCat}`)
      .then((resp) =>
        dispatch({ type: "GET_SEARCHCATEGORY", payload: resp.data })
      );
  };
};
export const getPastSales = (searchCat) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/carts`)
      .then((resp) => dispatch({ type: "GET_PASTSALES", payload: resp.data }));
  };
};
export const getOneProduct = (productId) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((resp) => dispatch({ type: "GET_ONEPRODUCT", payload: resp.data }));
  };
};
export const addProduct = (body) => {
  return (dispatch) => {
    axios
      .post(`https://fakestoreapi.com/products/`, body)
      .then((resp) =>
        dispatch({ type: "POST_ADDPRODUCT", payload: resp.data })
      );
  };
};
