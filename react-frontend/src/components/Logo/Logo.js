import React from "react";
import styles from "./Logo.module.css";
import appLogo from "../../assets/images/logo.png";

const logo = () => (
  <div className={styles.Logo}>
    <img src={appLogo} alt="quizz logo" />
  </div>
);

export default logo;
