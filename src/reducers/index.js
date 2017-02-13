import { combineReducers } from 'redux'

import ActiveBookReducer from './active_book.reducer'
import BooksReducer from './books.reducer'

const rootReducer = combineReducers({
    activeBook: ActiveBookReducer,
    books: BooksReducer
})

export default rootReducer