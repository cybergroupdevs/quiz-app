import React from "react";
import styles from "./Logo.module.css";
import appLogo from "../../assets/images/logo.png";

const logo = (props) => (
  <div className={[styles.Logo, props['className']].join(' ')}>
    <img src={appLogo} alt="quizz logo" />
  </div>
);

export default logo;
