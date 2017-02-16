import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../actions/index'

function mapStateToProps({ posts }) {
    return {
        posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch)
}

class PostList extends Component {
    static contextTypes = {
        router: React.PropTypes.object  // This gives the container/component access to the router
    }

    constructor(props) {
        super(props)

        this.props.fetchPosts()

        this.goToPost = this.goToPost.bind(this)
        this.renderListItem = this.renderListItem.bind(this)
    }

    goToPost(id) {
        this.context.router.push(`/posts/${id}`)
    }

    renderListItem(post) {
        return (
            <div onClick={() => this.goToPost(post.id)} className="post-list-item" key={post.id}>
                <h4>{post.title}</h4>
                <div>ID: {post.id}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="post-list">
                <div>
                    <div style={{width: '50%', display: 'inline-block'}}>
                        <h3>Posts</h3>
                    </div>
                    <div style={{width: '50%', display: 'inline-block'}}>
                        <Link to="/posts/new" className="btn btn-primary" style={{float: 'right'}}>Add Post</Link>
                    </div>
                </div>
                {this.props.posts.map(this.renderListItem)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)