import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

class AddComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: ''
        }
    }

    handleChange(event) {
        this.setState({ comment: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.addComment(this.state.comment)
        this.setState({ comment: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="add-comment">
                <h4>Add a Comment</h4>
                <div>
                    <textarea
                        value={this.state.comment}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                <button type="submit">Add Comment</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)