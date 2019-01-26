import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import { Link } from 'react-router-dom'

const toolbar = () => (
  <header className={styles.Toolbar}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <div className={styles.AuthManager}>
      <Link to={{
          pathname: '/auth', 
          state: {
            isLoggingIn: true
          }
        }}>Log In</Link>
      <Link to={{
          pathname: '/auth', 
          state: {
            isLoggingIn: false
          }
        }}>Sign up</Link>
    </div>
  </header>
);

export default toolbar;
