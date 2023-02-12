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
