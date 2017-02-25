import axios from 'axios'

export const CREATE_POST = 'CREATE_POST'
export const CREATE_POST_LOADING = 'CREATE_POST_LOADING'
export const DELETE_POST = 'DELETE_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST'
export const UNMOUNT_SINGLE_POST = 'UNMOUNT_SINGLE_POST'
export const UPDATE_CREATE_POST_FORM = 'UPDATE_CREATE_POST_FORM'

function buildUrl(path) {
    const rootUrl = 'http://reduxblog.herokuapp.com/api'
    const API_KEY = '?key=decKEY'
    return `${rootUrl}${path}${API_KEY}`
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: axios.delete(buildUrl(`/posts/${id}`))
    }
}

// This action creator encompasses CREATE_POST and CREATE_POST_LOADING
export function submitPost(post) {
    return [
        {
            type: CREATE_POST,
            payload: axios.post(buildUrl('/posts'), post)
        },
        {
            type: CREATE_POST_LOADING
        }
    ]
}

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: axios.get(buildUrl('/posts'))
    }
}

export function fetchSinglePost(id) {
    return {
        type: FETCH_SINGLE_POST,
        payload: axios.get(buildUrl(`/posts/${id}`))
    }
}

export function unmountSinglePost() {
    return {
        type: UNMOUNT_SINGLE_POST
    }
}

export function updateCreatePostForm(formData) {
    return {
        type: UPDATE_CREATE_POST_FORM,
        formData: formData
    }
}
