import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from '../../actions/index'

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    renderMessage() {
        if(this.props.auth.error) return (
            <div>{this.props.auth.error}</div>
        )
    }

    renderRedirect() {
        if(this.props.auth.authenticated) return (
            <Redirect to="/" />
        )
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.signIn(this.state.email, this.state.password)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h3>Sign In</h3>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"
                       onChange={e => this.setState({ password: e.target.value })}
                    />
                </div>
                {this.renderMessage.apply(this)}
                <button type="submit">Sign In</button>
                {this.renderRedirect.apply(this)}
            </form>
        )
    }
}

export default connect(mapStateToProps, actions)(SignIn)