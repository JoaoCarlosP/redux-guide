const initialState = {
  currentUser: null
}

// Nossa "entidade" -> UserReducer
const userReducer = (state = initialState, action) => {
  if (action.type === 'user/reducer') {
    return { ...state, currentUser: action.payload }
  }
  
  return state
}

export default userReducer