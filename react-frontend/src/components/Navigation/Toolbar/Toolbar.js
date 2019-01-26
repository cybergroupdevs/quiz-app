import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'

const toolbar = () => (
  <header className={styles.Toolbar}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <div>
      <Button btnType='Normal' className={styles.AuthButtons}>
        <Link to={{
          pathname: '/auth', 
          state: {
            isLoggingIn: true
          }
        }}>Log In</Link>
      </Button>
      <div className={styles.HorizontalStub}></div>
      <Button btnType='Accent' className={styles.AuthButtons}>
        <Link to={{
          pathname: '/auth', 
          state: {
            isLoggingIn: false
          }
        }}>Sign up</Link>
      </Button>
    </div>
  </header>
);

export default toolbar;
