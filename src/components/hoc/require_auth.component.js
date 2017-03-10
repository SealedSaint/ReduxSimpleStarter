import React, { Component } from 'react'
import { connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

class RequireAuth extends Component {
    history = createHistory()

    ensureAuth() {
        if(!this.props.auth.authenticated) {
            this.history.push('/signin')
        }
    }

    componentWillMount() {
       this.ensureAuth.apply(this)
    }

    componentWillUpdate() {
        this.ensureAuth.apply(this)
    }

    render() {
        return null
    }
}

export default connect(mapStateToProps)(RequireAuth)