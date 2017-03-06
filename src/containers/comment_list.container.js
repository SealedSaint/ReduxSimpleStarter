import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps({ comments }) {
    return {
        comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch)
}

class CommentList extends Component {
    render() {
        const list = this.props.comments.map(comment => <li key={comment}>{comment}</li>)
        return (
            <div className="comment-list">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)