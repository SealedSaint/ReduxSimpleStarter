import React, { Component } from 'react'

import AddComment from '../containers/add_comment.container'
import CommentList from '../containers/comment_list.container'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AddComment />
                <CommentList />
            </div>
        )
    }
}
