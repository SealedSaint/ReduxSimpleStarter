import * as types from '../actions/types'

export default (state=null, action) => {
    switch(action.type) {
        case types.FETCH_MESSAGE:
            return action.message
        default:
            return state
    }
}