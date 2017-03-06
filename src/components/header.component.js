import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as actions from '../actions'

function mapStateToProps({ authenticated }) {
	return {
		authenticated
	}
}

class Header extends Component {
	authButton() {
		if(this.props.authenticated) {
			return <button onClick={() => this.props.signOut()}>Sign Out</button>
		}
		else {
			return <button onClick={() => this.props.signIn()}>Sign In</button>
		}
	}

	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/resources">Resources</Link>
					</li>
					<li className="nav-item">
						{this.authButton()}
					</li>
				</ul>
			</nav>
		)
	}
}

export default connect(mapStateToProps, actions)(Header)