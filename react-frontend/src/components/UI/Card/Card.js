import React from 'react'
import styles from './Card.module.css'

const card = (props) => {
  let closeButton = null;
  if (typeof props.onclose !== 'undefined') {
    closeButton = (
      <span 
        className={styles.CloseButton}
        onClick={props.onclose}>&#215;</span>
    )
  }
  return (
    <div className={styles.Card}>
      {closeButton}
      {props.children}
    </div>
  )
}

export default card