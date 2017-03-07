import { combineReducers } from 'redux'

import UsersReducer from './users.reducer'

const RootReducer = combineReducers({
	users: UsersReducer
})

export default RootReducer