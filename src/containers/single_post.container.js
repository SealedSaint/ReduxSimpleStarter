import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { deletePost, fetchSinglePost, unmountSinglePost } from '../actions/index'

function mapStateToProps({ singlePost }) {
    return {
        singlePost
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deletePost, fetchSinglePost, unmountSinglePost }, dispatch)
}

class SinglePost extends Component {
    static contextTypes = {
        router: PropTypes.object  // This gives the container/component access to the router
    }

    constructor(props) {
        super(props)

        this.props.fetchSinglePost(props.id)

        this.deleteThisPost = this.deleteThisPost.bind(this)
    }

    deleteThisPost(id) {
        this.props.deletePost(id).then(() => {
            this.context.router.push('/')
        })
    }

    render() {
        const { singlePost: post } = this.props

        if(!post) return <div>Loading...</div>

        return (
            <div>
                <div className="back-btn">
                    <Link to="/posts" className="btn btn-primary">Back</Link>
                </div>
                <div className="single-post">
                    <h3>{post.title}</h3>
                    <div>{post.content}</div>
                </div>
                <div className="delete-btn">
                    <button onClick={() => this.deleteThisPost(post.id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.props.unmountSinglePost()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)