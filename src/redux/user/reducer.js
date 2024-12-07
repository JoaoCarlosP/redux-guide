import userReducerTypes from "./user-reducer-types"

const initialState = {
  currentUser: null
}

// Nossa "entidade" -> UserReducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userReducerTypes.LOGIN:
      return { ...state, currentUser: action.payload }
    case userReducerTypes.LOGOUT:
      return { ...state, currentUser: null }
    default: {
      return state
    }
  }
}

export default userReducer