import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

import PostsReducer from './posts.reducer'
import SinglePostReducer from './single_post.reducer'

const RootReducer = combineReducers({
    form: FormReducer,
    posts: PostsReducer,
    singlePost: SinglePostReducer
})

export default RootReducer