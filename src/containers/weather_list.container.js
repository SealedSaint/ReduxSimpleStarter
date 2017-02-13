import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import GoogleMap from '../components/google_map.component'
import Sparkline from '../components/sparkline.component'

function mapStateToProps({ weatherList }) {
    return {
        weatherList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch)
}

class WeatherList extends Component {
    renderWeather(weather) {
        const cityName = weather.city.name
        const { lat: latitude, lon: longitude } = weather.city.coord
        const temperatures = weather.list.map(sample => sample.main.temp)
        const pressures = weather.list.map(sample => sample.main.pressure)
        const humidities = weather.list.map(sample => sample.main.humidity)

        return (
            <tr key={cityName}>
                <td><GoogleMap latitude={latitude} longitude={longitude} /></td>
                <td><Sparkline data={temperatures} color="orange" units="K" /></td>
                <td><Sparkline data={pressures} color="black" units="hPa" /></td>
                <td><Sparkline data={humidities} color="red" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weatherList.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)