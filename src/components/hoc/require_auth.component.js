import React, { Component } from 'react'
import { connect } from 'react-redux'


export default function(ComposedComponent) {
	function mapStateToProps({ authenticated }) {
		return {
			authenticated
		}
	}

	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}

		goHome() {
			this.context.router.push('/')
		}

		componentWillMount() {
			if(!this.props.authenticated) this.goHome()
		}

		componentWillUpdate(nextProps) {
			if(!nextProps.authenticated) this.goHome()
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	return connect(mapStateToProps)(Authentication)
}