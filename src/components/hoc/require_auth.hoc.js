import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
    function mapStateToProps({ auth }) {
        return {
            auth
        }
    }

    class Auth extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }

        ensureAuth() {
            if(!this.props.auth.authenticated) {
                this.context.router.history.push('/signin')
            }
        }

        componentWillMount() {
            this.ensureAuth.apply(this)
        }

        componentWillUpdate() {
            this.ensureAuth.apply(this)
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    return connect(mapStateToProps)(Auth)
}