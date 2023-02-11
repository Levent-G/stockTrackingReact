import axios from "axios";

//getallapiiiii------------------------------------------------------------------------------
export const ProductApiAction = () => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})

    axios
      .get("https://www.melivecode.com/api/users")
      .then((resp) => dispatch({ type: "GET_PRODUCTS", payload: resp.data }));
  };
};
//deleteapiii------------------------------------------------------------------------------
export const DeleteProduct = (id) => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})
    axios
      .get(`https://www.melivecode.com/api/users/${id}`)
      .then((resp) =>
        dispatch({ type: "DELETE_PRODUCT", deleteproduct: resp.data })
      );
  };
};
