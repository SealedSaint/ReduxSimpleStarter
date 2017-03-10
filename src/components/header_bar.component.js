import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/index'

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

class HeaderBar extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    }

    signOut() {
        this.props.signOut()
        this.context.router.history.push('/signin')
    }

    renderAuthLinks() {
        if(this.props.auth.authenticated) {
            return (
                <div className="header-block" style={styles.headerBlock}>
                    <button onClick={() => this.signOut()}>Sign Out</button>
                </div>
            )
        }
        else {
            return [
                <div key="1" className="header-block" style={styles.headerBlock}>
                    <Link to="/signin">Sign In</Link>
                </div>,
                <div key="2" className="header-block" style={styles.headerBlock}>
                    <Link to="/signup">Sign Up</Link>
                </div>
            ]
        }
    }

    render() {
        return (
            <div className="header-bar" style={styles.headerBar}>
                <div className="header-block" style={styles.headerBlock}>
                    <Link to="/">Redux Auth</Link>
                </div>
                {this.renderAuthLinks()}
            </div>
        )
    }
}

export default connect(mapStateToProps, actions)(HeaderBar)

const styles = {
    headerBar: {

    },
    headerBlock: {
        display: 'inline-block',
        padding: 10
    }
}