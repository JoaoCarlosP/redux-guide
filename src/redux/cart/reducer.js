import CartReducerTypes from "./cart-reducer-types"

const initialState = {
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case (CartReducerTypes.ADD_PRODUCT): {

    const productIsAlreadyInCart = state.products?.some(product => product.id === action.payload.id )

    if (productIsAlreadyInCart) {
      const productsUpdated = state.products.map(product => product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )

      return {
        ...state,
        products: productsUpdated
      }
    }

    return {
      ...state,
      products: [ ...state.products, { ...action.payload, quantity: 1 }]
    }
  }

  case (CartReducerTypes.REMOVE_PRODUCT): {
    const updateProductList = state.products.filter(product => product.id !== action.payload.productId)

    return {
      ...state,
      products: updateProductList
    }
  }

  case (CartReducerTypes.DECREASE_PRODUCT_QUANTITY): {    
    const updateProductList = state.products.map((product) => {
      if (product.id === action.payload.productId) {
        if (product.quantity === 1) {
          return null
        }

        return { ...product, quantity: product.quantity - 1}
      }
      return product
    }).filter(Boolean)

    return {
      ...state,
      products: updateProductList
    }
  }

  case (CartReducerTypes.INCREASE_PRODUCT_QUANTITY): {
    const updateProductList = state.products.map(product => {
      if (product.id === action.payload.productId) return { ...product, quantity: product.quantity + 1 }
      return product
    })

    return {
      ...state,
      products: updateProductList
    }
  }

    default:
      return state
  }
}

export default cartReducer
