import CartReducerTypes from "./cart-reducer-types"

const addProductToCart = (payload) => {
  return {
    type: CartReducerTypes.ADD_PRODUCT,
    payload
  }
}

export {
  addProductToCart
}