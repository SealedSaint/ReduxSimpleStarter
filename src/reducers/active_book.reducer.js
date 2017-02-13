// State argument is NOT application state - only state reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.book
        default:
            return state
    }
}