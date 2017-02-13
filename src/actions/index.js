export function selectBook(book) {
    // selectBook is an ActionCreator - needs to return action (object with 'type' property)
    return {
        type: 'BOOK_SELECTED',
        book: book
    }
}