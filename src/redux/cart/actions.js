import CartReducerTypes from "./cart-reducer-types"

const addProductToCart = (payload) => {
  return {
    type: CartReducerTypes.ADD_PRODUCT,
    payload
  }
}

const removeProductFromCart = (payload) => {
  return {
    type: CartReducerTypes.REMOVE_PRODUCT,
    payload
  }
}

const decreaseProductQuantity = (payload) => {
  return {
    type: CartReducerTypes.DECREASE_PRODUCT_QUANTITY,
    payload
  }
}

const increaseProductQuantity = (payload) => {
  return {
    type: CartReducerTypes.INCREASE_PRODUCT_QUANTITY,
    payload
  }
}

export {
  addProductToCart,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
}