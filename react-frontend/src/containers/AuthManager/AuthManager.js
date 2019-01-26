import React, { Component } from 'react'
import styles from './AuthManager.module.css'
import Button from '../../components/UI/Button/Button'
import Modal from '../../components/UI/Modal/Modal'
import Input from '../../components/UI/Input/Input'
import checkValidity from '../../utility/checkValidity'
import Logo from '../../components/Logo/Logo'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class AuthManager extends Component {

  state = {
    authForm: {
      fullname: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Full Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email Address',
				},
				value: '',
				validation: {
          required: true,
          isEmail: true
				},
				valid: false,
				touched: false
      },
      password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password',
				},
				value: '',
				validation: {
          required: true,
          minLength: 6
				},
				valid: false,
				touched: false
			}
    },
    isLoggingIn: this.props.location.state ? this.props.location.state.isLoggingIn : true,
  };

  openSignUpFormHandler = () => {
    this.setState({
      isLoggingIn: false
    })
  }

  openLogInFormHandler = () => {
    this.setState({
      isLoggingIn: true
    })
  }

  closeAuthFormHandler = () => {
    this.props.history.goBack()
  }

  inputChangedHandler = (event, controlName) => {
		const updatedAuthForm = {
      ...this.state.authForm,
      [controlName]: {
        ...this.state.authForm[controlName],
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.authForm[controlName].validation),
        touched: true
      }
    }
    this.setState({authForm: updatedAuthForm})
  }

  submitHandler = (event) => {
    event.preventDefault()

    const reqBody = {
      data: {
        email: this.state.authForm.email.value,
        password: this.state.authForm.password.value
      }
    }
    if (!this.state.isLoggingIn) {
      // If Signing Up
      reqBody.data['fullname'] = this.state.authForm.fullname.value  
    }

    this.props.onAuth(reqBody, !this.state.isLoggingIn)
  }

  switchAuthAccessHandler = () => {
    this.setState((prevState) => {
      return {
        isLoggingIn: !prevState.isLoggingIn,
      }
    })
  }

  render() {
    const formElementsArray = []
		for (let key in this.state.authForm) {
      if (this.state.isLoggingIn && key !== 'fullname') {
        // If Logging In, don't use the field fullname
        formElementsArray.push({
          id: key,
          config: this.state.authForm[key]
        })
      } else if (!this.state.isLoggingIn) {
        // If Signing Up, use all fields
        formElementsArray.push({
          id: key,
          config: this.state.authForm[key]
        })
      }
    }
    
    let form = formElementsArray.map(formElement => (
      <Input 
        className={styles.AuthInput}
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        invalid={!formElement.config.valid}
        value={formElement.config.value} />
    ))
    
    let authFooterText = this.state.isLoggingIn ? "Don't have an account? " : "Already have an account? "
    const authFooter = (
      <div className={styles.AuthFooter}>
        {authFooterText}
        <span className={styles.Link} onClick={this.switchAuthAccessHandler}>{this.state.isLoggingIn ? "Sign up" : "Log in"}</span>
      </div>
    )

    return (
      <div className={styles.AuthManager}>
        <Modal
          className={styles.AuthModal}
          show={true}
          modalClosed={this.closeAuthFormHandler}
          header={this.state.isLoggingIn ? 'Log In to to your quizz account' : 'Sign Up and start quizzing'}>
          {this.props.loading ? <Spinner className={styles.AuthSpinner} /> : <Logo className={styles.AuthLogo} />}  
          <form onSubmit={this.submitHandler}>
            {form}
            <Button className={styles.AuthSubmitBtn} btnType="Accent">{this.state.isLoggingIn ? 'Log In' : 'Sign Up'}</Button>
          </form>
          {authFooter}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (authData, isSignup) => dispatch(actions.auth(authData, isSignup))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthManager)