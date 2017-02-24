import { combineReducers } from 'redux'

import CreatePostReducer from './create_post.reducer'
import PostsReducer from './posts.reducer'
import SinglePostReducer from './single_post.reducer'

const RootReducer = combineReducers({
    posts: PostsReducer,
    singlePost: SinglePostReducer,
    createPost: CreatePostReducer,
})

export default RootReducer