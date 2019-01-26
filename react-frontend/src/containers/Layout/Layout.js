import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import AuthManager from '../AuthManager/AuthManager'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

class Layout extends Component {


  openLoginAuthFormHandler = () => {
    this.props.setAuthMode(true)
    this.props.setAuthVisibility(true)
  }

  openSignupAuthFormHandler = () => {
    this.props.setAuthMode(false)
    this.props.setAuthVisibility(true)
  }
  
  render() {
    return (
      <Aux>
        <Toolbar
          openLoginAuthForm={this.openLoginAuthFormHandler}
          openSignupAuthForm={this.openSignupAuthFormHandler} />
        {this.props.isAuthFormVisible ? <AuthManager /> : null}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthFormVisible: state.auth.authForm.isVisible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAuthVisibility: (isVisible) => dispatch(actions.authFormSetVisibility(isVisible)),
    setAuthMode: (isLoggingIn) => dispatch(actions.authFormSetMode(isLoggingIn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
