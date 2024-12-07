import UserReducerTypes from "./user-reducer-types"

const initialState = {
  currentUser: null
}

// Nossa "entidade" -> UserReducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserReducerTypes.LOGIN:
      return { ...state, currentUser: action.payload }
    case UserReducerTypes.LOGOUT:
      return { ...state, currentUser: null }
    default:
      return state
  }
}

export default userReducer