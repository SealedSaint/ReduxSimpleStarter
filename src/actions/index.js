import axios from 'axios'

import * as types from './types'

const API_URL = 'http://localhost:8081'
const AUTH_HEADER = { authorization: localStorage.getItem('token') }

export function signUp(email, password) {
    return function(dispatch) {
        const body = { email, password }
        axios.post(`${API_URL}/signup`, body)
            .then(res => {
                // Update the state
                dispatch({ type: types.AUTH_USER })

                // Store token in local storage
                localStorage.setItem('token', res.data.token)
            })
            .catch(error => {
                dispatch({
                    type: types.AUTH_ERROR,
                    error: error.response.data.error || error.response.data
                })
            })
    }
}

export function signIn(email, password) {
    return function(dispatch) {
        const body = { email, password }
        axios.post(`${API_URL}/signin`, body)
            .then(res => {
                // Update state
                dispatch({ type: types.AUTH_USER })

                // Store token in local storage
                localStorage.setItem('token', res.data.token)
            })
            .catch(error => {
                dispatch({
                    type: types.AUTH_ERROR,
                    error: error.response.data
                })
            })
    }
}

export function signOut() {
    localStorage.removeItem('token')
    return { type: types.UNAUTH_USER }
}

export function fetchMessage() {
    return {
        type: types.FETCH_MESSAGE,
        payload: axios.get(API_URL, { headers: AUTH_HEADER })
    }
}