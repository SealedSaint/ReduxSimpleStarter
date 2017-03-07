import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserCard from './user_card.component'
import * as actions from '../actions'

function mapStateToProps({ users }) {
	return {
		users
	}
}

class UserList extends Component {
	componentDidMount() {
		this.props.fetchUsers()
	}

	render() {
		if(!this.props.users) return <div>Loading...</div>

		return (
			<div className="user-list">
				{this.props.users.map(user => <UserCard key={user.email} {...user} />)}
			</div>
		)
	}
}

export default connect(mapStateToProps, actions)(UserList)