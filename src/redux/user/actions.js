import userReducerTypes from "./user-reducer-types"

const userLogin = (payload) => {
  return {
    type: userReducerTypes.LOGIN,
    payload
  }
}

const userLogout = () => {
  return {
    type: userReducerTypes.LOGOUT
  }
}

export {
  userLogin,
  userLogout
}