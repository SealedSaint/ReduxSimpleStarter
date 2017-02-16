import axios from 'axios'

export const CREATE_POST = 'CREATE_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST'

function buildUrl(path) {
    const rootUrl = 'http://reduxblog.herokuapp.com/api'
    const API_KEY = '?key=decKEY'
    return `${rootUrl}${path}${API_KEY}`
}

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: axios.post(buildUrl('/posts'))
    }
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