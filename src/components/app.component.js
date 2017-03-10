import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import HeaderBar from './header_bar.component'
import SignIn from './auth/sign_in.component'
import SignUp from './auth/sign_up.component'
import Home from './home.component'
import RequireAuth from './hoc/require_auth.hoc'
import SpecialFeature from './special_feature.component'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderBar />
                    <div className="content" style={styles.content}>
                        <Switch>
                            <Route exact path="/special" component={RequireAuth(SpecialFeature)} />
                            <Route exact path="/signin" component={SignIn} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const styles = {
    content: {
        padding: "10px"
    }
}
