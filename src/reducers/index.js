import { combineReducers } from 'redux'

import BooksReducer from './books.reducer'

const rootReducer = combineReducers({
    books: BooksReducer
})

export default rootReducer