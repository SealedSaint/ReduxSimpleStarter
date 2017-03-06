import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {Router, Route, browserHistory} from 'react-router'

import {Restricted} from './components/restricted';
import App from './components/app.component'
import Resources from './components/resources.component'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route component={Restricted}>
                        <Route path="resources" component={Resources}/>
                    </Route>
                </Route>
            </Router>
        </Provider>
    ),
    document.querySelector('.container')
)
