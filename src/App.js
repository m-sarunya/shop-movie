import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Page from './containers/Page'
import './App.css';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Page} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
