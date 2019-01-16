import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from 'react-router-dom'
import ComponentTester from './containers/ComponentTester/ComponentTester'

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path='/test' component={ComponentTester} />
        <Route path='/' exact component={Layout} />
      </Switch>
    )
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
