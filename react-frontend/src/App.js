import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import ComponentTester from './containers/ComponentTester/ComponentTester'
import { connect } from 'react-redux'
import * as actions from './store/actions'

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoLogin()
  }

  render() {
    const routes = (
      <Switch>
        <Route path='/test' component={ComponentTester} />
        <Route path='/' component={Layout} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      // Place all your protected routes here
    } else {
      // Place all your public routes here
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.authToken !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.autoAuth())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
