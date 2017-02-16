import { combineReducers } from 'redux'

import PostsReducer from './posts.reducer'
import SinglePostReducer from './single_post.reducer'

const RootReducer = combineReducers({
    posts: PostsReducer,
    singlePost: SinglePostReducer
})

export default RootReducer