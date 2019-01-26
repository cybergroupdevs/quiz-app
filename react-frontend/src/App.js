import React, { Component } from "react";
import Home from "./containers/Home/Home";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import ComponentTester from './containers/ComponentTester/ComponentTester'
import Error404Page from './components/Error404Page/Error404Page'
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
        <Route path='/' exact component={Home} />
        <Route path='/error404' component={Error404Page} /> 
        <Redirect to='/error404' />
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
