import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import * as types from './actions/types'
import reducers from './reducers'
import App from './components/app.component'

const createStoreWithMiddleware = applyMiddleware(
    ReduxThunk,
    ReduxPromise
)(createStore)

const store = createStoreWithMiddleware(reducers)

// If there is a token in local storage, consider the user signed in
if(localStorage.getItem('token')) store.dispatch({ type: types.AUTH_USER })

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
)
