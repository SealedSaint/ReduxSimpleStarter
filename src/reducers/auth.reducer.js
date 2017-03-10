import * as types from '../actions/types'

const defaultState = {
    authenticated: false,
    error: null
}
export default (state=defaultState, action) => {
    switch(action.type) {
        case types.AUTH_USER:
            return {
                authenticated: true,
            }
        case types.UNAUTH_USER:
            return {
                authenticated: false
            }
        case types.AUTH_ERROR:
            return {
                error: action.error
            }
        default:
            return state
    }
}