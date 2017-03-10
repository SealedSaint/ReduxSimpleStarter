import { combineReducers } from 'redux'

import AuthReducer from './auth.reducer'
import MessageReducer from './message.reducer'

const RootReducer = combineReducers({
    auth: AuthReducer,
    message: MessageReducer
})

export default RootReducer