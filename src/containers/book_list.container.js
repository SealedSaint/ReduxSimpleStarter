import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectBook } from '../actions/index'

function mapStateToProps(state) {
    // Whatever is returned will show up as props in BookList
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    // Anything returned from this function will show up as props on BookList
    return bindActionCreators({ selectBook: selectBook }, dispatch) // Whenever selectBook is called, result should be passed to all reducers
}

class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList)