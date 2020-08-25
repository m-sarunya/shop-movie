import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './containers/Main/index'
class Page extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path={`/`}
                    component={Main}
                />
            </Switch>
        )
    }
}

export default Page
