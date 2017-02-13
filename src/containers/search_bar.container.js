import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchWeather } from '../actions'

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        this.setState({ searchTerm: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault()  // Prevent the default page reload

        // Fetch weather data
        this.props.fetchWeather(this.state.searchTerm)
        this.setState({ searchTerm: '' })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a forecast for your favorite cities"
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)