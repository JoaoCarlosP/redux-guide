import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productIsAlreadyInCart = state.products?.some(product => product.id === action.payload.id )

      if (productIsAlreadyInCart) {

        const productsUpdated = state.products.map(
          product => product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )

        state.products = productsUpdated
        return
      }

      state.products = [ ...state.products, { ...action.payload, quantity: 1 }]
    },

    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.productId)
    },

    increaseProductQuantity: (state, action) => {
      const updateProductList = state.products.map(product => {
        if (product.id === action.payload.productId) {
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })

      state.products = updateProductList
    },

    decreaseProductQuantity: (state, action) => {
      const updateProductList = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          if (product.quantity === 1) return null
          return { ...product, quantity: product.quantity - 1}
        }
        return product
      }).filter(Boolean)

      state.products = updateProductList
    }
  }
})

export const {
  addProductToCart,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity
} = cartSlice.actions

export default cartSlice.reducer
