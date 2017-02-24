import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { submitPost } from '../actions/index'
import { updateCreatePostForm } from '../actions/index'

function mapStateToProps({ createPost: { createdPost, createPostIsLoading, formTitle, formContent } }) {
    return {
        createdPost,
        createPostIsLoading,
        formTitle,
        formContent
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitPost, updateCreatePostForm }, dispatch)
}

class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.getFormPost = this.getFormPost.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.renderStatus = this.renderStatus.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    validateForm() {
        return (
            this.props.formTitle.length > 0 &&
            this.props.formContent.length > 0
        )
    }

    getFormPost() {
        return {
            title: this.props.formTitle,
            content: this.props.formContent
        }
    }

    onFormSubmit(event) {
        event.preventDefault()

        if(this.validateForm())
            this.props.submitPost(this.getFormPost())
        else
            window.alert("Please fill out all required fields.")
    }

    // Handles rendering the creating and created message
    renderStatus() {
        let message = null
        if(this.props.createPostIsLoading)
            message = 'Creating Post...'
        else if(this.props.createdPost)
            message = 'Post Created!'

        return (
            <div>{message}</div>
        )
    }

    render() {
        return (
            <div>
                <div className="back-btn">
                    <Link to="/posts" className="btn btn-danger">Back</Link>
                </div>
                <form onSubmit={this.onFormSubmit} className="create-post-form">
                    <h3>Create a New Post</h3>

                    <div className="form-group">
                        <label htmlFor="title">Title*</label>
                        <input type="text" className="form-control"
                            value={this.props.formTitle}
                            onChange={event => this.props.updateCreatePostForm({ formTitle: event.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content*</label>
                        <textarea className="form-control"
                            value={this.props.formContent}
                            onChange={event => this.props.updateCreatePostForm({ formContent: event.target.value })}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <div>{this.renderStatus()}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)