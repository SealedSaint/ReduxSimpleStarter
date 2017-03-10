import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>Home - Greetings!</div>
                <div>
                    <Link to="/special">Special Content</Link>
                </div>
            </div>
        )
    }
}