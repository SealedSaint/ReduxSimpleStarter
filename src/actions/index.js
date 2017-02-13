import ax from 'axios'

const API_KEY = '12ec1b783a8f78bfe9ffe3661b552441'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = ax.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}