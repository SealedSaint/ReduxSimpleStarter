import { combineReducers } from 'redux'

import WeatherReducer from './weather.reducer'

const RootReducer = combineReducers({
    weatherList: WeatherReducer
})

export default RootReducer