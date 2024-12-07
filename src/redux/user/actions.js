import UserReducerTypes from "./user-reducer-types"

const userLogin = (payload) => {
  return {
    type: UserReducerTypes.LOGIN,
    payload
  }
}

const userLogout = () => {
  return {
    type: UserReducerTypes.LOGOUT
  }
}

export {
  userLogin,
  userLogout
}