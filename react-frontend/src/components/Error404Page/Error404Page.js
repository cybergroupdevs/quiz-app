import React from 'react'
import styles from './Error404Page.module.css'
import Button from '../UI/Button/Button'
import { withRouter } from 'react-router-dom'

const error404Page = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Emoji}>:&#40;</div>
      <div>
        <p className={styles.ErrorHeader}>404 - Page Not Found</p>
        <p className={styles.ErrorBody}>The page you are looking for might have been removed had its name changed or is 
        temporarily unavailable.</p>
        <Button
          clicked={() => props.history.push('/')}
          className={styles.ErrorButton}>Home Page</Button>
      </div>
    </div>
  )
}

export default withRouter(error404Page);
