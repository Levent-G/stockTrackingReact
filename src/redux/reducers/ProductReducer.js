const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "DELETE_PRODUCT":
      return { ...state, deleteproduct: action.payload };

    default:
      return state;
  }
};

export default ProductReducer;
