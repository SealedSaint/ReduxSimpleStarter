import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { createPost } from '../actions/index'

class CreatePost extends Component {
    handleSubmit = (values) => {

        console.log(values)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="create-post-form">
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field name="title" component="input" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <Field name="content" component="textarea" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'CreatePost',
    fields: [
        'title',
        'content'
    ]
})(CreatePost)