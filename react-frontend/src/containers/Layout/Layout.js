import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import { Route } from 'react-router-dom'
import AuthManager from '../AuthManager/AuthManager'

class Layout extends Component {
  
  render() {
    return (
      <Aux>
        <Toolbar />
        <Route path='/auth' component={AuthManager} />
      </Aux>
    );
  }
}

export default Layout;
