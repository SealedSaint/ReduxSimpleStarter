import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { fetchSinglePost, unmountSinglePost } from '../actions/index'

function mapStateToProps({ singlePost }) {
    return {
        singlePost
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSinglePost, unmountSinglePost }, dispatch)
}

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.props.fetchSinglePost(props.id)
    }

    render() {
        const post = this.props.singlePost

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
            </div>
        )
    }

    componentWillUnmount() {
        this.props.unmountSinglePost()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)