import { CREATE_POST, CREATE_POST_LOADING, UPDATE_CREATE_POST_FORM } from '../actions/index'

export default function(state = {
    createdPost: null,
    createPostIsLoading: false,
    formTitle: '',
    formContent: ''
}, action) {
    switch(action.type) {
        case CREATE_POST_LOADING:
            return Object.assign({}, state, {
                createdPost: null,
                createPostIsLoading: true
            })
        case CREATE_POST:
            return {
                createdPost: action.payload.data,
                createPostIsLoading: false,
                formTitle: '',
                formContent: ''
            }
        case UPDATE_CREATE_POST_FORM:
            return Object.assign({}, state, action.formData)
        default:
            return state
    }
}