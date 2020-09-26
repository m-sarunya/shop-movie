import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Page from './containers/Page'
import Cart from './containers/Page/Cart'
import './App.css';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
