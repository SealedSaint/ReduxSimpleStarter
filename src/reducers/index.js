import { combineReducers } from 'redux'

import AuthenticationReducer from './authentication.reducer'

const RootReducer = combineReducers({
	authenticated: AuthenticationReducer
})

export default RootReducer