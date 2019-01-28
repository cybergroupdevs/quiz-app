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

  let cardContent = null
  if (props.header) {
    cardContent = (
      <div className={[styles.Card, props.className].join(' ')}>
        {closeButton}
        <div className={styles.CardHeader}>{props.header}</div>
        {props.children}
      </div>
    )
  } else {
    cardContent = (
      <div className={[styles.Card, props.className].join(' ')}>
        {closeButton}
        {props.children}
      </div>
    )
  }
  return cardContent
}

export default card