import React, { Component } from 'react'
import { connect } from 'react-redux'


class RestrictedComponent extends Component {
    static contextTypes = {
    	router: React.PropTypes.object
    }

	componentWillMount() {
		if (!this.props.authenticated)
            this.context.router.push('/')
	}

	componentWillUpdate(nextProps) {
		if (!nextProps.authenticated)
            this.context.router.push('/')
	}

	render() {
		return this.props.children
	}
}

export const Restricted = connect((state) => state)(RestrictedComponent)
