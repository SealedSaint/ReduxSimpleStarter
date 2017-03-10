import * as types from '../actions/types'

export default (state=null, action) => {
    switch(action.type) {
        case types.FETCH_MESSAGE:
            return action.payload.data.message
        default:
            return state
    }
}