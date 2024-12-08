import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import logger from 'redux-logger'

// store é onde inicializamos o nosso root-reducer os reducers dentro dele.
const store = configureStore({ 
  reducer: rootReducer,
  middleware: () => [logger]
}) 

export default store