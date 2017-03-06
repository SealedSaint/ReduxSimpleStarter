import { combineReducers } from 'redux'

import CommentsReducer from './comments.reducer'

const RootReducer = combineReducers({
    comments: CommentsReducer
})

export default RootReducer