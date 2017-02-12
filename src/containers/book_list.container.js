import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    // Whatever is returned will show up as props in BookList
    return {
        books: state.books
    }
}

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList)