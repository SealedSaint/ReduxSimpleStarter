import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchSinglePost } from '../actions/index'

function mapStateToProps({ singlePost }) {
    return {
        singlePost
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSinglePost }, dispatch)
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
            <div className="single-post">
                <h3>{post.title}</h3>
                <div>{post.content}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)