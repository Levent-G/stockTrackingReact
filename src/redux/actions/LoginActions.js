import axios from "axios";

export const LoginAction = (body) => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})
    axios
      .post("https://www.melivecode.com/api/login", body)
      .then((resp) => dispatch({ type: "POST_LOGIN", payload: resp.data }));
  };
};
