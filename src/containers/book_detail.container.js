import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a Book</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(BookDetail)