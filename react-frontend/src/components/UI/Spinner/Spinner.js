import React from 'react'
import styles from './Spinner.module.css'

const spinner = (props) => (
  // The size of the spinner would depend on the font size of the component
  // which can be passed via className
  <div className={[styles.Loader, props.className].join(' ')}>Loading...</div>
)

export default spinner