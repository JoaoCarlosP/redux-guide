import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
  key: 'root',
  storage,
}

// store é onde inicializamos o nosso root-reducer os reducers dentro dele.
const store = configureStore({ 
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: () => [logger]
})

export default store
export const persistor = persistStore(store)