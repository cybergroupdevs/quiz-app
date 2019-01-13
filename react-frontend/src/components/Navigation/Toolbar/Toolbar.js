import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import AuthManager from '../../../containers/AuthManager/AuthManager'

const toolbar = () => (
  <header className={styles.Toolbar}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <div className={styles.AuthManager}>
      <AuthManager />
    </div>
  </header>
);

export default toolbar;
