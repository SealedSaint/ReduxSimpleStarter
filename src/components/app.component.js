import React, { Component } from 'react'

import SearchBar from '../containers/search_bar.container'
import WeatherList from '../containers/weather_list.container'

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}