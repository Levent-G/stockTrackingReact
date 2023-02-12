import axios from "axios";

//getallapiiiii------------------------------------------------------------------------------
export const ProductApiAction = () => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})

    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => dispatch({ type: "GET_PRODUCTS", payload: resp.data }));
  };
};
export const getCategory = () => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((resp) => dispatch({ type: "GET_CATEGORY", payload: resp.data }));
  };
};
export const searchGetCat = (searchCat) => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})

    axios
      .get(`https://fakestoreapi.com/products/category/${searchCat}`)
      .then((resp) =>
        dispatch({ type: "GET_SEARCHCATEGORY", payload: resp.data })
      );
  };
};
export const getPastSales = (searchCat) => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})

    axios
      .get(`https://fakestoreapi.com/carts`)
      .then((resp) => dispatch({ type: "GET_PASTSALES", payload: resp.data }));
  };
};
