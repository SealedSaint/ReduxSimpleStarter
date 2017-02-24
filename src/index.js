import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'

import App from './components/app.component'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(
    multi,
    promise
)(createStore)

ReactDOM.render (
    (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    ),
    document.querySelector('.container')
)
