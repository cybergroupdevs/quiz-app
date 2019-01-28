import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Button from '../../UI/Button/Button'

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <div>
      <Button 
        btnType='Normal' 
        className={styles.AuthButtons}
        clicked={props.openLoginAuthForm}>
        Log in
      </Button>
      <div className={styles.HorizontalStub}></div>
      <Button 
        btnType='Accent' 
        className={styles.AuthButtons}
        clicked={props.openSignupAuthForm}>
        Sign up
      </Button>
    </div>
  </header>
);

export default toolbar;
