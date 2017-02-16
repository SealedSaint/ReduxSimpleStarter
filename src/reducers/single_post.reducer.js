import { FETCH_SINGLE_POST } from '../actions/index'

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_SINGLE_POST:
            return action.payload.data
        default:
            return state
    }
}