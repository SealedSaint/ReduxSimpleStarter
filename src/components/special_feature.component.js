import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'

function mapStateToProps({ message }) {
    return {
        message
    }
}

class SpecialFeature extends Component {
    componentDidMount() {
        this.props.fetchMessage()
    }

    renderMessage() {
        if(this.props.message) return (
            <div>{this.props.message}</div>
        )
    }

    render() {
        return (
            <div>
                Special Feature that requires authentication to view
                {this.renderMessage.apply(this)}
            </div>
        )
    }
}

export default connect(mapStateToProps, actions)(SpecialFeature)