import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'

// store é onde inicializamos o nosso root-reducer os reducers dentro dele.
const store = createStore(rootReducer, applyMiddleware(logger)) 

export default store