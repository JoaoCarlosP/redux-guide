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

const decreaseProductFromCart = (payload) => {
  return {
    type: CartReducerTypes.DECREASE_PRODUCT,
    payload
  }
}

const increaseProductToCart = (payload) => {
  return {
    type: CartReducerTypes.INCREASE_PRODUCT,
    payload
  }
}

export {
  addProductToCart,
  removeProductFromCart,
  increaseProductToCart,
  decreaseProductFromCart,
}