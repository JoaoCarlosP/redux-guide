import { createStore } from 'redux'
import rootReducer from './root-reducer'

// store é onde inicializamos o nosso root-reducer os reducers dentro dele.
const store = createStore(rootReducer) 

export default store