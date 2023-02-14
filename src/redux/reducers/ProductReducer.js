const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CATEGORY":
      return { ...state, category: action.payload };
    case "GET_SEARCHCATEGORY":
      return { ...state, searchcategory: action.payload };
    case "GET_PASTSALES":
      return { ...state, pastsales: action.payload };
    case "GET_ONEPRODUCT":
      return { ...state, getoneproduct: action.payload };
    case "POST_ADDPRODUCT":
      return { ...state, addproduct: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
