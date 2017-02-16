import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Post from '../containers/single_post.container'
import PostList from '../containers/post_list.container'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/posts" />
                    )} />
                    <Route exact path="/posts" component={PostList} />
                    <Route path="/posts/:id" render={({ match }) => (
                        <Post id={match.params.id} />
                    )} />
                </Switch>
            </Router>
        )
    }
}
