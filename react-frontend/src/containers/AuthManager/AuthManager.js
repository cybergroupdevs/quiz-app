import React, { Component } from 'react'
import styles from './AuthManager.module.css'
import Button from '../../components/UI/Button/Button'

class AuthManager extends Component {
  render() {
    return (
      <div className={styles.AuthManager}>
        <Button
          btnType='Normal'
          clicked={null}>Log In</Button>
        <div className={styles.HorizontalStub}></div>
        <Button
          btnType='Accent'
          clicked={null}>Sign Up</Button>
      </div>
    )
  }
}

export default AuthManager