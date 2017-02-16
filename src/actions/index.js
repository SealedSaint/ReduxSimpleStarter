import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST'

const rootUrl = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=decKEY'

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: axios.get(`${rootUrl}/posts${API_KEY}`)
    }
}

export function fetchSinglePost(id) {
    return {
        type: FETCH_SINGLE_POST,
        payload: axios.get(`${rootUrl}/posts/${id}${API_KEY}`)
    }
}